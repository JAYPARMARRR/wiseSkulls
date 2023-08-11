import Hotlist from "../../Hotlist Management/Hotlist";
import "./AddHotlist.css";

import { BsInfoCircleFill } from "react-icons/bs";

const AddHotlist = () => {
  return (
    <div className="AddHotlist">
      <Hotlist />
      <div className="Navbar-AddHotlist">
                        <div className="AddHotlist-Add-Hotlist">
                        <h3>Add Hotlist</h3>
                        </div>
                        <p className="AddHotlist-text">
                        Select/Add Benchsales to add new hotlist. Scroll below to check the
                        list of hotlist under particular benchsales.
                        </p>
                        <div className="AddHotlist-icons">
                        <BsInfoCircleFill  className="AddHotlist-logo"/>
                        <p>Guidelines</p>
                        </div>
      </div>
    </div>
  );
};

export default AddHotlist;
