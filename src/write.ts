import { readFile, stat, writeFile } from 'node:fs/promises'
import { bold, red, white, yellow } from 'kolorist'
import semver from 'semver'
import { isNumber, notNullish } from '@antfu/utils'
import type { Link, Text } from 'mdast'
import { INITIAL_VERSION_MARK, NEXT_VERSION_MARK } from './constants'
import { generate } from './generate'
import { createRemark } from './utils'
import { filterTagsCreatedByRepo, getCurrentGitBranch, getFirstGitCommit, getGitCommitTime, getGitTags, getReferenceRepo, getUpstreamRepo } from './git'
import type { ResolvedChangelogOptions, ResolvedUpstreamInfo, UpstreamRepoInfo } from './types'

export function formatTime(val: number): string {
  return val < 10 ? `0${val}` : val.toString()
}

export async function genChangelog(config: ResolvedChangelogOptions, md: string) {
  const currentVer = semver.valid(config.from) || INITIAL_VERSION_MARK
  const releaseVer = semver.valid(config.to) || NEXT_VERSION_MARK
  let heading = '##'
  let version = releaseVer

  // v0.0.1(tag) -> v0.1.0(tag)
  // xxx(first commit) -> v0.1.0(first tag)
  if (releaseVer !== NEXT_VERSION_MARK && !['patch', 'prepatch', 'prerelease'].includes(semver.diff(currentVer === INITIAL_VERSION_MARK ? 'v0.0.0' : currentVer, releaseVer)!))
    heading = '#'

  // xxx(first commit) -> main(current branch)
  if (releaseVer === NEXT_VERSION_MARK && currentVer === INITIAL_VERSION_MARK)
    version = INITIAL_VERSION_MARK

  // NOTE: The comparison for initial version is incomplete because it doesn't include the first commit.
  const compareLink = `[${version}](https://github.com/${config.github}/compare/${config.from}...${config.to})`

  const time = new Date(parseInt(await getGitCommitTime(config.to), 10) * 1000)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const date = time.getDate()

  const releaseDate = `(${year}-${formatTime(month)}-${formatTime(date)})`

  const contentClip = md.split('\n')
  // Remove "View changes on Github"
  contentClip.length = contentClip.length - 2
  contentClip.push('')

  const result = [`${heading} ${compareLink} ${releaseDate}`, '', contentClip.join('\n')]
  return { currentVer, releaseVer, result }
}

export async function incompatibleChangelogError(options: ResolvedChangelogOptions) {
  const { outPath, overwrite } = options

  if (overwrite) {
    console.warn(yellow(`The changelog file ${white(bold(outPath))} is incompatible (It may not be entirely generated by Changelogithub, or it may be caused by a bug in Changelogithub). Trying regenerating changelog...`))
    return writeFullChangelog(options)
  }
  else {
    console.error(red(`The changelog file ${white(bold(outPath))} is incompatible (It may not be entirely generated by Changelogithub, or it may be caused by a bug in Changelogithub), it is recommended to delete the changelog file and regenerate a full changelog by using Changelogithub.`))
    process.exit(1)
  }
}

export async function writeFullChangelog(options: ResolvedChangelogOptions) {
  const lines: string[] = []
  let tags = await getGitTags()
  const currentBranch = await getCurrentGitBranch()

  let upstreamInfo: UpstreamRepoInfo

  // NEXT_VERSION
  if (tags[tags.length - 1] !== currentBranch)
    tags.push(currentBranch)

  if (options.strict) {
    upstreamInfo = await getUpstreamRepo(true)
    tags = await filterTagsCreatedByRepo(tags, upstreamInfo as ResolvedUpstreamInfo)
  }
  else {
    upstreamInfo = await getUpstreamRepo(false)
  }

  for (let i = tags.length - 1; i >= 0; i -= 1) {
    let from = tags[i - 1]
    const to = tags[i]
    const github = options.strict ? options.github : await getReferenceRepo(upstreamInfo, to, options.github)

    let initial = false

    if (i === tags.length - 1)
      lines.push('# Changelog', '')

    if (i === 0) {
      if (options.strict)
        continue

      initial = true
      from = await getFirstGitCommit()
    }

    const { config, md } = await generate({
      ...options,
      from,
      to,
      github,
      _isInitial: initial,
      _changelog: true,
    })

    lines.push(...(await genChangelog(config, md.replaceAll('&nbsp;', ''))).result)
  }

  return writeFile(options.outPath, lines.join('\n'))
}

export async function patchChangelog(options: ResolvedChangelogOptions, content: string) {
  if (!options.strict) {
    const upstreamInfo = await getUpstreamRepo(false)
    options.github = await getReferenceRepo(upstreamInfo, options.to, options.github)
  }

  const resolvedChangelog = await readFile(options.outPath, 'utf-8')

  const { result, releaseVer } = await genChangelog(options, content)

  const Remark = createRemark()
  const ast = Remark.parse(resolvedChangelog)
  const resultAst = Remark.parse(result.join('\n'))
  const versionRE = /^[0-9]+\.[0-9]+\.[0-9]+(-[a-z]+\.[0-9]+)?$|NEXT(\\)?_VERSION|INITIAL(\\)?_VERSION/i

  const versionList = ast.children.map((node, idx) => {
    if (node.type === 'heading' && node.depth <= 2) {
      const link = node.children.find((n): n is Link => n.type === 'link')

      if (link) {
        const text = link.children.find((e): e is Text => e.type === 'text')

        if (text && versionRE.test(text.value)) {
          return {
            index: idx,
            value: text.value,
          }
        }
      }

      return null
    }

    return null
  }).filter(notNullish)

  if (versionList.length) {
    const firstIndex = versionList[0].index
    const lastIndex = versionList[1]?.index
    let restIndex: number = lastIndex

    const isPendingVersion = [NEXT_VERSION_MARK, INITIAL_VERSION_MARK].includes(versionList[0].value)

    if (!isPendingVersion && (releaseVer === NEXT_VERSION_MARK || releaseVer !== versionList[0].value))
      restIndex = firstIndex

    const restOfChildren = ast.children.slice(restIndex)
    ast.children = ast.children.slice(0, firstIndex)
    ast.children.push(...resultAst.children)

    if (isNumber(restIndex))
      ast.children.push(...restOfChildren)
  }
  else {
    return incompatibleChangelogError(options)
  }

  return writeFile(options.outPath, Remark.stringify(ast))
}

export async function writeChangelog(options: ResolvedChangelogOptions, content: string) {
  let needCreateFile = false
  const fileStats = await stat(options.outPath).catch((err) => {
    if (err.code !== 'ENOENT') {
      console.error(red(String(err)))
      process.exit(1)
    }

    needCreateFile = true
  })

  if (fileStats && !fileStats.isFile()) {
    console.error(red(`${white(bold(options.outPath))} is not a file.`))
    process.exit(1)
  }

  // Generate full changelog
  if (needCreateFile)
    return writeFullChangelog(options)

  // Patch changelog
  else
    return patchChangelog(options, content)
}
