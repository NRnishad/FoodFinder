import {LOGO} from "../utils/constants";
const Header = () => (
  <div className="header">
    <div className="log-container">
      <img className="log" src={LOGO}></img>
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


export default Header;