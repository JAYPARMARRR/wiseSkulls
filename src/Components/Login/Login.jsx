import "./Login.css";
import LogoImg from "./Group 1240.png";



const Login = () => {
  return (
    <div className="main">
      <div className="login-box-img"></div>
      <form className="box-main" >

        <div className="img-heading-main">
          <img src={LogoImg} className="img-logo" />


        </div>

        <h2 className="title">Hotlist Management</h2>

        <div className="input-box-main">
          <input type="email" className="input-field" placeholder="Email" required />
          <input type="Password" className="input-field" placeholder="Password" required />

        </div>

        <div className="login-main-button">
          <button className="Login-button"  type="submit" >Login</button>

        </div>




      </form>

    </div>
  );
};

export default Login;
