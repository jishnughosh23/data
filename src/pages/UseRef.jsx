import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [userinput, setUserinput] = useState("");
  const val = useRef(0);

  useEffect(() => {
    val.current = val.current + 1;
    console.log("Render count:", val.current);
  });

  return (
    <>
      <input
        type="text"
        value={userinput}
        onChange={(e) => setUserinput(e.target.value)}
      />
      <h1>Render count is : {val.current}</h1>
    </>
  );
}

export default UseRef;
