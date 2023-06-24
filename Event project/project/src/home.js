import React from 'react'
import './home.css'
import logo from "./LOGO.png";
import search from "./1918275.avif";
import profile from "./download.png";
import { useState } from 'react';
const home = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='home_container'>
       <div className="home_header">
        <div className="homeleft">
          <img src={logo} />
          <div className="homeleft_text">
            <label>Welcome to Event Management</label>
          </div>
        </div>
        <div className="homeright">
            
            {show? <div className='show'><input type='text'/>
            <label>Search</label></div>:null}
          <img src={search}onClick={(e)=>{setShow(!show)}}/>
          <img src={profile}/>
        </div>
      </div>
    </div>
  )
}

export default home
