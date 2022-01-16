const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',

    '!**/jest.config.js**',
    '!**/jest.setup.js**',
    '!**/next.config.js**',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  testTimeout: 30000,
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/base/(.*)$': '<rootDir>/src/components/base/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/components/layouts/$1',
    '^@/widgets/(.*)$': '<rootDir>/src/components/widgets/$1',
    '^@/schemas/(.*)$': '<rootDir>/src/core/schemas/$1',
    '^@/services/(.*)$': '<rootDir>/src/core/services/$1',
    '^@/helpers/(.*)$': '<rootDir>/src/core/helpers/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/core/hooks/$1',
    '^@/interfaces/(.*)$': '<rootDir>/src/core/interfaces/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/mocks/(.*)$': '<rootDir>/src/tests/mocks/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',

    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
