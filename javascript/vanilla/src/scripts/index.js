import * as calc from "./calc.js";

export function setOperatorSub(element) {
  $(element).text("-").attr("class", "sub bloodButton");
}

export function setOperatorSum(element) {
  $(element).text("+").attr("class", "sum draculaButton");
}

export function calcSum() {
  return calc.add(
    parseInt($("#firstNumber").val()),
    parseInt($("#secondNumber").val())
  );
}

export function calcSub() {
  return calc.sub(
    parseInt($("#firstNumber").val()),
    parseInt($("#secondNumber").val())
  );
}

export function listenCalc() {
  $("#calc").on("click", function () {
    if ($("#operator").hasClass("sum")) $("#result").text(calcSum());
    else $("#result").text(calcSub());
  });
}

export function listenOperator() {
  $("#operator").on("click", function () {
    if ($(this).hasClass("sum")) setOperatorSub(this);
    else setOperatorSum(this);
  });
}

$(document).ready(() => {
  listenCalc();
  listenOperator();
});


