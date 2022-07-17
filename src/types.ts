import type { GitCommit } from 'changelogen'

export interface GitHubRepo {
  owner: string
  repo: string
}

export interface GitHubAuth {
  token: string
  url: string
}

export interface ChangelogenOptions {
  types: Record<string, { title: string }>
  scopeMap: Record<string, string>
  github: string
  from: string
  to: string
}

export interface Commit extends GitCommit {
  resolvedAuthors?: AuthorInfo[]
}

export interface ChangelogOptions extends Partial<ChangelogenOptions> {
  /**
   * Dry run. Skip releasing to GitHub.
   */
  dry?: boolean
  /**
   * Where to write the changelog.
   */
  outPath?: string
  /**
   * @deprecated - use `outPath` instead
   *
   * Where to write the changelog.
   */
  outfile?: string
  /**
   * Write the changelog only.
   *
   * @default true
   */
  outOnly?: boolean
  /**
   * Overwrite the changelog file when the changelog file is incompatible.
   *
   * @default false
   */
  overwrite?: boolean
  /**
   * Strict tag matching. Only matches tags created by current repository.
   *
   * @default false
   */
  strict?: boolean
  /**
   * Whether to include contributors in release notes.
   *
   * @default true
   */
  contributors?: boolean
  /**
   * Name of the release
   */
  name?: string
  /**
   * Mark the release as a draft
   */
  draft?: boolean
  /**
   * Mark the release as prerelease
   */
  prerelease?: boolean
  /**
   * GitHub Token
   */
  token?: string
  /**
   * Custom titles
   */
  titles?: {
    breakingChanges?: string
  }
  /**
   * Capitalize commit messages
   * @default true
   */
  capitalize?: boolean
  /**
   * Nest commit messages under their scopes
   * @default true
   */
  group?: boolean
  /**
   * Use emojis in section titles
   * @default true
   */
  emoji?: boolean
}

export type ResolvedChangelogOptions = Required<ChangelogOptions>

export interface AuthorInfo {
  commits: string[]
  login?: string
  email: string
  name: string
}

export interface UpstreamRepoInfo {
  repo?: string
  defaultBranch?: string
}
