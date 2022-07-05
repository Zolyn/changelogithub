// Delete tags that are not created by Zolyn
import { bold, green, red, white } from 'kolorist'
import { execCommand } from '../src/utils'

async function main() {
  const tags = await execCommand('git', ['tag', '--no-merged', 'HEAD']).then(r => r.split('\n'))
  for (const tag of tags) {
    await execCommand('git', ['tag', '-d', tag])
    console.log(`${green(bold('Success:'))} delete tag ${white(tag)}`)
  }
}

main().catch((e) => {
  console.error(red(String(e)))
})
