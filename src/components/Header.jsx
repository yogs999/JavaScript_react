import { REST_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={REST_LOGO}></img>
      </div>
      <div className="nav-Items">
        <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ol>
      </div>
    </div>
  );
};

export default Header;
