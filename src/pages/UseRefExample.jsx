import React, { useEffect, useRef, useState } from "react";

function UseRefExample() {
  const [name, setName] = useState("");
  const inputRef = useRef(null); // 📦 create a ref, starts as null

  useEffect(() => {
    inputRef.current.focus(); // 👈 focus the input when page loads
    console.log("Component re-rendered! Current name:", name);
  }, []);

  return (
    <>
      <h1>Hello, {name}</h1>
      <input
        ref={inputRef}   // 👈 connect input to the ref
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default UseRefExample;
