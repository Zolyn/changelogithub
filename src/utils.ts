import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'

export async function execCommand(cmd: string, args: string[]) {
  const { execa } = await import('execa')
  const res = await execa(cmd, args)
  return res.stdout.trim()
}

/**
 * Forked from https://github.com/remarkjs/remark/blob/main/packages/remark/index.js
*/
export function createRemark() {
  return unified().use(remarkParse).use(remarkStringify, { bullet: '-', listItemIndent: 'one' }).freeze()
}
