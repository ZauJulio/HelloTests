const calc = require("../src/index.js");

test("subtract 2 - 1 to equal 1", () => {
  expect(calc.sub(2, 1)).toBe(1);
});
