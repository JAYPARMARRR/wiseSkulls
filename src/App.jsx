import "./App.css"
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Navbar from "./Components/Hotlist Management/Navbar"

// import AddHotlist from "./Components/HotlistTabelMine/AddHotlist/AddHotlist"


const App = () => {
  return (



  <BrowserRouter>

  <Routes>
    
    <Route path="/" element={<Login/>}/>
    <Route path="/navbar" element={<Navbar/>}/>
    
    

   
  </Routes>
  </BrowserRouter>

  )
}

export default App