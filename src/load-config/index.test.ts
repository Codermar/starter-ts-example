import { describe, expect, it, vi } from 'vitest'
import { loadConfig } from './index'

vi.mock('node:fs', async (importOriginal) => {
  // const actual = await vi.importActual('node:fs') // can also use importOriginal
  const actual = await importOriginal() as typeof import('node:fs')
  return {
    ...actual,
    readFileSync: () => JSON.stringify({ name: 'mocked' }),
  }
})

describe('load-config', () => {
  it('with fs', async () => {
    const result = await loadConfig('./package.json')
    expect(result).toEqual({ name: 'mocked' })
  })

  it('with fs does not exist', async () => {
    const result = await loadConfig('./some.json')
    expect(result).toEqual(undefined)
  })
})
