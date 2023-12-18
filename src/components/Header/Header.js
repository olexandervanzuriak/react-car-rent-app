import { Button } from "../UI/Button";
import logo from "../../logo.jpg"
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
    <div className="div-logo">
        <img className="logo" src={logo} />
    </div>
      <div className="links">
        <a>Home</a>
        <a>About</a>
        <a>Vehicle Models</a>
        <a>Testimonials</a>
        <a>Our Team</a>
        <a>Contact</a>
      </div>
      <div className="register">
        <a>Sign up</a>
        <Button text="Register"></Button>
      </div>
    </div>
  );
};
