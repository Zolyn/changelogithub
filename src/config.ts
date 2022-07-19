import semver from 'semver'
import { filterTagsCreatedByRepo, getCurrentGitBranch, getFirstGitCommit, getGitHubRepo, getGitTags, getUpstreamRepo, isPrerelease } from './git'
import type { ChangelogOptions, ResolvedChangelogOptions } from './types'

export function defineConfig(config: ChangelogOptions) {
  return config
}

const defaultConfig: ChangelogOptions = {
  scopeMap: {},
  types: {
    feat: { title: '🚀 Features' },
    fix: { title: '🐞 Bug Fixes' },
    perf: { title: '🏎 Performance' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  contributors: true,
  capitalize: true,
  group: true,
  outOnly: true,
  overwrite: false,
  strict: false,
  _isInitial: false,
  _changelog: false,
}

export async function resolveConfig(options: ChangelogOptions) {
  const { loadConfig } = await import('c12')
  const config = await loadConfig<ChangelogOptions>({
    name: 'changelogithub',
    defaults: defaultConfig,
    overrides: options,
  }).then(r => r.config || defaultConfig)

  let tags = await getGitTags()

  config.from = config.from || tags[tags.length - 1]
  config.to = config.to || await getCurrentGitBranch()
  config.github = config.github || await getGitHubRepo()
  config.prerelease = config.prerelease ?? isPrerelease(config.to)

  if (options.strict) {
    if (!semver.valid(config.to))
      tags.push(config.to)

    const upstreamInfo = await getUpstreamRepo(true)

    tags = await filterTagsCreatedByRepo(tags, upstreamInfo)

    if (tags.length === 2 && !(tags[0].startsWith('v') || tags[0].endsWith('^')))
      config._isInitial = true

    config.from = tags[tags.length - 1]
  }
  // xxx(first commit) -> main(current branch)
  else if (!config.from) {
    config._isInitial = true
    config.from = await getFirstGitCommit()
  }

  if (config.to === config.from) {
    config.from = tags[tags.length - 2]

    // xxx(first commit) -> v0.0.1(first tag)
    if (!config.from) {
      config._isInitial = true
      config.from = await getFirstGitCommit()
    }
  }

  return config as ResolvedChangelogOptions
}
