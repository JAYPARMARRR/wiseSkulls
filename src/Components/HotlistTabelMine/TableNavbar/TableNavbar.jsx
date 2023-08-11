import "./TableNavbar.css";

import RisetImg from "./grds.png";
import ExpartImg from "./Group 1259.png";
import setingImg from "./setingimg.png";
import TablelUser from "../TablelUser/TablelUser";
import { Modal } from "antd";
import { useState } from "react";

import animation from "./animation_ll4u8lpk.json";

import { FaGripVertical } from "react-icons/fa";
import Lottie from "lottie-react";

const TableNavbar = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };





  const ModalOpenDelete = () => {
    setIsModalOpenDelete(true);
    console.log(isModalOpenDelete);

  };
    const ModalOpenDeleteOk = () => {
      setIsModalOpenDelete(false);
    };
  
    const ModalOpenDeleteCancel = () => {
      setIsModalOpenDelete(false);
    };




  return (
    <>
      <div className="TableNavbar">
        <div className="TableNavbar-left-side">
          <input
            type="text"
            placeholder="Search"
            className="TableNavbar-search-box"
          />
        </div>
        <div className="TableNavbar-navbar-center-box">
          <div className="TableNavbar-navbar-center-wiseskiils">Wiseskulls</div>
        </div>
        <div className="TableNavbar-right-side">
          <img
            src={setingImg}
            alt="Image 1"
            className="TableNavbar-nav-image"
            onClick={() => setModal2Open(true)}
          />
          <img src={RisetImg} alt="Image 2" className="TableNavbar-nav-image" />
          <img
            src={ExpartImg}
            alt="Image 3"
            className="TableNavbar-nav-image"
            onClick={showModal}
          />
          <button className="TableNavbar-nav-Delete-button" onClick={ModalOpenDelete}>Delete</button>
          <button className="TableNavbar-nav-button">Add Hotlist</button>
        </div>
      </div>
      <TablelUser />
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* seting modal csss */}

      <div className="table-navbar-Modal-1">
        <Modal
          className="popup-title"
          centered
          rootClassName="COLUMN_MODAL"
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          footer={false}
        >
          <img src={setingImg} className="popupTitalImg" />
          <h3 className="Column-Settings">Column Settings</h3>
          <form className="form-container">
            <div className="popup-1">
              <label className="checkbox-label">
                <FaGripVertical className="popupicons" />
                <input type="checkbox"  className="checkboxPOPUP-1"/>
                Condidata Name
              </label>

              <label className="checkbox-label">
                <FaGripVertical className="popupicons" />
                <input type="checkbox" className="checkboxPOPUP-1"/>
                Title
              </label>

              <label className="checkbox-label">
                {" "}
                <FaGripVertical className="popupicons" />
                <input type="checkbox" className="checkboxPOPUP-1"/>
                Current Location
              </label>

              <label className="checkbox-label">
                {" "}
                <FaGripVertical className="popupicons" />
                <input type="checkbox" className="checkboxPOPUP-1"/>
                Availability
              </label>
            </div>

            <div className="popup-2">
              <label className="checkbox-label">
                {" "}
                <FaGripVertical className="popupicons" />
                <input type="checkbox" className="checkboxPOPUP-1" />
                Experience
              </label>

              <label className="checkbox-label">
                <FaGripVertical className="popupicons" />
                <input type="checkbox"className="checkboxPOPUP-1" />
                Visa type
              </label>

              <label className="checkbox-label">
                <FaGripVertical className="popupicons" />
                <input type="checkbox" className="checkboxPOPUP-1"/>
                Relocation
              </label>

              <label className="checkbox-label">
                <FaGripVertical className="popupicons" />
                <input type="checkbox" className="checkboxPOPUP-1"/>
                Notes
              </label>
            </div>
          </form>
          <div className="popup-tow-button-main">
            <button className="cancel-button">Cancel</button>
            <button className="apply-button">Apply</button>
          </div>
        </Modal>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////// */}

      <Modal
        className="table-navbar-Modal-2"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closeIcon={false}
      >
        <Lottie
          animationData={animation}
          loop={true}
          className="Lottie-lodar"
        />
        <p className="loding-text">Please Wait</p>
      </Modal>





 {/* ///////////////////////////////////////////////////////////////////////////////////// */}




 <Modal open={isModalOpenDelete} onOk={ModalOpenDeleteOk} onCancel={ModalOpenDeleteCancel}footer={false} className="popup-Modal-3" closeIcon={false}>
        <h3 className="Modal-3-heding">Confirm Delete</h3>
<div className="Modal-3-button-main" >

<button className="Modal-button-yes-button">Yes</button>
<button className="Modal-button-no-button">No</button>
</div>
      </Modal>




 {/* ///////////////////////////////////////////////////////////////////////////////////// */}















    </>
  );
};

export default TableNavbar;
