import { Link } from "react-router-dom";
import img from "../assets/images/pexels-pixabay-280221.jpg";
import logo from "../assets/logo.png";
import "../css/login.css";

function Login() {
  return (
    <div className="login">
        
      <img src={img} className="stock-img" alt="" />  
      <div className="half">
        <Link to='/'>
            <img src={logo} className="logo" alt="" />
        </Link>




        <form action="#">
          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </span>

          <span>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </span>

          <button className="login-btn">log in</button>
        </form>

        <Link to='/sign-up'>
            sign up
        </Link> 
      </div>
    </div>
  );
}

export default Login;
