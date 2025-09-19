import React, { useState } from "react";

function WithoutUseMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // pretend this is a heavy calculation 🐢
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // delay
    return num * 2;
  };

  const double = expensiveCalculation(count); // recalculates every render

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h1>Count: {count}</h1>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default WithoutUseMemo;
