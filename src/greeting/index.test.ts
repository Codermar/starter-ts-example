import { describe, expect, it, vi } from 'vitest'
import { greeting } from '.'

describe('greeting', () => {
  // it('should greet', () => {
  //   // expect(1).toEqual(1);
  // })
  it('greeting', () => {
    // expect(greeting('Anthony')).toEqual(undefined)
    const spy = vi.spyOn(console, 'log')

    greeting('World')
    greeting('Anthony')

    // no order checks
    // expect(spy).toHaveBeenCalledWith('Hello, World!')
    // expect(spy).toHaveBeenCalledWith('Hello, Anthony!')

    expect(spy).toHaveBeenCalledTimes(2)

    // specifying order
    expect(spy.mock.calls[0][0]).toBe('Hello, World!')
    expect(spy.mock.calls[1][0]).toBe('Hello, Anthony!')
  })

  it('greeting with mock reset', () => {
    const spy = vi.spyOn(console, 'log')
    greeting('World')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('Hello, World!')

    spy.mockReset()

    greeting('Anthony')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('Hello, Anthony!')

    // Tip:
    expect(spy).toMatchInlineSnapshot(`
      [MockFunction log] {
        "calls": [
          [
            "Hello, Anthony!",
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `)
  })
})
