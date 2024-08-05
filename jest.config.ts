/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  displayName: {
    name: 'FHIR',
    color: 'green',
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/tests', '<rootDir>/src/lib'],
  coverageThreshold: {
    global: {
      lines: 50,
      statements: 50,
      branches: 50,
      functions: 50,
    },
  },
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  verbose: false,
};
