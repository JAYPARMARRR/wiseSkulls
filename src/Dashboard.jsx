import { useState } from "react";
import "../src/Dashboard.css";
import Navbar from "./Components/Hotlist Management/Navbar";
import mData from "./Components/HotlistTabelMine/TablelUser/MOCK_DATA.json";
// import Footer from "./Components/HotlistTabelMine/Footer/Footer";
import TableNavbar from "./Components/HotlistTabelMine/TableNavbar/TableNavbar";
import TablelUser from "./Components/HotlistTabelMine/TablelUser/TablelUser";

const Dashboard = () => {
  const [Filter, setFilter] = useState("");
  const [InputSetV , setInputSetV] = useState("")
  
  
  const [InArr, setInArr] = useState([]);
  
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [allData, setAllData] = useState(mData)
  const [yolo ,setyolo]=useState([])


 const deleteConfirm =() => {

  setAllData(allData.Filter((ee)=> !yolo.includes(ee.id)))
  setIsModalOpenDelete(false)
  
  
 }


  return (
    <>
      <Navbar />
      <div className="Dashboard-main">
        <TableNavbar setFilter={setFilter} deleteConfirm ={deleteConfirm} setIsModalOpenDelete={setIsModalOpenDelete} isModalOpenDelete={isModalOpenDelete}  mData={mData} InArr={InArr} setInArr={setInArr} Filter={Filter} InputSetV ={InputSetV}  setInputSetV={setInputSetV}    />

        <TablelUser setFilter={setFilter} InArr={InArr} yolo={yolo} setyolo={setyolo} setInArr={setInArr}Filter={Filter}  mData={allData} InputSetV={InputSetV}    setInputSetV={setInputSetV}   />
        {/* <Footer /> */} 
      </div>
    </>
  );
};

export default Dashboard;
