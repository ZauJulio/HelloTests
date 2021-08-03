"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenOperator = exports.listenCalc = exports.calcSub = exports.calcSum = exports.setOperatorSum = exports.setOperatorSub = void 0;
var calc = __importStar(require("./calc"));
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
