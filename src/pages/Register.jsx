import React, {useState} from 'react'

const Register = () => {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("")

    const [formData,setFormData] = useState({
        name: "",
        email:"",
        password:"",
    })
    const HandleSubmit = () => {
        const ans = `${formData.name} ${formData.email} ${formData.password}`
        alert(ans)
    }
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev)=>{
            return {...prev,[name] : value}
        })
    }
  return (
    <>
      <div className="panel">
        <h1>Register Form</h1>
        <label htmlFor="name"> Name :</label>
        <input type="text" placeholder='Enter your name : ' name='name' value={formData.name}
        onChange={handleInput}
         />
        <label htmlFor="email" > Email :</label>
        <input type="email" placeholder='Enter your email : ' name='email' value={formData.email}
        onChange={handleInput}/>
        <label htmlFor="password"> Password :</label>
        <input type="password" placeholder='Enter your password : 'name="password" value={formData.password}
        onChange={handleInput} />

        <button onClick={HandleSubmit} >Submit</button>
      </div>
    </>
  )
}

export default Register
