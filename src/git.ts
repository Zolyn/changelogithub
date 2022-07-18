import { p } from '@antfu/utils'
import { RawGitCommit } from 'changelogen'
import type { UpstreamRepoInfo } from './types'
import { execCommand } from './utils'

export async function getGitHubRepo(remote = 'origin') {
  const url = await execCommand('git', ['config', '--get', `remote.${remote}.url`])
  const match = url.match(/github\.com[\/:]([\w\d._-]+?)\/([\w\d._-]+?)(\.git)?$/i)
  if (!match)
    throw new Error(`Can not parse GitHub repo from url ${url}`)
  return `${match[1]}/${match[2]}`
}

export async function getCurrentGitBranch() {
  return await execCommand('git', ['tag', '--points-at', 'HEAD']) || await execCommand('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
}

export async function getGitCommitTime(commit: string) {
  return execCommand('git', ['log', '--format=%ct', commit]).then(r => r.split('\n')[0])
}

export async function getGitTags() {
  return execCommand('git', ['--no-pager', 'tag', '-l', '--sort=taggerdate']).then(r => r.split('\n').filter(Boolean))
}

export async function isRepoShallow() {
  return (await execCommand('git', ['rev-parse', '--is-shallow-repository'])).trim() === 'true'
}

export async function isCommitAheadOfTargetCommit(commit: string, targetCommit: string) {
  return execCommand('git', ['log', '--oneline', commit, `^${targetCommit}`]).then(r => !!r.split('\n')[0])
}

export async function isRefGitTag(to: string) {
  const { execa } = await import('execa')
  try {
    await execa('git', ['show-ref', '--verify', `refs/tags/${to}`], { reject: true })
  }
  catch {
    return false
  }
}

export async function getUpstreamDefaultBranch() {
  return execCommand('git', ['config', '--get', 'remote.upstream.fetch']).then(r => r.split('/').pop()!)
}

export async function getFirstGitCommit() {
  return execCommand('git', ['rev-list', '--max-parents=0', 'HEAD'])
}

/**
 * ! Unstable feature: Generate correct reference links for fork repo
 * The references in the commits of the upstream belong to the upstream,
 * and the references in the commits which are ahead of the upstream repository belong to the origin
 */
export async function getUpstreamRepo(): Promise<UpstreamRepoInfo> {
  let repo: string | undefined
  let defaultBranch: string | undefined

  try {
    repo = await getGitHubRepo('upstream')
    defaultBranch = await getUpstreamDefaultBranch()
  }
  catch {}

  return {
    repo,
    defaultBranch,
  }
}

export async function getReferenceRepo(upstreamInfo: UpstreamRepoInfo, to: string, github: string) {
  const { repo, defaultBranch } = upstreamInfo
  if (repo && defaultBranch && !(await isCommitAheadOfTargetCommit(to, `upstream/${defaultBranch}`)))
    return repo

  return github
}

/**
 * ? Semi-stable feature: Strict tag matching
 */
export async function filterTagsCreatedByRepo(tags: string[], upstreamInfo: UpstreamRepoInfo): Promise<string[]> {
  const { defaultBranch } = upstreamInfo

  if (defaultBranch) {
    const result: string[] = []
    await p(tags).forEach(async (tag, index) => {
      if (await isCommitAheadOfTargetCommit(tag, `upstream/${defaultBranch}`)) {
        if (!result.length)
          result.push(tags[index - 1])

        result.push(tag)
      }
    })

    if (!result.length)
      throw new Error('No commits or tags found. Try making some commits on your own!')

    return result
  }

  return tags
}

export function isPrerelease(version: string) {
  return version.includes('-')
}

/**
 * Source: https://github.com/unjs/changelogen/blob/main/src/git.ts
 */
export async function getGitDiff (from: string | undefined, to: string = 'HEAD', initial: boolean): Promise<RawGitCommit[]> {
  // https://git-scm.com/docs/pretty-formats
  const r = await execCommand('git', ['--no-pager', 'log', `${from && !initial ? `${from}...` : ''}${to}`, '--pretty="----%n%s|%h|%an|%ae%n%b"', '--name-status'])
  return r.split('----\n').splice(1).map((line) => {
    const [firstLine, ..._body] = line.split('\n')
    const [message, shortHash, authorName, authorEmail] = firstLine.split('|')
    const r: RawGitCommit = {
      message,
      shortHash,
      author: { name: authorName, email: authorEmail },
      body: _body.join('\n')
    }
    return r
  })
}
