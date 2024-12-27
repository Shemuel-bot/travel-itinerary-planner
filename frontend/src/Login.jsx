import img from "./assets/images/pexels-pixabay-280221.jpg";
import logo from "./assets/logo.png";
import "./css/login.css";

function Login() {
  return (
    <>
      <img src={img} className="stock-img" alt="" />
      <div className="half">
        <img src={logo} className="logo" alt="" />

        <form action="#">
          <span>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </span>

          <span>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </span>

          <button>log in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
