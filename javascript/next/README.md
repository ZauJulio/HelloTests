[Setup Tests](https://segredo.dev/configurar-testes-no-nextjs/)
[Next/babel .eslintrc](https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel)

```sh
yarn add jest @testing-library/react @types/jest @testing-library/jest-dom babel-jest @babel/core -D
```

```json
"root/.babelrc";
{
  "presets": ["next/babel"],
  "plugins": []
}
```

```json
"root/.eslintrc";
{
  "extends": ["next/babel", "next"]
}
```

```js
"root/jest.config.js";

module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["components/**/*.js", "pages/**/*.js"],
  coverageReporters: ["lcov", "text"],
};
```
