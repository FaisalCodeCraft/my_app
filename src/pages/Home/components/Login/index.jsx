import UserContext from 'contex/UseContextHook'
import React, { useContext, useState } from 'react'

const Login = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}= useContext(UserContext)

    const handleSumbit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }

    // const Name= "faisal"
    // let ame;
    // if (Name==="faisal") {
    //   return  ame ="Faisal"
    // }

  return (
    <div>
        <h1>Login </h1>
        <input type="text" placeholder='username' value={username}
        onChange={(e)=>setUsername(e.target.value)}
        /> <br /> <br />
        <input type="password" placeholder='password' value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /> <br /> <br />
        <button type='sumbit' onClick={handleSumbit}>Login</button>
      {/* <h1>{ame}</h1> */}

     
    
     
    </div>
  )
}

export default Login