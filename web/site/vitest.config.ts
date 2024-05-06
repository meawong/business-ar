import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'
// import Keycloak from 'keycloak-js'
// import { vi } from 'vitest'
// import keycloakClient from './plugins/keycloak.client'
// import mockedKeycloak from './tests/mocks/mockedKeycloak'

// const mockedKeycloak: Partial<Keycloak> = {
//   init: vi.fn(),
//   login: vi.fn(),
//   logout: vi.fn(),
//   authenticated: true
// }

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    dir: 'tests',
    // coverage: {
    //   reportsDirectory: 'coverage',
    // },
    includeSource: ['../pages/index.vue'],
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('./', import.meta.url)),
        domEnvironment: 'happy-dom'
        // overrides: {
        //   plugins: [
        //     mockedKeycloak, 'keycloak'
        //   ]
        // }
        // mock: {
        //   indexedDb: true,
        // },
      }
    },
    // setupFiles: './tests/setup/i18n.ts',
    globals: true
  }
})
