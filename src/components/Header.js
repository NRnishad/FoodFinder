import { LOGO,URLIMG } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{ 
  const [btnReact, setbtnReact] = useState('Login')
  const status = useOnlineStatus()
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-orange-300 to-yellow-400 shadow-lg py-4 px-6 mt-0 mb-5">
      <div className="log-container">
        <img className="w-32 rounded-lg" src={LOGO} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-6 text-white font-semibold">
          <li className="px-2">Online Status: {status ? "🟢" : "🔴"}</li>
          <li className="hover:text-yellow-800">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-800">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-800">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-yellow-800">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition duration-300"
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