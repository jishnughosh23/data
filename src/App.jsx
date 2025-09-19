import { useState } from "react"
import Register from "./pages/Register";
import UseEffect from "./pages/UseEffect";
import ClearUp from "./pages/ClearUp";
import Parent from "./pages/Parent";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import UseRefExample from "./pages/UseRefExample";
import UseStateExample from "./pages/UseStateExample";
import UseMemoHook from "./pages/UseMemoHook";
import WithoutUseMemo from "./pages/WithoutUseMemo";
import WithoutUseCallback from "./pages/WithoutUseCallback";
import WithUseCallback from "./pages/WithUseCallback";


const App = () => {
  const [val ,setVal] = useState(0);
  const changeValue = () =>{
    setVal(val+1)
  }

  const subValue = () =>{
    setVal(val-1)
  }
  return (
    <>
      {/* <h1>Count value is  : {val}</h1>
      <button onClick={changeValue}>Add</button>
      <button onClick={()=>(val === 0) ? setVal(0) : subValue()}>Sub</button>
      <Register/>
      <UseEffect/> */}
      {/* <ClearUp/> */}
        {/* <Parent/> */}
        {/* <UseReducer/> */}
        {/* <UseRef/> */}
        {/* <UseRefExample/> */}
        {/* <UseStateExample/> */}
        {/* <WithoutUseMemo/> */}
        {/* <UseMemoHook/> */}
        <WithoutUseCallback/>
        {/* <WithUseCallback/> */}
    </>

  )
}

export default App
