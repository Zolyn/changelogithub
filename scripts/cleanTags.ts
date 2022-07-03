// Delete tags that are not created by Zolyn
import { bold, green, red, white } from 'kolorist'
import { version } from '../package.json'
import { getGitTags } from '../src'
import { execCommand } from '../src/utils'

async function main() {
  const tags = (await getGitTags()).reverse()
  for (const tag of tags) {
    if (tag === `v${version}`)
      break

    await execCommand('git', ['tag', '-d', tag])
    console.log(`${green(bold('Success:'))} delete tag ${white(tag)}`)
  }
}

main().catch((e) => {
  console.error(red(String(e)))
})
