# Changelog

## [0.11.2](https://github.com/Zolyn/changelogithub/compare/v0.11.1...v0.11.2) (2022-07-18)

### Breaking Changes

*   Use `remark` for markdown parser - [<samp>(d8695)</samp>](https://github.com/Zolyn/changelogithub/commit/d869594)

### Bug Fixes

*   Incorrect diff when there is no tags - [<samp>(fadbf)</samp>](https://github.com/Zolyn/changelogithub/commit/fadbf03)

## [0.11.1](https://github.com/Zolyn/changelogithub/compare/v0.11.0...v0.11.1) (2022-07-17)

### Bug Fixes

*   Skipping release due to incorrect logic - [<samp>(38987)</samp>](https://github.com/Zolyn/changelogithub/commit/3898732)

# [0.11.0](https://github.com/Zolyn/changelogithub/compare/v0.10.3...v0.11.0) (2022-07-17)

### Features

*   Strict tag matching, add option `strict` (semi-stable feature) - [<samp>(2f970)</samp>](https://github.com/Zolyn/changelogithub/commit/2f97047)

## [0.10.3](https://github.com/Zolyn/changelogithub/compare/v0.10.2...v0.10.3) (2022-07-06)

### Features

*   Merge with upstream (v0.12.4) - [<samp>(fa9fd)</samp>](https://github.com/Zolyn/changelogithub/commit/fa9fd10)

## [0.10.2](https://github.com/Zolyn/changelogithub/compare/v0.10.1...v0.10.2) (2022-07-05)

### Bug Fixes

*   Missing brackets for hashes - [<samp>(42ea9)</samp>](https://github.com/Zolyn/changelogithub/commit/42ea9ad)

## [0.10.1](https://github.com/Zolyn/changelogithub/compare/v0.10.0...v0.10.1) (2022-07-05)

### Features

*   Merge with upstream (v0.12.3) - [<samp>(99962)</samp>](https://github.com/Zolyn/changelogithub/commit/9996210)

# [0.10.0](https://github.com/Zolyn/changelogithub/compare/v0.9.0...v0.10.0) (2022-07-05)

### Breaking Changes

*   Rename option `outfile` to `outPath` - [<samp>(7a3fd)</samp>](https://github.com/Zolyn/changelogithub/commit/7a3fd5e)

### Features

*   Add option `overwrite` - [<samp>(70932)</samp>](https://github.com/Zolyn/changelogithub/commit/70932b6)

### Bug Fixes

*   Remove unnecessary log - [<samp>(d6948)</samp>](https://github.com/Zolyn/changelogithub/commit/d6948bc)
*   Add logic for deprecated option - [<samp>(611f3)</samp>](https://github.com/Zolyn/changelogithub/commit/611f3e2)

# [0.9.0](https://github.com/Zolyn/changelogithub/compare/v0.8.0...v0.9.0) (2022-07-04)

### Features

*   Generate correct reference links for fork repo (unstable feature) - [<samp>(dcdfd)</samp>](https://github.com/Zolyn/changelogithub/commit/dcdfdda)
*   **cli**: Add option `--out-only` - [<samp>(2258d)</samp>](https://github.com/Zolyn/changelogithub/commit/2258da4)

### Bug Fixes

*   Change log color && add comments - [<samp>(0e30d)</samp>](https://github.com/Zolyn/changelogithub/commit/0e30d43)

# [0.8.0](https://github.com/Zolyn/changelogithub/compare/v0.7.3...v0.8.0) (2022-07-03)

### Features

*   Merge with upstream (v0.12.1) - [<samp>(44a5a)</samp>](https://github.com/Zolyn/changelogithub/commit/44a5acb)

### Bug Fixes

*   Revert change `contributors` to `false` when generating changelog - [<samp>(5ae75)</samp>](https://github.com/Zolyn/changelogithub/commit/5ae7548)

## [0.7.3](https://github.com/Zolyn/changelogithub/compare/v0.7.2...v0.7.3) (2022-06-24)

### Features

*   Change `contributors` to `false` when generating changelog - [<samp>(4ec78)</samp>](https://github.com/Zolyn/changelogithub/commit/4ec7899)

### Bug Fixes

*   Incorrect version generation - [<samp>(83eb0)</samp>](https://github.com/Zolyn/changelogithub/commit/83eb0cf)

## [0.7.2](https://github.com/Zolyn/changelogithub/compare/v0.7.1...v0.7.2) (2022-06-21)

### Bug Fixes

*   Remove redundant NEXT\_VERSION changelog - [<samp>(b0aaf)</samp>](https://github.com/Zolyn/changelogithub/commit/b0aaf40)

## [0.7.1](https://github.com/Zolyn/changelogithub/compare/v0.7.0...v0.7.1) (2022-06-21)

### Bug Fixes

*   Duplicate changelog when NEXT\_VERSION becomes an avaliable tag - [<samp>(23e52)</samp>](https://github.com/Zolyn/changelogithub/commit/23e52cb)

# [0.7.0](https://github.com/Zolyn/changelogithub/compare/v0.6.6...v0.7.0) (2022-06-21)

### Features

*   Add `outfile` option - [<samp>(91a1d)</samp>](https://github.com/Zolyn/changelogithub/commit/91a1d65)
*   Generate changelog file - [<samp>(f0c9f)</samp>](https://github.com/Zolyn/changelogithub/commit/f0c9f80)

### Bug Fixes

*   Duplicate changelog when generating changelog for NEXT\_VERSION - [<samp>(cc90b)</samp>](https://github.com/Zolyn/changelogithub/commit/cc90bf6)
