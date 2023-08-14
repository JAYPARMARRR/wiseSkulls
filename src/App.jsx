import "./App.css"
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Hotlist from "./Components/Hotlist Management/Hotlist"
import AddHotlist from "./Components/HotlistTabelMine/AddHotlist/AddHotlist"
import TablelUser from "./Components/HotlistTabelMine/TablelUser/TablelUser"
import TableNavbar from "./Components/HotlistTabelMine/TableNavbar/TableNavbar"

const App = () => {
  return (



  <BrowserRouter>

  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/hotlist" element={<Hotlist/>}/>
    <Route path="/addHotlist" element={<AddHotlist/>}/>
    <Route path="/tablelUser" element={<TablelUser/>}/>
    <Route path="/tableNavbar" element={<TableNavbar/>}/>
  </Routes>
  </BrowserRouter>

  )
}

export default App