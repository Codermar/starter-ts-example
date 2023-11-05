import { describe, expect, it } from 'vitest'
import { deepMerge } from '../src'

describe('shallow merge', () => {
  it('shallow merge objects', () => {
    // expect(1).toEqual(1)
    const merged = deepMerge(
      {
        name: 'Anthony',
      },
      {
        github: 'antfu',
      },
    )
    expect(merged).toEqual({
      name: 'Anthony',
      github: 'antfu',
    })
  })

  it('shallow merge objects with overlaps', () => {
    const merged = deepMerge(
      {
        name: 'Anthony',
        github: 'unknown',
        twitter: 'antfu7',
      },
      {
        github: 'antfu',
      },
    )
    expect(merged).toEqual({
      name: 'Anthony',
      github: 'antfu',
      twitter: 'antfu7',
    })
  })

  it('shallow merge with arrays', () => {
    const merged = deepMerge(
      ['vue', 'react'],
      ['svelte', 'solid'],
    )
    expect(merged).toEqual(['vue', 'react', 'svelte', 'solid'])
  })

  it('deep merge with overlaps', () => {
    const merged = deepMerge(
      {
        name: 'Anthony',
        accounts: {
          github: 'unknown',
        },
        languages: ['JavaScript'],
      },
      {
        accounts: {
          twitter: 'antfu7',
        },
        languages: ['TypeScript', 'Vue'],
      },
    )

    // expect(merged).toEqual({
    //   name: 'Anthony',
    //   accounts: {
    //     github: 'unknown',
    //     twitter: 'antfu7',
    //   },
    // })

    // use Snapshot: the result above would be saved in a file
    expect(merged).toMatchSnapshot()
  })

  it('throws when merging different types', () => {
    // expect used as a function
    expect(() => deepMerge(
      ['foo', 'bar'],
      { foo: 'bar' },
    ).toThrowError('Cannot merge two different types'))

    // use Snapshot
    // expect(merged).toMatchSnapshot()
  })
})
