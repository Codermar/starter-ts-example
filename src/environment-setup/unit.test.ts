import { describe } from 'vitest'

// Setting up jsdom environment specifically for this file
// @vitest-evironment jsdom

describe('vitest', () => {
  it('simple test no need of DOM', () => {
    expect(1).toEqual(1)
  })

  it('should make sure DOM is not available', () => {
    expect(typeof document).toBe('undefined')
  })
})
