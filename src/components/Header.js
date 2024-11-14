import { LOGO,URLIMG } from "../utils/constants";
import { useState } from "react";

const Header = () =>{ 
  const [btnReact,setbtnReact]=useState('Login')
  return(<div className="header">
    <div className="log-container">
      <img className="log" src={LOGO}></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="log-button" onClick={()=>{
          btnReact==="Login"?setbtnReact("LogOut"):setbtnReact("Login")
        }}>{btnReact}</button>
      </ul>
    </div>
  </div>
)};


export default Header;