// Delete tags that are not created by Zolyn
import { p } from '@antfu/utils'
import { bold, green, red, white } from 'kolorist'
import { filterTagsCreatedByRepo, getGitTags, getUpstreamRepo, isCommitAheadOfTargetCommit } from '../src'
import { execCommand } from '../src/utils'

async function main() {
  const tags = await getGitTags()
  const upstreamInfo = await getUpstreamRepo()
  const savedTag = (await filterTagsCreatedByRepo(tags, upstreamInfo))[0]

  await p(tags).forEach(async (tag) => {
    if (!(await isCommitAheadOfTargetCommit(tag, `upstream/${upstreamInfo.defaultBranch!}`)) && tag !== savedTag) {
      await execCommand('git', ['tag', '-d', tag])
      console.log(`${green(bold('Success:'))} delete tag ${white(tag)}`)
    }
  })
}

main().catch((e) => {
  console.error(red(String(e)))
})
