# Changelog

## [0.10.3](https://github.com/Zolyn/changelogithub/compare/v0.10.2...v0.10.3) (2022-07-06)

### Features

- Merge with upstream (v0.12.4) - [<samp>(fa9fd)</samp>](https://github.com/Zolyn/changelogithub/commit/fa9fd10)

## [0.10.2](https://github.com/Zolyn/changelogithub/compare/v0.10.1...v0.10.2) (2022-07-05)

### Bug Fixes

- Missing brackets for hashes - [<samp>(42ea9)</samp>](https://github.com/Zolyn/changelogithub/commit/42ea9ad)

## [0.10.1](https://github.com/Zolyn/changelogithub/compare/v0.10.0...v0.10.1) (2022-07-05)

### Features

- Merge with upstream (v0.12.3) - [<samp>(99962)</samp>](https://github.com/Zolyn/changelogithub/commit/9996210)

# [0.10.0](https://github.com/Zolyn/changelogithub/compare/v0.9.0...v0.10.0) (2022-07-05)

### Breaking Changes

- Rename option `outfile` to `outPath` - [<samp>(7a3fd)</samp>](https://github.com/Zolyn/changelogithub/commit/7a3fd5e)

### Features

- Add option `overwrite` - [<samp>(70932)</samp>](https://github.com/Zolyn/changelogithub/commit/70932b6)

### Bug Fixes

- Remove unnecessary log - [<samp>(d6948)</samp>](https://github.com/Zolyn/changelogithub/commit/d6948bc)
- Add logic for deprecated option - [<samp>(611f3)</samp>](https://github.com/Zolyn/changelogithub/commit/611f3e2)

# [0.9.0](https://github.com/Zolyn/changelogithub/compare/v0.8.0...v0.9.0) (2022-07-04)

### Features

- Generate correct reference links for fork repo (unstable feature) - [<samp>(dcdfd)</samp>](https://github.com/Zolyn/changelogithub/commit/dcdfdda)
- **cli**: Add option `--out-only` - [<samp>(2258d)</samp>](https://github.com/Zolyn/changelogithub/commit/2258da4)

### Bug Fixes

- Change log color && add comments - [<samp>(0e30d)</samp>](https://github.com/Zolyn/changelogithub/commit/0e30d43)

# [0.8.0](https://github.com/Zolyn/changelogithub/compare/v0.7.3...v0.8.0) (2022-07-03)

### Features

- Merge with upstream (v0.12.1) - [<samp>(44a5a)</samp>](https://github.com/Zolyn/changelogithub/commit/44a5acb)

### Bug Fixes

- Revert change `contributors` to `false` when generating changelog - [<samp>(5ae75)</samp>](https://github.com/Zolyn/changelogithub/commit/5ae7548)

## [0.7.3](https://github.com/Zolyn/changelogithub/compare/v0.7.2...v0.7.3) (2022-06-24)

### Features

- Change `contributors` to `false` when generating changelog - [<samp>(4ec78)</samp>](https://github.com/Zolyn/changelogithub/commit/4ec7899)

### Bug Fixes

- Incorrect version generation - [<samp>(83eb0)</samp>](https://github.com/Zolyn/changelogithub/commit/83eb0cf)

## [0.7.2](https://github.com/Zolyn/changelogithub/compare/v0.7.1...v0.7.2) (2022-06-21)

### Bug Fixes

- Remove redundant NEXT_VERSION changelog - [<samp>(b0aaf)</samp>](https://github.com/Zolyn/changelogithub/commit/b0aaf40)

## [0.7.1](https://github.com/Zolyn/changelogithub/compare/v0.7.0...v0.7.1) (2022-06-21)

### Bug Fixes

- Duplicate changelog when NEXT_VERSION becomes an avaliable tag - [<samp>(23e52)</samp>](https://github.com/Zolyn/changelogithub/commit/23e52cb)

# [0.7.0](https://github.com/Zolyn/changelogithub/compare/v0.6.6...v0.7.0) (2022-06-21)

### Features

- Add `outfile` option - [<samp>(91a1d)</samp>](https://github.com/Zolyn/changelogithub/commit/91a1d65)
- Generate changelog file - [<samp>(f0c9f)</samp>](https://github.com/Zolyn/changelogithub/commit/f0c9f80)

### Bug Fixes

- Duplicate changelog when generating changelog for NEXT_VERSION - [<samp>(cc90b)</samp>](https://github.com/Zolyn/changelogithub/commit/cc90bf6)

## [0.6.6](https://github.com/antfu/changelogithub/compare/v0.6.5...v0.6.6) (2022-06-18)

### Bug Fixes

- Fallback to the first git commit, close #14 - [<samp>(19cf4)</samp>](https://github.com/antfu/changelogithub/commit/19cf4f8)

## [0.6.5](https://github.com/antfu/changelogithub/compare/v0.6.4...v0.6.5) (2022-06-15)

### Bug Fixes

- Cli name - [<samp>((#13))</samp>](https://github.com/antfu/changelogithub/commit/(#13))
- Dedupe contributors - [<samp>(a911f)</samp>](https://github.com/antfu/changelogithub/commit/a911feb)

## [0.6.4](https://github.com/antfu/changelogithub/compare/v0.6.3...v0.6.4) (2022-06-15)

### Bug Fixes

- Github tag check - [<samp>(80aac)</samp>](https://github.com/antfu/changelogithub/commit/80aac7a)

## [0.6.3](https://github.com/antfu/changelogithub/compare/v0.6.2...v0.6.3) (2022-06-15)

### Bug Fixes

- `isRefGitTag` check - [<samp>(81f6b)</samp>](https://github.com/antfu/changelogithub/commit/81f6bdc)

## [0.6.2](https://github.com/antfu/changelogithub/compare/v0.6.1...v0.6.2) (2022-06-15)

### Bug Fixes

- `isRefGitTag` check - [<samp>(ef606)</samp>](https://github.com/antfu/changelogithub/commit/ef606e4)

## [0.6.1](https://github.com/antfu/changelogithub/compare/v0.6.0...v0.6.1) (2022-06-15)

### Bug Fixes

- Remove github tag check for now - [<samp>(604ee)</samp>](https://github.com/antfu/changelogithub/commit/604ee5b)

# [0.6.0](https://github.com/antfu/changelogithub/compare/v0.5.1...v0.6.0) (2022-06-15)

### Features

- Use `cac` for cli parser, close #12 - [<samp>(2e79c)</samp>](https://github.com/antfu/changelogithub/commit/2e79c72)
- Check tag's availability on GitHub - [<samp>(6f680)</samp>](https://github.com/antfu/changelogithub/commit/6f68066)

### Bug Fixes

- Check if it's a git tag, close #10 - [<samp>(25a96)</samp>](https://github.com/antfu/changelogithub/commit/25a96e7)

## [0.5.1](https://github.com/antfu/changelogithub/compare/v0.5.0...v0.5.1) (2022-06-14)

### Features

- New `capitalize` and `groupByScope` options - [<samp>((#8))</samp>](https://github.com/antfu/changelogithub/commit/(#8))

# [0.5.0](https://github.com/antfu/changelogithub/compare/v0.4.1...v0.5.0) (2022-06-14)

### Breaking Changes

- Change config interface - [<samp>(3bd35)</samp>](https://github.com/antfu/changelogithub/commit/3bd35cc)

### Features

- Respect `scopeMap` - [<samp>(2ba1c)</samp>](https://github.com/antfu/changelogithub/commit/2ba1c50)
- Config to disable contributors section - [<samp>(f95df)</samp>](https://github.com/antfu/changelogithub/commit/f95dfb6)

## [0.4.1](https://github.com/antfu/changelogithub/compare/v0.4.0...v0.4.1) (2022-06-14)

### Features

- Expose `defineConfig` utils - [<samp>(b58be)</samp>](https://github.com/antfu/changelogithub/commit/b58be66)
- Improve error message - [<samp>(4b1ad)</samp>](https://github.com/antfu/changelogithub/commit/4b1add5)
- **core**: Support loading options from config file - [<samp>((#6))</samp>](https://github.com/antfu/changelogithub/commit/(#6))

### Performance

- Reduce deps - [<samp>(5f8b1)</samp>](https://github.com/antfu/changelogithub/commit/5f8b18a)

# [0.4.0](https://github.com/antfu/changelogithub/compare/v0.3.0...v0.4.0) (2022-06-14)

### Features

- Contributors section - [<samp>(4a7ee)</samp>](https://github.com/antfu/changelogithub/commit/4a7ee8f)

### Bug Fixes

- Increase section title indentation - [<samp>(95c55)</samp>](https://github.com/antfu/changelogithub/commit/95c5591)

# [0.3.0](https://github.com/antfu/changelogithub/compare/v0.2.1...v0.3.0) (2022-06-13)

### Features

- Nested scope - [<samp>(ac7f3)</samp>](https://github.com/antfu/changelogithub/commit/ac7f366)

## [0.2.1](https://github.com/antfu/changelogithub/compare/v0.2.0...v0.2.1) (2022-06-13)

### Features

- Refactor cli - [<samp>(b8412)</samp>](https://github.com/antfu/changelogithub/commit/b8412b1)

### Bug Fixes

- Matching name with dot, close #3 - [<samp>(23238)</samp>](https://github.com/antfu/changelogithub/commit/2323832)

# [0.2.0](https://github.com/antfu/changelogithub/compare/v0.1.10...v0.2.0) (2022-06-13)

### Breaking Changes

- Do not generate `docs:` by default - [<samp>(e8a83)</samp>](https://github.com/antfu/changelogithub/commit/e8a83d5)

### Bug Fixes

- Stale order of each section - [<samp>(1da54)</samp>](https://github.com/antfu/changelogithub/commit/1da54fe)

## [0.1.10](https://github.com/antfu/changelogithub/compare/v0.1.9...v0.1.10) (2022-06-13)

### Features

- Support ssh urls - [<samp>((#1))</samp>](https://github.com/antfu/changelogithub/commit/(#1))

## [0.1.9](https://github.com/antfu/changelogithub/compare/v0.1.8...v0.1.9) (2022-06-13)

### Features

- Improve github changes style - [<samp>(5c141)</samp>](https://github.com/antfu/changelogithub/commit/5c141be)

## [0.1.8](https://github.com/antfu/changelogithub/compare/v0.1.7...v0.1.8) (2022-06-13)

### Bug Fixes

- Changelog generation - [<samp>(34fd4)</samp>](https://github.com/antfu/changelogithub/commit/34fd4d8)

## [0.1.7](https://github.com/antfu/changelogithub/compare/v0.1.6...v0.1.7) (2022-06-13)

### Bug Fixes

- Update github match regex - [<samp>(63aca)</samp>](https://github.com/antfu/changelogithub/commit/63aca62)

## [0.1.6](https://github.com/antfu/changelogithub/compare/v0.1.5...v0.1.6) (2022-06-13)

### Bug Fixes

- Always display breaking changes regardless of the type - [<samp>(42703)</samp>](https://github.com/antfu/changelogithub/commit/42703c4)

## [0.1.5](https://github.com/antfu/changelogithub/compare/v0.1.4...v0.1.5) (2022-06-13)

### Bug Fixes

- Markdown format - [<samp>(4990a)</samp>](https://github.com/antfu/changelogithub/commit/4990a3d)

## [0.1.4](https://github.com/antfu/changelogithub/compare/v0.1.3...v0.1.4) (2022-06-13)

### Bug Fixes

- Proper display refs - [<samp>(64d9c)</samp>](https://github.com/antfu/changelogithub/commit/64d9c08)

## [0.1.3](https://github.com/antfu/changelogithub/compare/v0.1.2...v0.1.3) (2022-06-13)

### Features

- Imporve markdown style - [<samp>(199e5)</samp>](https://github.com/antfu/changelogithub/commit/199e5c8)

## [0.1.2](https://github.com/antfu/changelogithub/compare/v0.1.1...v0.1.2) (2022-06-13)

### Bug Fixes

- Bin - [<samp>(67d63)</samp>](https://github.com/antfu/changelogithub/commit/67d6310)

## [0.1.1](https://github.com/antfu/changelogithub/compare/v0.1.0...v0.1.1) (2022-06-13)

### Bug Fixes

- Allow updating existing release - [<samp>(0f487)</samp>](https://github.com/antfu/changelogithub/commit/0f48765)

# [0.1.0](https://github.com/antfu/changelogithub/compare/v0.0.3-beta.6...v0.1.0) (2022-06-13)

### Features

- Improve sha display - [<samp>(dfba1)</samp>](https://github.com/antfu/changelogithub/commit/dfba1b3)

## [0.0.3-beta.6](https://github.com/antfu/changelogithub/compare/v0.0.3-beta.5...v0.0.3-beta.6) (2022-06-13)

### Bug Fixes

- Improve tag detection - [<samp>(b9917)</samp>](https://github.com/antfu/changelogithub/commit/b99178c)

## [0.0.3-beta.5](https://github.com/antfu/changelogithub/compare/v0.0.3-beta.4...v0.0.3-beta.5) (2022-06-13)

### Bug Fixes

- Generation error - [<samp>(489b2)</samp>](https://github.com/antfu/changelogithub/commit/489b23f)

## [0.0.3-beta.4](https://github.com/antfu/changelogithub/compare/v0.0.3-beta.3...v0.0.3-beta.4) (2022-06-13)

### Bug Fixes

- Update lock - [<samp>(0690a)</samp>](https://github.com/antfu/changelogithub/commit/0690a49)

## [0.0.3-beta.3](https://github.com/antfu/changelogithub/compare/v0.0.3-beta.2...v0.0.3-beta.3) (2022-06-13)

### Bug Fixes

- Dist - [<samp>(25072)</samp>](https://github.com/antfu/changelogithub/commit/250725b)

## [0.0.3-beta.2](https://github.com/antfu/changelogithub/compare/v0.0.3-beta.1...v0.0.3-beta.2) (2022-06-13)

### Features

- Use changelogen - [<samp>(9c583)</samp>](https://github.com/antfu/changelogithub/commit/9c5830c)
- Setup build - [<samp>(232f5)</samp>](https://github.com/antfu/changelogithub/commit/232f57d)

## [0.0.3-beta.1](https://github.com/antfu/changelogithub/compare/v0.0.2-beta.1...v0.0.3-beta.1) (2022-06-13)

### Breaking Changes

- Update all deps - [<samp>(79de9)</samp>](https://github.com/antfu/changelogithub/commit/79de98f)
- Migarte to ESM - [<samp>(003a7)</samp>](https://github.com/antfu/changelogithub/commit/003a73a)

## [0.0.2-beta.1](https://github.com/antfu/changelogithub/compare/9e18461792fbc21eb2332434f5d8d69a402c2655...v0.0.2-beta.1) (2022-06-13)

### Breaking Changes

- Require Node v12 - [<samp>(e97ca)</samp>](https://github.com/antfu/changelogithub/commit/e97cad8)

### Features

- Default preset to angular - [<samp>(88ff4)</samp>](https://github.com/antfu/changelogithub/commit/88ff4fa)
- Read from `GITHUB_TOKEN` - [<samp>(04ce8)</samp>](https://github.com/antfu/changelogithub/commit/04ce83c)
- Action - [<samp>(d747f)</samp>](https://github.com/antfu/changelogithub/commit/d747f6d)
