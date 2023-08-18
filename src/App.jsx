/* eslint-disable react/prop-types */
import "./App.css"
import Navbar from "./Components/Hotlist Management/Navbar"
import Login from "./Components/Login/Login"
import HotlistTabelMine from "./Components/HotlistTabelMine/HotlistTabelMine"






import { BrowserRouter, Routes ,Route,Navigate } from "react-router-dom"
import { useState } from "react"
import {  message } from 'antd';    


const App = () => {



  const [islogin , setislogin] =useState(false) 
  const [messageApi, contextHolder] = message.useMessage();




  const Islogin =(email,Password)=>{
     
  if (email === "jayu@gmail.com" && Password=== "12468"){
    success()
    setislogin(true)

  } else{
    setislogin(false)
  }
}  


    const success = () => {
    messageApi.open({
      type: 'success',
      content: ' log in successfully',
      duration: 3,
    });
  };

  return (
  
    
    <BrowserRouter>
    {contextHolder}

  <Routes>
    

    <Route path="/" element={!islogin ? <Login islogin={Islogin}/> : <Navigate to={"/navbar"}/>}/>

    <Route path="/navbar" element={<Navbar/>}/>
    
    <Route path="/hotlistTabelMine" element={<HotlistTabelMine/>}/>
    
    
    

   
  </Routes>
  </BrowserRouter>

  )
}

export default App