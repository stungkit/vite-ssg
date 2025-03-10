import fs from 'node:fs/promises'
import { glob } from 'tinyglobby'
import { describe, expect, it } from 'vitest'

describe('multiple-pages', () => {
  it('generates list', async () => {
    const files = await glob('**/*.html', {
      cwd: 'examples/multiple-pages/dist',
    })
    expect(files).toMatchInlineSnapshot(`
      [
        "a.html",
        "b.html",
        "index.html",
        "nested/deep/b.html",
      ]
    `)
  })

  it('generates content', async () => {
    const file = await fs.readFile('examples/multiple-pages/dist/a.html', 'utf-8')
    expect(file).toContain('Page A')
  })
})
