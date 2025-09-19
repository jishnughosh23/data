import React,{useEffect,useState} from 'react'

function UseEffect() {
      const [val ,setVal] = useState(0);
      const changeValue = () =>{
        setVal(val+1)
      }
      const subValue = () =>{
    setVal(val-1)
  }
//  no dependency
//   useEffect(()=>{
//     document.title = val;
//   })

// empty array
//   useEffect(()=>{
//     document.title = val;
//   },[])

//Props and states
  useEffect(()=>{
    document.title = val;
  },[val])


  return (
    <>
    <h1>Count value is  : {val}</h1>
      <button onClick={changeValue}>Add</button>
      <button onClick={()=>(val === 0) ? setVal(0) : subValue()}>Sub</button>
    </>
  )
}

export default UseEffect