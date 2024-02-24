/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    'jest-27-expect-message',
    'jest-extended/all',
  ],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    __DEV__: true,
  },
  // https://jestjs.io/docs/code-transformation
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '\\.snap$',
    '<rootDir>/e2e',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
};
