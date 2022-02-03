export default {
  bail: true,
  setupFiles: ['<rootDir>/jest.setup.ts'],

  clearMocks: true,

  preset: 'ts-jest',

  testEnvironment: 'node',

  testMatch: ['<rootDir>/ts/Tests/**/*.spec.ts'],
}
