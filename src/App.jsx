import "./App.css"
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Hotlist from "./Components/Hotlist Management/Hotlist"

const App = () => {
  return (



  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/hotlist" element={<Hotlist/>}/>
  </Routes>
  </BrowserRouter>

  )
}

export default App