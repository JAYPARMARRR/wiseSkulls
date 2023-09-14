import "./TableNavbar.css";

import RisetImg from "./grds.png";
import ExpartImg from "./Group 1259.png";
import setingImg from "./setingimg.png";

import { Modal } from "antd";
import { useState } from "react";

import animation from "./animation_ll4u8lpk.json";
import Lottie from "lottie-react";

import { CiSearch } from "react-icons/ci";
import { FaGripVertical } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { message } from "antd";

// eslint-disable-next-line react/prop-types
const TableNavbar = ({ setFilter, Filter, InputSetV, setInputSetV }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  const Navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    setIsModalOpenDelete(false);
    messageApi.open({
      type: "success",
      content: " Delete Successfully",
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpenDelete(false);

  };

  const ModalOpenDelete = () => {
    setIsModalOpenDelete(true);
  };
  const ModalOpenDeleteOk = () => {
    setIsModalOpenDelete(false);
  };

  const ModalOpenDeleteCancel = () => {
    setIsModalOpenDelete(false);
  };

  /////////////////////////////////////////////////////////////

  const [items, setItems] = useState([
    { id: "1", content: "Condidata Name" },
    { id: "2", content: "Title" },
    { id: "3", content: "Current Location" },
    { id: "4", content: "Availability" },
    { id: "5", content: "Experience" },
    { id: "6", content: "Visa type" },
    { id: "7", content: "Relocation" },
    { id: "8", content: "Notes" },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();

    const sourceIndex = e.dataTransfer.getData("index");
    const newItems = [...items];
    const [movedItem] = newItems.splice(sourceIndex, 1);
    newItems.splice(targetIndex, 0, movedItem);

    setItems(newItems);
  };

  /////////////////////////////////////////////////////////////
  const [isNameDelete, setNameDelete] = useState(false);

  const InputSetVv = () => {
    setInputSetV(false);
    setNameDelete(true);
  };

  return (
    <>
      <div className="TableNavbar">
        <div className="TableNavbar-left-side">
          <CiSearch size={18} className="TableNavbar-BiSearch-Search-icons" />

          <input
            type="text"
            placeholder="Search User"
            className="TableNavbar-search-box"
            value={Filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="TableNavbar-navbar-center-box ">
          {
            InputSetV &&
            <span className="InputSetV-input">
              {InputSetV} <TiDelete onClick={InputSetVv} />
            </span>
          }
        </div>

        <div className="TableNavbar-right-side">
          <Icon
            icon="fluent:table-settings-28-regular"
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
          <button
            className="TableNavbar-nav-Delete-button"
            onClick={ModalOpenDelete}
          >
            <MdDelete className="MdDelete" />
            Delete
          </button>
          <button
            className="TableNavbar-nav-button"
            onClick={() => {
              Navigate("/addHotlist");
            }}
          >
            Add Hotlist
          </button>
        </div>
      </div>

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
              <div className="jayu">
                <ul className="item-list">
                  {items.map((item, index) => (
                    <li
                      key={item.id}
                      className="item"
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                    >
                      {" "}
                      <FaGripVertical className="popupicons" />
                      <input type="checkbox" className="checkboxPOPUP-1" />
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
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

      <Modal
        open={isModalOpenDelete}
        onOk={ModalOpenDeleteOk}
        onCancel={ModalOpenDeleteCancel}
        footer={false}
        className="popup-Modal-3"
        closeIcon={false}
      >
        <h3 className="Modal-3-heding">Confirm Delete</h3>
        <div className="Modal-3-button-main">
          {contextHolder}
          <button className="Modal-button-yes-button" onClick={success}>
            Yes
          </button>
          <button className="Modal-button-no-button" onClick={handleCancel}>
            No
          </button>
        </div>
      </Modal>

      {/* ///////////////////////////////////////////////////////////////////////////////////// */}
    </>
  );
};

export default TableNavbar;
