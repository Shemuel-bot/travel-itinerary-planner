import { Link } from "react-router-dom";
import img from "./assets/images/pexels-peng-liu-45946-169647.jpg";
import logo from "./assets/logo.png";
import "./css/signup.css";

function Signup() {
  return (
    <div className="login">
        
      <img src={img} className="stock-img" alt="" />  
      <div className="half">
        <Link to='/'>
            <img src={logo} className="logo" alt="" />
        </Link>




        <form action="#">
          <span>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" />
          </span>

          <span>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
          </span>

          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </span>

          <span>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </span>

          <button className="signup-btn">Sign Up</button>
        </form>
        <Link to='/log-in'>log in</Link>
      </div>
    </div>
  );
}

export default Signup;
