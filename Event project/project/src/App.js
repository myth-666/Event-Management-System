import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "./LOGO.png";
import video from "./banner-intro.webm";
const App = () => {
  const [show,setShow] = useState(false);
  const navigate = useNavigate();
  const handleclick=(e)=>{
    navigate("/login")
    // {show? navigate("/login") :null}
  }
  function signup(){
    navigate("/register")
  }
  return (
    <div className="App_container">
      <div className="App_header">
        <div className="left">
          <img src={logo} />
          <div className="left_text">
            <label>Welcome to Event Management</label>
          </div>
        </div>
        <div className="right">
          <label onClick={(e)=>{handleclick(e)}}>SIGN IN</label>
        </div>
      </div>
      <div className="App_middle">
        <div className="middle_left">
          <label className="label1">All in one Event Management </label>
          <label className="label2">Build for Every Day</label>
          <label className="label3">
            {" "}
            A noteworthy happening.A social occasion or activity,now and always.
          </label>
          <div className="Signup">
            <button onClick={signup}>SIGN UP FOR FREE</button>
          </div>
        </div>
        <div className="middle_right">
          <video src={video} width="600" height="400" muted autoPlay loop />
        </div>
      </div>
      <div className="App_footer">
        <div className="col1">
          <label className="event_text1">In person Events </label>
          <label className="event_text2">All attendees are in-person at the location of the event.</label>
        </div>
        <div className="col2">
          <label className="event_text1">Online Events </label>
          <label className="event_text2">online environment on the web</label></div>
        <div className="col3">
        <label className="event_text1">Hybrid Events </label>
        <label className="event_text2">Merge the physical with the virtual</label>
        </div>
      </div>
    </div>
  );
};

export default App;
