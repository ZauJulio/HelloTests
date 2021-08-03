import * as calc from "./calc";

export function setOperatorSub(element: any) {
  $(element).text("-").attr("class", "sub bloodButton");
}

export function setOperatorSum(element: any) {
  $(element).text("+").attr("class", "sum draculaButton");
}

export function calcSum(): number {
  return calc.add(
    Number($("#firstNumber").val()),
    Number($("#secondNumber").val())
  );
}

export function calcSub() {
  return calc.sub(
    Number($("#firstNumber").val()),
    Number($("#secondNumber").val())
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


