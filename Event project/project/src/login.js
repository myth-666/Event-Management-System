import React from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
const login = () => {
  const navigate = useNavigate();
  function LOGIN(){
    navigate("/home")
  }
    
    function close(){
        navigate("/")
      }
  return (
    <div className='login_container'>
      <div className='box'>
        <div className='box_head'><h3>LOGIN</h3><div><button onClick={close}>X</button></div></div>
        <label>Username</label><input type='text'/>
        <label>Password</label><input type='password'/>
        <div className='login_button'><button onClick={LOGIN}>SIGN IN</button></div>
      </div>
    </div>
  )
}

export default login
