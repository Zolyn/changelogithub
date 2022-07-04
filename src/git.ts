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
  return execCommand('git', ['--no-pager', 'tag', '-l', '--sort=taggerdate']).then(r => r.split('\n'))
}

export async function isRepoShallow() {
  return (await execCommand('git', ['rev-parse', '--is-shallow-repository'])).trim() === 'true'
}

export async function getLastGitTag(delta = 0) {
  const tags = await getGitTags()
  return tags[tags.length + delta - 1]
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
  return await execCommand('git', ['config', '--get', 'remote.upstream.fetch']).then(r => r.split('/').pop()!)
}

export async function getFirstGitCommit() {
  return await execCommand('git', ['rev-list', '--max-parents=0', 'HEAD'])
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

export function isPrerelease(version: string) {
  return version.includes('-')
}
