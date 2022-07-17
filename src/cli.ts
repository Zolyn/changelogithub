#!/usr/bin/env node
import { blue, bold, cyan, dim, green, red, yellow } from 'kolorist'
import cac from 'cac'
import { version } from '../package.json'
import { writeChangelog } from './write'
import { generate, hasTagOnGitHub, isRepoShallow, sendRelease } from './index'

const cli = cac('changelogithub')

cli
  .version(version)
  .option('-t, --token <path>', 'GitHub Token')
  .option('--from <ref>', 'From tag')
  .option('--to <ref>', 'To tag')
  .option('--github <path>', 'GitHub Repository, e.g. antfu/changelogithub')
  .option('--name <name>', 'Name of the release')
  .option('--contributors', 'Show contributors section')
  .option('--prerelease', 'Mark release as prerelease')
  .option('-d, --draft', 'Mark release as draft')
  .option('--capitalize', 'Should capitalize for each comment message')
  .option('--emoji', 'Use emojis in section titles', { default: true })
  .option('--group', 'Nest commit messages under their scopes')
  .option('--dry', 'Dry run')
  .option('-o, --out-path <path>', 'Write the changelog to this file')
  .option('--outfile', '[Deprecated] Use --out-path or -o instead')
  .option('--out-only', 'Write the changelog only')
  .option('--overwrite', 'Overwrite the changelog file when the changelog file is incompatible')
  .option('--strict', 'Strict tag matching. Only matches tags created by current repository')
  .help()

cli
  .command('')
  .action(async (args) => {
    args.token = args.token || process.env.GITHUB_TOKEN

    try {
      console.log()
      console.log(dim(`changelo${bold('github')} `) + dim(`v${version}`))

      const { config, md, commits } = await generate(args as any)

      const rawMD = md.replace(/\&nbsp;/g, '')
      console.log(cyan(config.from) + dim(' -> ') + blue(config.to) + dim(` (${commits.length} commits)`))
      console.log(dim('--------------'))
      console.log()
      console.log(rawMD)
      console.log()
      console.log(dim('--------------'))

      if (config.dry) {
        console.log(yellow('Dry run. Release skipped.'))
        return
      }

      if (config.outfile) {
        console.error(red(`Option ${bold('--outfile')} is deprecated, use ${green(bold('--out-path'))} or ${green(bold('-o'))} instead.`))
        process.exitCode = 1
        return
      }

      if (config.outPath) {
        await writeChangelog(config, rawMD)

        if (config.outOnly) {
          console.log(green('Done.'))
          return
        }
      }

      if (!config.token) {
        console.error(red('No GitHub token found, specify it via GITHUB_TOKEN env. Release skipped.'))
        process.exitCode = 1
        return
      }

      if (!await hasTagOnGitHub(config.to, config)) {
        console.error(yellow(`Current ref "${bold(config.to)}" is not available as tags on GitHub. Release skipped.`))
        process.exitCode = 1
        return
      }

      await sendRelease(config, md)

      if (!commits.length && await isRepoShallow()) {
        console.error(yellow('The repo seems to be clone shallowly, which make changelog failed to generate. You might want to specify `fetch-depth: 0` in your CI config.'))
        process.exitCode = 1
        return
      }
    }
    catch (e: any) {
      console.error(red(String(e)))
      if (e?.stack)
        console.error(dim(e.stack?.split('\n').slice(1).join('\n')))
      process.exit(1)
    }
  })

cli.parse()
