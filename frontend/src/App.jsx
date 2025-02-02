import { Link, Outlet } from "react-router-dom";
import logo from "./assets/logo.png";
import gray_logo from "./assets/gray_logo.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="" />

        <span className="guide">
          <Link to="/main" className="link">
            <button className="guide-button">
              <h3>
                <h3>Home</h3>
              </h3>
            </button>
          </Link>
          <Link to="/contact-us" className="link">
            <button className="guide-button">
              <h3>Contact</h3>
            </button>
          </Link>

          <Link to='/destinations' className="link">
          <button className="guide-button">
            <h3>Destinations</h3>
          </button>
          </Link>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>
        </span>

        <span className="sign-in-options">
          <Link to="log-in" className="link">
            <button className="log-in">
              <h3>Log in</h3>
            </button>
          </Link>
          <Link to="sign-up" className="link">
            <button className="sign-up">
              <h3>Sign up</h3>
            </button>
          </Link>
        </span>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <span>
          <h3>Discover</h3>
          <p>Home</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>About Us</p>
        </span>

        <span>
          <h3>Support</h3>
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Contact Us</p>
        </span>

        <span>
          <h3>Contact Info</h3>
          <p>support@tripmosaic.com</p>
          <p>+1 (800) 555-TRIP</p>
          <p>123 Travel Lane, Wanderlust City, USA</p>
        </span>

        <span>
          <img src={gray_logo} className="logo" alt="" />© 2024 TripMosaic. All
          Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default App;
