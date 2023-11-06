import { describe, expect, it, vi } from 'vitest'
import { getPostBody } from './network'

vi.stubGlobal('fetch', async () => {
  return {
    json: async () => ({
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }),
  }
})

describe('mocking network calls', () => {
  it('should test fetch mock', async () => {
    const result = await getPostBody(1)
    expect(result).toMatchInlineSnapshot(`
      "quia et suscipit
      suscipit recusandae consequuntur expedita et cum
      reprehenderit molestiae ut ut quas totam
      nostrum rerum est autem sunt rem eveniet architecto"
    `)
  })
})
