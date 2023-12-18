/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80
    }
  },
  testPathIgnorePatterns: [
    // ex: "<rootDir>/ignore/this/path/"
    "./client/",
    "./dist/"
  ]
};