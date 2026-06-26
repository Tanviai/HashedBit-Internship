import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const a = Number(num1);
    const b = Number(num2);

    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <button onClick={() => calculate("+")}>Addition</button>
      <button onClick={() => calculate("-")}>Subtraction</button>
      <button onClick={() => calculate("*")}>Multiplication</button>
      <button onClick={() => calculate("/")}>Division</button>

      <br />
      <br />

      <div>
        <strong>Output: </strong>
        {result}
      </div>
    </div>
  );
};

export default Calculator;