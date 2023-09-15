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
  const [ids, setIds] = useState([])
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [allData, setAllData] = useState(mData)

  
  const deleteFunction = () =>{
    
    // allData?.map((ele)=>{
      //   if(!ids.includes(ele.id)){
    //     console.log("ele>>>",ele)
    //   }
    // })

    setAllData(allData?.filter((ele)=> !ids.includes(ele?.id)))
    setIsModalOpenDelete(false)

    // console.log("ids>>>",ids)
    
    
  }

  return (
    <>
      <Navbar />
      <div className="Dashboard-main">
        <TableNavbar deleteFunction={deleteFunction} setIsModalOpenDelete={setIsModalOpenDelete} isModalOpenDelete={isModalOpenDelete} setFilter={setFilter} Filter={Filter} InputSetV ={InputSetV}  setInputSetV={setInputSetV}    />
        <TablelUser setIds={setIds} mData={allData} setFilter={setFilter} Filter={Filter}  InputSetV={InputSetV}    setInputSetV={setInputSetV}   />
        {/* <Footer /> */} 
      </div>
    </>
  );
};

export default Dashboard;
