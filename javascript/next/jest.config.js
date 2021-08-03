module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  collectCoverageFrom: ["components/**/*.js", "pages/**/*.js"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};
