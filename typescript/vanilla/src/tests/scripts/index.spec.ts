import {
  setOperatorSub,
  setOperatorSum,
  calcSum,
  calcSub,
  listenCalc,
  listenOperator,
} from "../../scripts/index";

document.body.innerHTML = `
  <div class="container">
    <div class="calcContainer">
      <input type="text" id="firstNumber"></input>
      <button id="operator" class="sum draculaButton">+</button>
      <input type="text" id="secondNumber"></input>
    </div>
    <button id="calc">=</button>
    <p type="text" id="result">0</p>
  </div>
`;

describe("Calc", () => {
  test("setOperatorSub", () => {
    setOperatorSub("#operator");
    expect($("#operator").text()).toBe("-");
  });

  test("setOperatorSum", () => {
    setOperatorSum("#operator");
    expect($("#operator").text()).toBe("+");
  });

  test("calcSum", () => {
    $("#firstNumber").val(1);
    $("#secondNumber").val(2);
    expect(calcSum()).toBe(3);
  });

  test("calcSub", () => {
    $("#firstNumber").val(2);
    $("#secondNumber").val(1);
    expect(calcSub()).toBe(1);
  });

  test("listenCalc", () => {
    listenCalc();
    $("#firstNumber").val(2);
    $("#secondNumber").val(1);
    $("#calc").trigger("click");
    expect($("#result").text()).toBe("3");
  });

  test("listenOperator", () => {
    listenOperator();
    const init = $("#operator").text();
    $("#operator").trigger("click");
    const end = $("#operator").text();
    
    expect(init !== end).toBe(true);
  });
});
