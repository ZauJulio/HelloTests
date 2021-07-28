"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../scripts/index");
document.body.innerHTML = "\n  <div class=\"container\">\n    <div class=\"calcContainer\">\n      <input type=\"text\" id=\"firstNumber\"></input>\n      <button id=\"operator\" class=\"sum draculaButton\">+</button>\n      <input type=\"text\" id=\"secondNumber\"></input>\n    </div>\n    <button id=\"calc\">=</button>\n    <p type=\"text\" id=\"result\">0</p>\n  </div>\n";
describe("Calc", function () {
    test("setOperatorSub", function () {
        index_1.setOperatorSub("#operator");
        expect($("#operator").text()).toBe("-");
    });
    test("setOperatorSum", function () {
        index_1.setOperatorSum("#operator");
        expect($("#operator").text()).toBe("+");
    });
    test("calcSum", function () {
        $("#firstNumber").val(1);
        $("#secondNumber").val(2);
        expect(index_1.calcSum()).toBe(3);
    });
    test("calcSub", function () {
        $("#firstNumber").val(2);
        $("#secondNumber").val(1);
        expect(index_1.calcSub()).toBe(1);
    });
    test("listenCalc", function () {
        index_1.listenCalc();
        $("#firstNumber").val(2);
        $("#secondNumber").val(1);
        $("#calc").trigger("click");
        expect($("#result").text()).toBe("3");
    });
    test("listenOperator", function () {
        index_1.listenOperator();
        var init = $("#operator").text();
        $("#operator").trigger("click");
        var end = $("#operator").text();
        expect(init !== end).toBe(true);
    });
});
