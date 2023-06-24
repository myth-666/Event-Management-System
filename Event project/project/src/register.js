import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import logo from "./LOGO.png";
const register = () => {
  const navigate = useNavigate();
  function SIGNin() {
    navigate("/login");
  }
  function Reg(){
    navigate("/")
  }
  return (
    <div className="register_container">
      <div className="register_header">
        <div className="register_header_left">
          <img src={logo} />
          <div className="register_header_left_text">
            <label>Welcome to Event Management</label>
          </div>
        </div>
        <div className="register_header_right">
          <label>Have an accouct ? </label>
          <label className="Reg_signin" onClick={SIGNin}>
            SIGN IN
          </label>
        </div>
      </div>
      <div className="register_row1">
        <div className="register_row1_left">
          <img src={logo} />
          <label className="register_row1_left_head">What you Require</label>
          <ul>
            <li>End-to-end event management</li>
            <li>End-to-end event management</li>
            <li>End-to-end event management</li>
            <li>End-to-end event management</li>
            <li>End-to-end event management</li>
          </ul>
        </div>
        <div className="register_row1_right">
          <h2>Get started with Event Management</h2>
          <h4>
            Event management site to plan and run in-person, virtual, and hybrid
            events
          </h4>
          <div className="register_row1_right_inner">
            <label>Username*</label>
            <input type="text" />
            <label>Email id*</label>
            <input type="text" />
            <label>Phone number*</label>
            <input type="text" />
            <label>Password*</label>
            <input type="password" />
            <div className="SIGNUP_button">
              <button onClick={Reg}>SIGN UP</button>
            </div>
          </div>
          <div className="register_row1_right_footer">
            <label>
              © 2023, Event management Pvt. Ltd. All Rights Reserved.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
