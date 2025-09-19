import React,{useReducer} from 'react'
import reducer from './reducer';
const initialValue = 0;
function UseReducer() {

const [count, dispatch] = useReducer(reducer,initialValue);
  return (
    <>
    <h1>Count value is  : {count}</h1>
      <button onClick={()=>dispatch({type:"INC"})}>Add</button>
      <button onClick={()=>dispatch({type:"DEC"})}>Sub</button>
    </>
  )
}

export default UseReducer