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
  coverageReporters: ['text-summary', 'lcov', 'text', 'json', 'clover'],
  coveragePathIgnorePatterns: ['<rootDir>/src/tests', '<rootDir>/src/library'],
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
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage',
        outputName: 'junit.xml',
      },
    ],
  ],
};
