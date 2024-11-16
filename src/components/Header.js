import { LOGO,URLIMG } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{ 
  const [btnReact,setbtnReact]=useState('Login')
  return (
    <div className="header">
      <div className="log-container">
        <img className="log" src={LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="log-button"
            onClick={() => {
              btnReact === "Login"
                ? setbtnReact("LogOut")
                : setbtnReact("Login");
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );};


export default Header;