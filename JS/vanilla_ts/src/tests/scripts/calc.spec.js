"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("../../scripts/calc");
test("subtract 2 - 1 to equal 1", function () {
    expect(calc_1.sub(2, 1)).toBe(1);
});
test("add 2 + 1 to equal 3", function () {
    expect(calc_1.add(2, 1)).toBe(3);
});
