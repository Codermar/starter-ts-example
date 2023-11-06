import { beforeEach, describe, expect, it, vi } from 'vitest'

function getCurrenTime() {
  return new Date().toTimeString().slice(0, 5)
}

function warnLater(message: string) {
  setTimeout(() => {
    console.warn(message)
  }, 2_000)
}

describe('time testing', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should mock time in test', () => {
    vi.setSystemTime(new Date('2021-01-01 14:13'))
    expect(getCurrenTime()).toEqual('14:13')
    // restore time mocking
    vi.useRealTimers()
  })

  it('warnLater', async () => {
    const warnSpy = vi.spyOn(console, 'warn')
    warnLater('2 seconds later')
    expect(warnSpy).to.not.toBeCalled()

    // one way to to do it but relying on waiting for the timeout
    // await new Promise(r => setTimeout(r, 2_000))
    // expect(warnSpy).toBeCalledWith('2 seconds later')

    // using fake timers
    // vi.advanceTimersByTime(2_000)

    // or
    // vi.advanceTimersByTime(1999)
    // expect(warnSpy).to.not.toBeCalled()
    // vi.advanceTimersByTime(1)

    // or
    vi.advanceTimersToNextTimer()
    expect(warnSpy).toBeCalledWith('2 seconds later')
  })
})
