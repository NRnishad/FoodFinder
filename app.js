import React from "react";
import ReactDOM from 'react-dom/client'

const Header = () => (
  <div className="header">
    <div className="log-container">
      <img
        className="log"
        src="https://play-lh.googleusercontent.com/R1TYyE-34iv_Rt_FsCXUeCSqcZXOOdMlNaGJ72gN1LoLltz47-ix6MFbsG0JRx4RVg"
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);




const AppLayout = () => {
          return (
                    <div className="app">
<Header/>
                    </div>
          )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)

