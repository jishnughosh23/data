import React,{useState,useEffect} from 'react'

function ClearUp() {
const [wc,setWc] = useState(window.screen.width);

const currentScreenWidth = () =>{
    setWc(()=> window.innerWidth);
    return () =>{
        window.removeEventListener("resize",currentScreenWidth)
    }
}

useEffect(()=>{
    window.addEventListener('resize',currentScreenWidth)
})
  return (
    <div>
        <h1>The size of the window is <span>{wc}</span> </h1>  
    </div>
  )
}

export default ClearUp