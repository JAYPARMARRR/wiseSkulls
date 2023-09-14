import { Modal } from "antd";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

import {  message } from 'antd';


const EditUserComp = ({ row, setEditModal, editModal }) => {
  const data = row.original;


const [InputValueCheng , setInputValueCheng] =useState(data.id)
const [Title, setTitle] = useState(data.title);
const [Name, setName] = useState(data.name);
const [Experience, setExperience] = useState(data.experience);
const [VisaType, setvisaType] = useState(data.visaType);
const [CurrentLocation, setCurrentLocation] = useState(data.currentLocation);
const [Relocation, setRelocation] = useState(data.relocation);
const [Availability, setAvailability] = useState(data.availability);



const [messageApi, contextHolder] = message.useMessage();


const inputValueCheng = (event)=>{
    setInputValueCheng(event.target.value);
    
}
const title = (event)=>{
    setTitle(event.target.value);
    
}

const successUpdate = () => {
    setEditModal(false)
    messageApi.open({
      type: 'success',
      content: 'Update successfully',
    });
  };

  return (
    <>
      <FaEdit
        className="TablelUser-FaEdit-edit-icons"
        onClick={() => setEditModal(true)}
      />
      <Modal
        centered
        open={editModal}
        onOk={() => setEditModal(false)}
        onCancel={() => setEditModal(false)}
        footer={null}
        className="TablelUser-FaEdit-edit-icons-modal"
      >
        <h2 className="TablelUser-FaEdit-edit-icons-modal-heding">
          Bench Sales Details
        </h2>
        <div className="TablelUser-FaEdit-right-modal">
          <div className="yyy"> 
            <input value={InputValueCheng} onChange={inputValueCheng} placeholder="Id"  type="text" className="TablelUser-modal-in-3" />
          </div>

          <div className="yyy">
            <input type="text" value={Name} onChange={(event)=>(setName(event.target.value))} placeholder="Name" className="TablelUser-modal-in-3" />
          </div>
          <div className="yyy">
            <input type="text" value={Title} onChange={title} className="TablelUser-modal-in-3" placeholder="Title" />
          </div>
        </div>

        {/* ////////////////////////////////////////////////// */}
        <div className="TablelUser-FaEdit-right-modal">
          <div className="yyy">
            <input type="text" value={Experience} onChange={(event)=>(setExperience(event.target.value))} placeholder="Experience" className="TablelUser-modal-in-3" />
          </div>
          <div className="yyy">
            <input type="text"  value={VisaType} onChange={(event)=>(setvisaType(event.target.value))} placeholder="VisaType" className="TablelUser-modal-in-3" />
          </div>
          <div className="yyy">
            <input type="text" value={CurrentLocation} onChange={(event)=>(setCurrentLocation(event.target.value))} placeholder="CurrentLocation" className="TablelUser-modal-in-3" />
          </div>
        </div>
        {/* ////////////////////////////////////////////////// */}
        <div className="TablelUser-FaEdit-right-modal">
          <div className="yyy">
            <input type="text" value={Relocation} onChange={(event)=>(setRelocation(event.target.value))}  placeholder="Relocation" className="TablelUser-modal-in-3" />
          </div>
          <div className="yyy">
            <input type="text" value={Availability} onChange={(event)=>(setAvailability(event.target.value))} className="TablelUser-modal-in-3" />
          </div>
        </div>
        {/* ////////////////////////////////////////////////// */}

        <div className="TablelUser-FaEdit-edit-icons-modal-button-main">
        {contextHolder}
          <button className="TablelUser-FaEdit-edit-icons-modal-button"  onClick={successUpdate}>
            Update
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EditUserComp;
