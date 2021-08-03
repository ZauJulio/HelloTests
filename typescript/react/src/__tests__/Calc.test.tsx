import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Calc from "../components/Calc";
import { add, sub } from "../utils/calc";

test("Calc component - add", () => {
  render(<Calc />);

  let resultValue = 0;

  const firstNumber = screen.getByTestId("firstNumber");
  fireEvent.change(firstNumber, { target: { value: 4 } });

  const secondNumber = screen.getByTestId("secondNumber");
  fireEvent.change(secondNumber, { target: { value: 2 } });

  const operator = screen.getByTestId("operator");
  const result = screen.getByTestId("result");

  if (operator.textContent === "+") {
    resultValue =
      Number(firstNumber.getAttribute("value")) +
      Number(secondNumber.getAttribute("value"));
  } else {
    resultValue =
      Number(firstNumber.getAttribute("value")) -
      Number(secondNumber.getAttribute("value"));
  }

  // console.log(
  //   "firstNumber: ",
  //   Number(firstNumber.getAttribute("value")),
  //   "secondNumber: ",
  //   Number(secondNumber.getAttribute("value")),
  //   "Result Add: ",
  //   Number(result.textContent)
  // );

  expect(Number(result.textContent)).toEqual(resultValue);
});

test("Calc component - sub", () => {
  render(<Calc />);

  let resultValue = 0;

  const firstNumber = screen.getByTestId("firstNumber");
  fireEvent.change(firstNumber, { target: { value: 9 } });

  const secondNumber = screen.getByTestId("secondNumber");
  fireEvent.change(secondNumber, { target: { value: 6 } });

  const operator = screen.getByTestId("operator");
  fireEvent.click(operator);

  const result = screen.getByTestId("result");

  if (operator.textContent === "+") {
    resultValue =
      Number(firstNumber.getAttribute("value")) +
      Number(secondNumber.getAttribute("value"));
  } else {
    resultValue =
      Number(firstNumber.getAttribute("value")) -
      Number(secondNumber.getAttribute("value"));
  }

  // console.log(
  //   "firstNumber: ",
  //   Number(firstNumber.getAttribute("value")),
  //   "secondNumber: ",
  //   Number(secondNumber.getAttribute("value")),
  //   "Result Sub: ",
  //   Number(result.textContent)
  // );

  expect(Number(result.textContent)).toEqual(resultValue);
});


test("subtract 2 - 1 to equal 1", () => {
  expect(sub(2, 1)).toBe(1);
});

test("add 2 + 1 to equal 3", () => {
  expect(add(2, 1)).toBe(3);
});
