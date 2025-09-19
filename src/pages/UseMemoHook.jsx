import React,{useMemo,useState} from 'react'

const UseMemoHook = () => {
 const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // delay
    return num * 2;
  };

  // 🪄 useMemo remembers result until `count` changes
  const double = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h1>Count: {count}</h1>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}


export default UseMemoHook
