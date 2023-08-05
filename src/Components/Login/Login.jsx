import "./Login.css";
import LogoImg from "./logo.png";
import TextHeding from "./TextHeding.png";



const Login = () => {
  return (
    <div className="all-box-main">
      <div className="background-login-pag ">
        
        <div className="card">
          <img src={LogoImg} className="logoimg"  />
          <img src={TextHeding} className="img" />


          <h1 className="heding-login-peg">Hotlist Management</h1>

          <form className="from-div">
            <div className="boss-box">
              <input type="email" placeholder="email" className="tow-box" required />
            </div>
            <div className="boss-box">
              <input
                type="password"
                placeholder="password"
                className="tow-box" required
              />
            </div>
            <div className="btn-main">
              <button className="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
