"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenOperator = exports.listenCalc = exports.calcSub = exports.calcSum = exports.setOperatorSum = exports.setOperatorSub = void 0;
var calc = require("./calc");
function setOperatorSub(element) {
    $(element).text("-").attr("class", "sub bloodButton");
}
exports.setOperatorSub = setOperatorSub;
function setOperatorSum(element) {
    $(element).text("+").attr("class", "sum draculaButton");
}
exports.setOperatorSum = setOperatorSum;
function calcSum() {
    return calc.add(Number($("#firstNumber").val()), Number($("#secondNumber").val()));
}
exports.calcSum = calcSum;
function calcSub() {
    return calc.sub(Number($("#firstNumber").val()), Number($("#secondNumber").val()));
}
exports.calcSub = calcSub;
function listenCalc() {
    $("#calc").on("click", function () {
        if ($("#operator").hasClass("sum"))
            $("#result").text(calcSum());
        else
            $("#result").text(calcSub());
    });
}
exports.listenCalc = listenCalc;
function listenOperator() {
    $("#operator").on("click", function () {
        if ($(this).hasClass("sum"))
            setOperatorSub(this);
        else
            setOperatorSum(this);
    });
}
exports.listenOperator = listenOperator;
$(document).ready(function () {
    listenCalc();
    listenOperator();
});
