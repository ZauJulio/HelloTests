import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";


function Calc() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  useEffect(() => {
    operation === "+"
      ? setResult(firstNumber + secondNumber)
      : setResult(firstNumber - secondNumber);
  }, [firstNumber, secondNumber, operation]);

  return (
    <div className={styles.container}>
      <div className={styles.calcContainer}>
        <input
          data-testid="firstNumber"
          type="number"
          value={firstNumber}
          className={styles.number}
          onChange={(e) => setFirstNumber(Number(e.target.value))}
        />

        <button
          data-testid="operator"
          type="button"
          className={`
            ${styles.operator}
            ${operation === "+" ? styles.add : styles.sub}`}
          onClick={() => setOperation(operation === "+" ? "-" : "+")}
        >
          {operation}
        </button>

        <input
          data-testid="secondNumber"
          type="number"
          value={secondNumber}
          className={styles.number}
          onChange={(e) => setSecondNumber(Number(e.target.value))}
        />
      </div>

      <p className={styles.result}> = </p>
      <p data-testid="result" className={styles.result}>{result}</p>
    </div>
  );
}

export default Calc;
