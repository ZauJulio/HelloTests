# Create New Project: Nextjs+Typescript

## Create a new Nextjs project with typescript

```sh
yarn create next-app my-app --ts
```

## Add jest, babel and testing-library dependencies

```sh
yarn add jest @testing-library/react @types/jest @testing-library/jest-dom babel-jest @babel/core identity-obj-proxy @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react ts-jest identity-obj-proxy -D
```

## Create new root/.babelrc

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

## Create new root/babel.config.js

```js
module.exports = {
  presets: [
    "@babel/react",
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
```

# Create new root/.eslintrc

```json
{
  "extends": ["next/babel", "next"]
}
```

# Create new root/jest.setup.js

```js
import "@testing-library/jest-dom";
```

# Create new root/jest.config.js

```js
/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  collectCoverageFrom: [
    "components/**/*.js",
    "pages/**/*.js",
    "components/**/*.ts",
    "pages/**/*.ts",
  ],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  coverageReporters: ["lcov", "text"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
```

# Create add new scripts in package.json

```json
  "scripts": {
    ...,
    "test": "jest --watch",
    "coverage": "jest --coverage"
  },
```
