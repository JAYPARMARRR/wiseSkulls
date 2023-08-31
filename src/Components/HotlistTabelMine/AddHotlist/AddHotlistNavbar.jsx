
// import TablelUser from "../TablelUser/TablelUser";
import "./AddHotlist.css";

import { CiSearch } from 'react-icons/ci';
import { FaFileExport } from 'react-icons/fa';

const AddHotlistNavbar = () => {

  return (

    <>
<div className="AddHotlistNavbar-main">


 <div className="AddHotlistNavbar-input-main" >
 <CiSearch  className="CiSearch" />
 <input type="text"  className="AddHotlistNavbar-input" placeholder="Search User"/>
 </div>


 <FaFileExport size={ 26} className="FaFileExport" />
</div>

    </>

  )
}

export default AddHotlistNavbar