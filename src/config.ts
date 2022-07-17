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
    if (config.from !== config.to)
      tags.push(config.to)

    tags = await filterTagsCreatedByRepo(tags, await getUpstreamRepo())
    config.from = tags[tags.length - 1]
  }

  if (config.to === config.from)
    config.from = tags[tags.length - 2] || await getFirstGitCommit()

  return config as ResolvedChangelogOptions
}
