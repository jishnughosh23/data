import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function WithUseCallback() {
  const [count, setCount] = useState(0);

  // 🪄 useCallback remembers the function until dependencies change
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // no dependencies → same function always

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </>
  );
}

export default WithUseCallback;
