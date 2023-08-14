import { useState } from "react";
import Hotlist from "../../Hotlist Management/Hotlist";
import "./AddHotlist.css";
// https://colourking.co.in//#/mine
import { BsInfoCircleFill } from "react-icons/bs";
import { Modal } from 'antd';




const AddHotlist = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [fullName, setFullName] = useState("");
  const [visaType, setVisaType] = useState("");
  const [relocation, setRelocation] = useState("");
  const [open, setOpen] = useState(false);
  const items = [
    '★ H1B',
    ' ★ H1B Transfer',
    '★ USC',
    '★ GC',
    '★ GC-EAD',
    '★ E2',
    '★ E2-EAD',
    '★ E3',
    '★ E3-EAD',
    '★ H4-EAD',
    '★ Initial OPT-EAD',
    '★ Stem OPT-EAD',
    '★ L2-EAD',
    '★ TN',
    '★ J2',
    '★ J2-EAD',
    '★ G4-EAD',
    '★ Indian Citizen',
    '★ L2-S',
    '★ Oth',
  ];





  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

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
          <option value="2Jayu">Jayu 2</option>
          <option value="2Jayu">Jayu 2</option>
          <option value="2Jayu">Jayu 2</option>
          <option value="2Jayu">Jayu 2</option>
          <option value="3jayu">jayu 3</option>
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
          <button className="main-input-sec-button-2">Submit</button>
        </div>
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
<div >
<h1 className="addHotlist-modal-heding">Hotlist Management Tool: Best Practices for Adding
Candidates and Bench Sales</h1>

<h2 className="addHotlist-modal-heding-2">Important Information regarding Updation
</h2>

<p className="addHotlist-modal-per-1">●  To obtain more refined results, be more particular about Job Titles. If you come across QA, replace it with Quality Analyst.</p>
<p>●  If you encounter any fake candidates or find discrepancies in the candidature, keep mentioning proper Comments in the note section.</p>
<p>●  Because we don t yet have a place for Starred or Favourite candidates, keep emphasizing Super Candidate in the notes section.</p>


<h2 className="addHotlist-modal-heding-3">When adding a candidate to the hotlist management tool, please follow these guidelines</h2>

<p><span>● Full Name</span> Write the candidate s name in Proper Case (like John Smith  or  John S.)</p>
<p><span>● Title:</span> Write the candidate s job title in Proper Case (like Java Developer, Business

Analyst - Healthcare , “Quality Analyst” or “Quality Analyst  Finance”).</p>
<p><span>● Experience:</span> Write the candidate s experience in numbers only .

Do not include years or months.</p>

<p><span>● Visa Type</span> Choose the appropriate visa type. Below is the list of Drop-Down values.

If you don t find the Visa type available in the Drop-Down, add the Visa type using Add Visa Button.</p>


{items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

<p>● Location (City): Write the candidate s city in Proper Case (like Basking Ridge).</p>
<p>
● Location (State): Write the candidate s state in Proper Case (like California

or New York). Do not use abbreviations.</p>

<p>● Relocation: Specify the candidate s willingness to relocate (like Open Only

California, New York and New Jersey or “Remote”).</p>

<h2>When adding bench sales to the tool, please follow these guidelines:
</h2>



</div>

      </Modal>
    </div>
  );
};

export default AddHotlist;
