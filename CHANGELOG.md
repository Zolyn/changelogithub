# Changelog

## [0.7.2](https://github.com/Zolyn/changelogithub/compare/v0.7.1...v0.7.2) (2022-06-21)

### 🐞 Bug Fixes

- Remove redundant NEXT_VERSION changelog [`b0aaf40`](https://github.com/Zolyn/changelogithub/commit/b0aaf40)

## [0.7.1](https://github.com/Zolyn/changelogithub/compare/v0.7.0...v0.7.1) (2022-06-21)

### 🐞 Bug Fixes

- Duplicate changelog when NEXT_VERSION becomes an avaliable tag [`23e52cb`](https://github.com/Zolyn/changelogithub/commit/23e52cb)

# [0.7.0](https://github.com/Zolyn/changelogithub/compare/v0.6.6...v0.7.0) (2022-06-21)

### 🚀 Features

- Add `outfile` option [`91a1d65`](https://github.com/Zolyn/changelogithub/commit/91a1d65)
- Generate changelog file [`f0c9f80`](https://github.com/Zolyn/changelogithub/commit/f0c9f80)

### 🐞 Bug Fixes

- Duplicate changelog when generating changelog for NEXT_VERSION [`cc90bf6`](https://github.com/Zolyn/changelogithub/commit/cc90bf6)

## [0.6.6](https://github.com/Zolyn/changelogithub/compare/v0.6.5...v0.6.6) (2022-06-18)

### 🐞 Bug Fixes

- Fallback to the first git commit, close [`#14`](https://github.com/Zolyn/changelogithub/issues/14)

## [0.6.5](https://github.com/Zolyn/changelogithub/compare/v0.6.4...v0.6.5) (2022-06-15)

### 🐞 Bug Fixes

- Cli name [`#13`](https://github.com/Zolyn/changelogithub/issues/13)
- Dedupe contributors [`a911feb`](https://github.com/Zolyn/changelogithub/commit/a911feb)

## [0.6.4](https://github.com/Zolyn/changelogithub/compare/v0.6.3...v0.6.4) (2022-06-15)

### 🐞 Bug Fixes

- Github tag check [`80aac7a`](https://github.com/Zolyn/changelogithub/commit/80aac7a)

## [0.6.3](https://github.com/Zolyn/changelogithub/compare/v0.6.2...v0.6.3) (2022-06-15)

### 🐞 Bug Fixes

- `isRefGitTag` check [`81f6bdc`](https://github.com/Zolyn/changelogithub/commit/81f6bdc)

## [0.6.2](https://github.com/Zolyn/changelogithub/compare/v0.6.1...v0.6.2) (2022-06-15)

### 🐞 Bug Fixes

- `isRefGitTag` check [`ef606e4`](https://github.com/Zolyn/changelogithub/commit/ef606e4)

## [0.6.1](https://github.com/Zolyn/changelogithub/compare/v0.6.0...v0.6.1) (2022-06-15)

### 🐞 Bug Fixes

- Remove github tag check for now [`604ee5b`](https://github.com/Zolyn/changelogithub/commit/604ee5b)

# [0.6.0](https://github.com/Zolyn/changelogithub/compare/v0.5.1...v0.6.0) (2022-06-15)

### 🚀 Features

- Use `cac` for cli parser, close [`#12`](https://github.com/Zolyn/changelogithub/issues/12)
- Check tag's availability on GitHub [`6f68066`](https://github.com/Zolyn/changelogithub/commit/6f68066)

### 🐞 Bug Fixes

- Check if it's a git tag, close [`#10`](https://github.com/Zolyn/changelogithub/issues/10)

## [0.5.1](https://github.com/Zolyn/changelogithub/compare/v0.5.0...v0.5.1) (2022-06-14)

### 🚀 Features

- New `capitalize` and `groupByScope` options [`#8`](https://github.com/Zolyn/changelogithub/issues/8)

# [0.5.0](https://github.com/Zolyn/changelogithub/compare/v0.4.1...v0.5.0) (2022-06-14)

### 🚨 Breaking Changes

- Change config interface [`3bd35cc`](https://github.com/Zolyn/changelogithub/commit/3bd35cc)

### 🚀 Features

- Respect `scopeMap` [`2ba1c50`](https://github.com/Zolyn/changelogithub/commit/2ba1c50)
- Config to disable contributors section [`f95dfb6`](https://github.com/Zolyn/changelogithub/commit/f95dfb6)

## [0.4.1](https://github.com/Zolyn/changelogithub/compare/v0.4.0...v0.4.1) (2022-06-14)

### 🚀 Features

- Expose `defineConfig` utils [`b58be66`](https://github.com/Zolyn/changelogithub/commit/b58be66)
- Improve error message [`4b1add5`](https://github.com/Zolyn/changelogithub/commit/4b1add5)
- **core**:
  - Support loading options from config file [`#6`](https://github.com/Zolyn/changelogithub/issues/6)

### 🏎 Performance

- Reduce deps [`5f8b18a`](https://github.com/Zolyn/changelogithub/commit/5f8b18a)

# [0.4.0](https://github.com/Zolyn/changelogithub/compare/v0.3.0...v0.4.0) (2022-06-14)

### 🚀 Features

- Contributors section [`4a7ee8f`](https://github.com/Zolyn/changelogithub/commit/4a7ee8f)

### 🐞 Bug Fixes

- Increase section title indentation [`95c5591`](https://github.com/Zolyn/changelogithub/commit/95c5591)

# [0.3.0](https://github.com/Zolyn/changelogithub/compare/v0.2.1...v0.3.0) (2022-06-13)

### 🚀 Features

- Nested scope [`ac7f366`](https://github.com/Zolyn/changelogithub/commit/ac7f366)

## [0.2.1](https://github.com/Zolyn/changelogithub/compare/v0.2.0...v0.2.1) (2022-06-13)

### 🚀 Features

- Refactor cli [`b8412b1`](https://github.com/Zolyn/changelogithub/commit/b8412b1)

### 🐞 Bug Fixes

- Matching name with dot, close [`#3`](https://github.com/Zolyn/changelogithub/issues/3)

# [0.2.0](https://github.com/Zolyn/changelogithub/compare/v0.1.10...v0.2.0) (2022-06-13)

### 🚨 Breaking Changes

- Do not generate `docs:` by default [`e8a83d5`](https://github.com/Zolyn/changelogithub/commit/e8a83d5)

### 🐞 Bug Fixes

- Stale order of each section [`1da54fe`](https://github.com/Zolyn/changelogithub/commit/1da54fe)

## [0.1.10](https://github.com/Zolyn/changelogithub/compare/v0.1.9...v0.1.10) (2022-06-13)

### 🚀 Features

- Support ssh urls [`#1`](https://github.com/Zolyn/changelogithub/issues/1)

## [0.1.9](https://github.com/Zolyn/changelogithub/compare/v0.1.8...v0.1.9) (2022-06-13)

### 🚀 Features

- Improve github changes style [`5c141be`](https://github.com/Zolyn/changelogithub/commit/5c141be)

## [0.1.8](https://github.com/Zolyn/changelogithub/compare/v0.1.7...v0.1.8) (2022-06-13)

### 🐞 Bug Fixes

- Changelog generation [`34fd4d8`](https://github.com/Zolyn/changelogithub/commit/34fd4d8)

## [0.1.7](https://github.com/Zolyn/changelogithub/compare/v0.1.6...v0.1.7) (2022-06-13)

### 🐞 Bug Fixes

- Update github match regex [`63aca62`](https://github.com/Zolyn/changelogithub/commit/63aca62)

## [0.1.6](https://github.com/Zolyn/changelogithub/compare/v0.1.5...v0.1.6) (2022-06-13)

### 🐞 Bug Fixes

- Always display breaking changes regardless of the type [`42703c4`](https://github.com/Zolyn/changelogithub/commit/42703c4)

## [0.1.5](https://github.com/Zolyn/changelogithub/compare/v0.1.4...v0.1.5) (2022-06-13)

### 🐞 Bug Fixes

- Markdown format [`4990a3d`](https://github.com/Zolyn/changelogithub/commit/4990a3d)

## [0.1.4](https://github.com/Zolyn/changelogithub/compare/v0.1.3...v0.1.4) (2022-06-13)

### 🐞 Bug Fixes

- Proper display refs [`64d9c08`](https://github.com/Zolyn/changelogithub/commit/64d9c08)

## [0.1.3](https://github.com/Zolyn/changelogithub/compare/v0.1.2...v0.1.3) (2022-06-13)

### 🚀 Features

- Imporve markdown style [`199e5c8`](https://github.com/Zolyn/changelogithub/commit/199e5c8)

## [0.1.2](https://github.com/Zolyn/changelogithub/compare/v0.1.1...v0.1.2) (2022-06-13)

### 🐞 Bug Fixes

- Bin [`67d6310`](https://github.com/Zolyn/changelogithub/commit/67d6310)

## [0.1.1](https://github.com/Zolyn/changelogithub/compare/v0.1.0...v0.1.1) (2022-06-13)

### 🐞 Bug Fixes

- Allow updating existing release [`0f48765`](https://github.com/Zolyn/changelogithub/commit/0f48765)

# [0.1.0](https://github.com/Zolyn/changelogithub/compare/v0.0.3-beta.6...v0.1.0) (2022-06-13)

### 🚀 Features

- Improve sha display [`dfba1b3`](https://github.com/Zolyn/changelogithub/commit/dfba1b3)

## [0.0.3-beta.6](https://github.com/Zolyn/changelogithub/compare/v0.0.3-beta.5...v0.0.3-beta.6) (2022-06-13)

### 🐞 Bug Fixes

- Improve tag detection [`b99178c`](https://github.com/Zolyn/changelogithub/commit/b99178c)

## [0.0.3-beta.5](https://github.com/Zolyn/changelogithub/compare/v0.0.3-beta.4...v0.0.3-beta.5) (2022-06-13)

### 🐞 Bug Fixes

- Generation error [`489b23f`](https://github.com/Zolyn/changelogithub/commit/489b23f)

## [0.0.3-beta.4](https://github.com/Zolyn/changelogithub/compare/v0.0.3-beta.3...v0.0.3-beta.4) (2022-06-13)

### 🐞 Bug Fixes

- Update lock [`0690a49`](https://github.com/Zolyn/changelogithub/commit/0690a49)

## [0.0.3-beta.3](https://github.com/Zolyn/changelogithub/compare/v0.0.3-beta.2...v0.0.3-beta.3) (2022-06-13)

### 🐞 Bug Fixes

- Dist [`250725b`](https://github.com/Zolyn/changelogithub/commit/250725b)

## [0.0.3-beta.2](https://github.com/Zolyn/changelogithub/compare/v0.0.3-beta.1...v0.0.3-beta.2) (2022-06-13)

### 🚀 Features

- Use changelogen [`9c5830c`](https://github.com/Zolyn/changelogithub/commit/9c5830c)
- Setup build [`232f57d`](https://github.com/Zolyn/changelogithub/commit/232f57d)

## [0.0.3-beta.1](https://github.com/Zolyn/changelogithub/compare/v0.0.2-beta.1...v0.0.3-beta.1) (2022-06-13)

### 🚨 Breaking Changes

- Update all deps [`79de98f`](https://github.com/Zolyn/changelogithub/commit/79de98f)
- Migarte to ESM [`003a73a`](https://github.com/Zolyn/changelogithub/commit/003a73a)

## [0.0.2-beta.1](https://github.com/Zolyn/changelogithub/compare/9e18461792fbc21eb2332434f5d8d69a402c2655...v0.0.2-beta.1) (2022-06-13)

### 🚨 Breaking Changes

- Require Node v12 [`e97cad8`](https://github.com/Zolyn/changelogithub/commit/e97cad8)

### 🚀 Features

- Default preset to angular [`88ff4fa`](https://github.com/Zolyn/changelogithub/commit/88ff4fa)
- Read from `GITHUB_TOKEN` [`04ce83c`](https://github.com/Zolyn/changelogithub/commit/04ce83c)
- Action [`d747f6d`](https://github.com/Zolyn/changelogithub/commit/d747f6d)
