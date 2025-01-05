import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <header>
        <img src={logo} className="logo" alt="" />

        <span className="guide">
          <button className="guide-button">
            <h3>
              <h3>Thing</h3>
            </h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>
        </span>

        <span className="sign-in-options">
          <Link to="/log-in">
            <button className="log-in">
              <h3>Log in</h3>
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="sign-up">
              <h3>Sign up</h3>
            </button>
          </Link>
        </span>
      </header>
    </div>
  );
}

export default Contact;
