import { useState } from "react";
import "../src/Dashboard.css";
import Navbar from "./Components/Hotlist Management/Navbar";

// import Footer from "./Components/HotlistTabelMine/Footer/Footer";
import TableNavbar from "./Components/HotlistTabelMine/TableNavbar/TableNavbar";
import TablelUser from "./Components/HotlistTabelMine/TablelUser/TablelUser";

const Dashboard = () => {
  const [Filter ,setFilter]= useState("")
  return (
    <>
        <Navbar/> 
      <div className="Dashboard-main">
        <TableNavbar setFilter={setFilter} Filter={Filter} />
        <TablelUser setFilter={setFilter} Filter={Filter} />
        {/* <Footer /> */}
       
      </div>
    </>
  );
};
 
export default Dashboard;
