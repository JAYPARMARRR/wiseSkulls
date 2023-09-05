
import "./Login.css";
import LogoImg from "./Group 1240.png";
import { useState } from "react";
// import { App } from "antd";






const Login = (props) => {

const [email , setemail] =useState("")
const[Password , setPassword] =useState("")


// console.log("islogin>>>>>",islogin);   



const emailChang =(event)=>{
  setemail(event.target.value)
}

  const Passwordchang =(event)=>{
    setPassword(event.target.value)
  }


const Submit =(event)=>{
  event.preventDefault();

  // eslint-disable-next-line react/prop-types
  props.islogin(email , Password)

  setemail("")
  setPassword("")
}

  return (


    
    <div className="main">
      <div className="login-box-img"></div>

      <form className="box-main" onSubmit={Submit}>
        <div className="img-heading-main">
          <img src={LogoImg} className="img-logo" />
        </div>

        <h2 className="title">Hotlist Management</h2>

        <div className="input-box-main">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            id="email"
            value={email}
            onChange={emailChang}
            required
          />
          <input
            type="Password"
            className="input-field"
            placeholder="Password"
            id="Password"
            value={Password}
            onChange={Passwordchang}
            required
          />
        </div>

        <div className="login-main-button">
          <button className="Login-button" type="submit" >
            Login
          </button>
        </div>
      </form>
      {/* <App islogin={islogin}/> */}
    </div>
  );
};

export default Login;
