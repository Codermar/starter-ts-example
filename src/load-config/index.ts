import { existsSync, readFileSync } from 'node:fs'

export function loadConfig(file: string = './package.json') {
  if (!existsSync(file))
    return undefined
  return JSON.parse(readFileSync(file, 'utf-8'))
}
