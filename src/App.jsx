import "./App.css"
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Hotlist from "./Components/Hotlist Management/Hotlist"
import AddHotlist from "./Components/HotlistTabelMine/AddHotlist/AddHotlist"


const App = () => {
  return (



  <BrowserRouter>

  <Routes>
    
    <Route path="/" element={<Login/>}/>
    <Route path="/hotlist" element={<Hotlist/>}/>
    <Route path="/addHotlist" element={<AddHotlist/>}/>
 

   
  </Routes>
  </BrowserRouter>

  )
}

export default App