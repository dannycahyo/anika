module.exports = {
  collectCoverage: true,
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
    "@home/(.*)": "<rootDir>/src/home/$1",
    "@animeDetail/(.*)": "<rootDir>/src/animeDetail/$1",
    "@favourite/(.*)": "<rootDir>/src/favourite/$1",
    "@uikit/(.*)": "<rootDir>/src/uikit/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@theme/(.*)": "<rootDir>/src/theme/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "src"],
  automock: false,
  setupFiles: ["<rootDir>/setupJest.js"],
};
