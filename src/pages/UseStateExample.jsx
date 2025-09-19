import React, { useState, useEffect } from "react";

function UseStateExample() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Component re-rendered! Current name:", name);
  });

  return (
    <>
      <h1>Hello, {name}</h1>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)} // 👈 changes state
      />
    </>
  );
}

export default UseStateExample;
