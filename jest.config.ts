/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  displayName: {
    name: 'FHIR',
    color: 'green',
  },
  clearMocks: true,
  //collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/tests', '<rootDir>/src/lib'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  verbose: true,
};
