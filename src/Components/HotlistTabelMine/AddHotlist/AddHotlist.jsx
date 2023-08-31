import "./AddHotlist.css";
import Navbar from "../../Hotlist Management/Navbar";


import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { BsHddRackFill, BsInfoCircleFill } from "react-icons/bs";
import { Modal } from "antd";


import DownArrow from "./down arrow gif.gif"

import {  message } from 'antd';
import AddHotlistNavbar from "./AddHotlistNavbar";
import TablelUser from "../TablelUser/TablelUser";
import Footer from "../Footer/Footer";


const AddHotlist = () => {



  const [selectedOption, setSelectedOption] = useState("");
  const [fullName, setFullName] = useState("");
  const [visaType, setVisaType] = useState("");
  const [relocation, setRelocation] = useState("");
  const [open, setOpen] = useState(false);


  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Submit Successfully',
    });
  };



  const items = [
    "★ H1B",
    "★ H1B Transfer",
    "★ USC",
    "★ GC",
    "★ GC-EAD",
    "★ E2",
    "★ E2-EAD",
    "★ E3",
    "★ E3-EAD",
    "★ H4-EAD",
    "★ Initial OPT-EAD",
    "★ Stem OPT-EAD",
    "★ L2-EAD",
    "★ TN",
    "★ J2",
    "★ J2-EAD",
    "★ G4-EAD",
    "★ Indian Citizen",
    "★ L2-S",
    "★ Oth",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log( "selectedOption >>>", selectedOption);
  };

  return (
    <>
    <Navbar/>
     
    <div className="AddHotlist">
      
      <div className="Navbar-AddHotlist">
        <div className="AddHotlist-Add-Hotlist">
          <h3>Add Hotlist</h3>
        </div>
        <p className="AddHotlist-text">
          Select/Add Benchsales to add new hotlist. Scroll below to check the
          list of hotlist under particular benchsales.
        </p>
        <div className="AddHotlist-icons" onClick={() => setOpen(true)}>
          <BsInfoCircleFill className="AddHotlist-logo" />
          <p>Guidelines</p>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="select-box-main-input-sec">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Search">Search Benchsales</option>
          <option value="Shohil">Shohil </option>
          <option value="2Jayu">Jayu 1</option>
          <option value="2Jayu">Jayu 2</option>
          <option value="2Jayu">Jayu 3</option>
          <option value="2Jayu">Jayu 4</option>
          <option value="3jayu">jayu 5</option>
        </select>
      </div>
      <div className="main-input-sec">
        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="right-side-main-input-sec">
          <input
            type="text"
            className="right-side-input"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            className="right-side-input"
            placeholder="Title"
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
          />
          <input
            type="text"
            className="right-side-input"
            placeholder="Experience"
            value={relocation}
            onChange={(e) => setRelocation(e.target.value)}
          />
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="left-side-main-input-sec">
          <input
            type="text"
            className="right-side-input"
            placeholder="Visa type"
          />
          <input
            type="text"
            className="right-side-input"
            placeholder="Location(state)"
          />
          <input
            type="text"
            className="right-side-input"
            placeholder="Location(City)"
          />
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="last-side-main-input-sec">
          <input
            type="text"
            className="right-side-input"
            placeholder="Relocation"
          />
          <input
            type="text"
            className="right-side-input"
            placeholder="Availability"
          />
        </div>

        <div className="main-input-sec-button-main">
          <button className="main-input-sec-button-1">Cancel</button>
          {contextHolder}
          <button className="main-input-sec-button-2" onClick={success} >Submit</button>
        </div>
      
      <img src={DownArrow} alt="down arrow gif"  className="down-arrow-gif"/>

      </div>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000} 
        closeIcon={false}
        footer={false}
        className="addHotlist-modal"
      >
        <div>
          <h1 className="addHotlist-modal-heding">
            Hotlist Management Tool: Best Practices for Adding Candidates and
            Bench Sales
          </h1>
          <h2 className="addHotlist-modal-heding-2">
            Important Information regarding Updation
          </h2>
          <p className="addHotlist-modal-per-1">
            ● To obtain more refined results, be more particular about Job
            Titles. If you come across QA, replace it with Quality Analyst.
          </p>
          <p>
            ● If you encounter any fake candidates or find discrepancies in the
            candidature, keep mentioning proper Comments in the note section.
          </p>
          <p>
            ● Because we don t yet have a place for Starred or Favourite
            candidates, keep emphasizing Super Candidate in the notes section.
          </p>
          <h2 className="addHotlist-modal-heding-3">
            When adding a candidate to the hotlist management tool, please
            follow these guidelines
          </h2>
          <p>
            <span>● Full Name</span> Write the candidate s name in Proper Case
            (like John Smith or John S.)
          </p>
          <p>
            <span>● Title:</span> Write the candidate s job title in Proper Case
            (like Java Developer, Business Analyst - Healthcare , “Quality
            Analyst” or “Quality Analyst Finance”).
          </p>
          <p>
            <span>● Experience:</span> Write the candidate s experience in
            numbers only . Do not include years or months.
          </p>
          <p>
            <span>● Visa Type</span> Choose the appropriate visa type. Below is
            the list of Drop-Down values. If you don t find the Visa type
            available in the Drop-Down, add the Visa type using Add Visa Button.
          </p>
          <br />
          <br />
          _____________________________________________________________________________________________
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          _____________________________________________________________________________________________
          <br />
          <br />
          <p>
            ● Location (City): Write the candidate s city in Proper Case (like
            Basking Ridge).
          </p>
          <p>
            ● Location (State): Write the candidate s state in Proper Case (like
            California or New York). Do not use abbreviations.
          </p>
          <p>
            ● Relocation: Specify the candidate s willingness to relocate (like
            Open Only California, New York and New Jersey or “Remote”).
          </p>
          <br />
          <h2>
            When adding bench sales to the tool, please follow these guidelines
          </h2>
          <br />
          <p>
            ● Business Email: Write the email in a small case (like john@abc.com
            )
          </p>
          <p>
            ● First Name: Write the person s first name in Proper Case (like
            John).
          </p>
          <p>
            ● Last Name: Write the person s last name in Proper Case, or leave
            it blank if not available (like Smith or NA).
          </p>
          <p>
            ● Phone No: Write the phone number in the format xxx-xxx-xxxx for
            the USA. For other countries, start with the country code followed
            by the entire phone number (like +91-9898989898).
          </p>
          <p>
            ● LinkedIn ID: Provide the exact match of the person s LinkedIn
            profile (like https://www.linkedin.com/in/arshad-ali-311138168/).
          </p>
          <p>
            ● Hangout ID: Provide the exact match of the person s Hangout ID
            (like 0011shawn@gmail.com for shawn@1pointsys.com).
          </p>
          <p>
            ● WhatsApp Number: Write the phone number in the format
            +91-XXXXXXXXXX for India, and XXX-XXX-XXXX for the USA (like
            +91-9898989898 or 669-309-1111).
            <p>
              ● Location: Write the person s location as mentioned in the email,
              or as you know from talking to them (like Basking Ridge, New
              Jersey or Ahmedabad, Gujarat)
            </p>
          </p>
        </div>
      </Modal>
    </div>
<div className="AddHotlist-TablelUser-all"> 
 <AddHotlistNavbar/>
 <TablelUser/>
 <Footer/>

</div>

    </>
  );
};

export default AddHotlist;


