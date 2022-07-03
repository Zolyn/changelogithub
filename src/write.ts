import { readFile, stat, writeFile } from 'node:fs/promises'
import semver from 'semver'
import { bold, red, white } from 'kolorist'
import type { ResolvedChangelogOptions } from './types'
import { INITIAL_VERSION_MARK, NEXT_VERSION_MARK } from './constants'
import { getCurrentGitBranch, getFirstGitCommit, getGitCommitTime, getGitTags, getReferenceRepo, getUpstreamRepo } from './git'
import { generate } from './generate'

export function formatTime(val: number): string {
  return val < 10 ? `0${val}` : val.toString()
}

export async function genChangelog(config: ResolvedChangelogOptions, md: string) {
  const currentVer = semver.valid(config.from) || INITIAL_VERSION_MARK
  const releaseVer = semver.valid(config.to) || NEXT_VERSION_MARK
  let heading = '##'
  if (releaseVer !== NEXT_VERSION_MARK && !['patch', 'prepatch', 'prerelease'].includes(semver.diff(currentVer === INITIAL_VERSION_MARK ? 'v0.0.0' : currentVer, releaseVer)!))
    heading = '#'

  const compareLink = `[${releaseVer}](https://github.com/${config.github}/compare/${config.from}...${config.to})`

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

export function incompleteChangelogError(changelogPath: string) {
  console.error(red(`The changelog file ${white(bold(changelogPath))} is incomplete (It may not be entirely generated by Changelogithub, or it may be caused by a bug in Changelogithub), it is recommended to delete the changelog file and regenerate a full changelog by using Changelogithub.`))
  process.exitCode = 1
}

export async function writeChangelog(options: ResolvedChangelogOptions, content: string) {
  let needCreateFile = false
  const fileStats = await stat(options.outfile).catch((err) => {
    if (err.code !== 'ENOENT') {
      console.error(red(String(err)))
      process.exitCode = 1
      return
    }

    needCreateFile = true
  })

  if (fileStats && !fileStats.isFile()) {
    console.error(red(`${white(bold(options.outfile))} is not a file.`))
    process.exitCode = 1
    return
  }

  const lines: string[] = []

  const upstreamInfo = await getUpstreamRepo()

  // Generate full changelog
  if (needCreateFile) {
    const tags = await getGitTags()
    const currentBranch = await getCurrentGitBranch()

    // NEXT_VERSION
    if (tags[tags.length - 1] !== currentBranch)
      tags.push(currentBranch)

    for (let i = tags.length - 1; i >= 0; i -= 1) {
      let from = tags[i - 1]
      const to = tags[i]
      const github = await getReferenceRepo(upstreamInfo, to, options.github)

      if (i === tags.length - 1)
        lines.push('# Changelog', '')

      if (i === 0)
        from = await getFirstGitCommit()

      const { config, md } = await generate({
        ...options,
        from,
        to,
        github,
      })

      lines.push(...(await genChangelog(config, md.replaceAll('&nbsp;', ''))).result)
    }
  }
  // Patch changelog
  else {
    options.github = await getReferenceRepo(upstreamInfo, options.to, options.github)

    const { currentVer, result } = await genChangelog(options, content.replaceAll('&nbsp;', ''))

    if (currentVer === INITIAL_VERSION_MARK) {
      incompleteChangelogError(options.outfile)
      return
    }

    lines.push(...result)

    const resolvedChangelog = await readFile(options.outfile, 'utf-8')
    let nextVersionClip = resolvedChangelog.split(`[${NEXT_VERSION_MARK}]`)

    const changelogClip: string[] = resolvedChangelog.split(`[${currentVer}]`)

    if (!(changelogClip.length > 1)) {
      incompleteChangelogError(options.outfile)
      return
    }

    let changelogHeadClip = changelogClip[0].split('\n')

    let currentVerHeading = changelogHeadClip[changelogHeadClip.length - 1]

    nextVersionClip = changelogClip[0].split(`[${NEXT_VERSION_MARK}]`)

    // Drop the changelog of NEXT_VERSION if exists
    if (nextVersionClip.length > 1) {
      changelogHeadClip = nextVersionClip[0].split('\n')
      const nextVersionChangelogClip = nextVersionClip[1].split('\n')
      currentVerHeading = nextVersionChangelogClip[nextVersionChangelogClip.length - 1]
    }

    changelogHeadClip[changelogHeadClip.length - 1] = lines.join('\n')
    changelogHeadClip.push(currentVerHeading)
    changelogClip[0] = changelogHeadClip.join('\n')

    return writeFile(options.outfile, changelogClip.join(`[${currentVer}]`))
  }

  return writeFile(options.outfile, lines.join('\n'))
}
