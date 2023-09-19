import { useState } from "react";
import "../src/Dashboard.css";
import Navbar from "./Components/Hotlist Management/Navbar";
import mData from "./Components/HotlistTabelMine/TablelUser/MOCK_DATA.json";
import TableNavbar from "./Components/HotlistTabelMine/TableNavbar/TableNavbar";
import TablelUser from "./Components/HotlistTabelMine/TablelUser/TablelUser";


import {message} from 'antd';


const Dashboard = () => {
  const [Filter, setFilter] = useState("");
  const [InputSetV, setInputSetV] = useState("");

  const [InArr, setInArr] = useState([]);

  const [yolo, setyolo] = useState([]);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [allData, setAllData] = useState(mData);

  const [messageApi, contextHolder] = message.useMessage();



  const deleteFunction = () => {
    messageApi.open({
      type: 'success',
      content: 'Delete Successfully',
    });
    setAllData(allData?.filter((ele) => !yolo.includes(ele?.id)));
    setIsModalOpenDelete(false);
  };




  return (
    <>
      <Navbar />
      <div className="Dashboard-main">
        <TableNavbar
          setFilter={setFilter}
          deleteFunction={deleteFunction}
          setIsModalOpenDelete={setIsModalOpenDelete}
          isModalOpenDelete={isModalOpenDelete}
          mData={mData}
          InArr={InArr}
          setInArr={setInArr}
          Filter={Filter}
          InputSetV={InputSetV}
          setInputSetV={setInputSetV}
          contextHolder={contextHolder}
        />
        <div className="tableStyle">
        <TablelUser
          setFilter={setFilter}
          InArr={InArr}
          setyolo={setyolo}
          setInArr={setInArr}
          Filter={Filter}
          mData={allData}
          InputSetV={InputSetV}
          setInputSetV={setInputSetV}
        />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
