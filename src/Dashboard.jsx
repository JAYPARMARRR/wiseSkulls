import "../src/Dashboard.css";
import Navbar from "./Components/Hotlist Management/Navbar";

import Footer from "./Components/HotlistTabelMine/Footer/Footer";
import TableNavbar from "./Components/HotlistTabelMine/TableNavbar/TableNavbar";
import TablelUser from "./Components/HotlistTabelMine/TablelUser/TablelUser";

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard-main">
        <Navbar/> 
        <TableNavbar />
        <TablelUser />
        <Footer />
       
      </div>
    </>
  );
};
 
export default Dashboard;
