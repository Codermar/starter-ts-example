import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // environment: 'jsdom', // for vue tests
    // type of tests can also be specifie by globs: i.e.
    // environmentMatchGlobs: [
    //   ['**/test/**/*.test.ts', 'jsdom']
    // ],
    globals: true,
    root: __dirname,
    setupFiles: [
      './vitest.setup.ts',
    ],
  },
})
