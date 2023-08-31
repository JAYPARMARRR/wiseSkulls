import "./App.css";
// import Navbar from "./Components/Hotlist Management/Navbar";
import Login from "./Components/Login/Login";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { message } from "antd";
import AddHotlist from "./Components/HotlistTabelMine/AddHotlist/AddHotlist";
import Dashboard from "./Dashboard";

const App = () => {
  const [islogin, setislogin] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const Islogin = (email, Password) => {
    if (email === "jayu@gmail.com" && Password === "12468") {
      success();
      setislogin(true);
    } else {
      setislogin(false);
    }
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: " log in successfully",
      duration: 3,
    });
  };

  return (
    <BrowserRouter>
      {contextHolder}

      <Routes>
        <Route
          path="/"  element={ !islogin ? <Login islogin={Islogin} /> : <Navigate to={"/dashboard"} />}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addHotlist" element={<AddHotlist/>} />



     

      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
