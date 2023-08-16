import { useState } from "react";
import "./TablelUser.css";
import { Modal } from 'antd';
import { FaEdit } from 'react-icons/fa';

const TablelUser = () => {
  // eslint-disable-next-line no-unused-vars
  
  const keys = [
    "id",
    "name",
    "title",
    "experience",
    "visaType",
    "currentLocation",
    "relocation",
    "availability",
  ];

  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
      experience: "5 years",
      visaType: "H1B",
      currentLocation: "New York",
      relocation: "Yes",
      availability: "Immediate",
    },
    {
      id: 2,
      name: "jayu",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 3,
      name: "yo lo",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 4,
      name: "sohil",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 5,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 6,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 7,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 8,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 9,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 10,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 11,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 12,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
  ]);


  const [textClick, settextClick] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);


  const tableData = [
    { label: 'First Name', value: 'Jayu' },
    { label: 'Last Name', value: 'Parmar' },
    { label: 'Business Email', value: '@relianttechno.com' },
    { label: 'Hangout ID', value: '--no--' },
    { label: 'Phone No', value: '9510923353' },
    { label: 'LinkedIn ID', value: 'yo lo' },
    { label: 'WhatsApp Number', value: '9510923353' }, 
    { label: 'Location', value: 'Charlotte, NC' },
  ];


  console.log(setCandidates);
  return (
    <div>
      <table className="TablelUser-main">
        <tr>
          <th className="TablelUser-heding">
            <input type="checkbox" className="TablelUser-input" />
          </th>
          <th>Sr. No</th>
          <th>Condidata Name</th>
          <th>Title</th>
          <th>Experience</th>
          <th>Visa type </th>
          <th>Current Location</th>
          <th>Relocation</th>
          <th>Availability</th>
        </tr>

        <tbody>
          {candidates.map((ele) => {
            console.log(">>>>ele", ele);
            return (
              <tr key={candidates.id}>
                <td className="chacbox">
                  <input type="checkbox" className="chacbox-chekd" />
                </td>
                {keys?.map((e) => {
                  if (e === "name") {
                    // eslint-disable-next-line react/jsx-key
                    return <td className="underline"  onClick={()=>{settextClick(true);}}>{ele?.[e]}</td>;


                  } else {
                    // eslint-disable-next-line react/jsx-key
                    return <td>{ele?.[e]}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

<div>

<Modal  open={textClick} onOk={()=>{settextClick(false);}} onCancel={()=>{settextClick(false);}} footer={null}
className="TablelUser-table"
>


<h1 className="TablelUser-table-heding" >Benchsales Contact Details</h1>
       <FaEdit className="TablelUser-FaEdit-edit-icons"  onClick={() => setModal2Open(true)}/>
<div className="TablelUser-table-1">


     {tableData.map((e,index)=>(  
        
        <div key={index} className="TablelUser-table-row">
            
          <div className="TablelUser-table-cell">{e.label} : </div>
          <div className="TablelUser-table-cell">{e.value}</div>

        </div>
    )) }

</div>

  

      </Modal>

</div>


<Modal
       
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        className="TablelUser-FaEdit-edit-icons-modal"
      >
       <h2 className="TablelUser-FaEdit-edit-icons-modal-heding">Bench Sales Details</h2>

       <div className="TablelUser-FaEdit-right-modal">
          <input
            type="text"
           placeholder="Business Email"
          className="TablelUser-modal-in-3"
          />
       
          <input
            type="text"
            placeholder="First Name"
            className="TablelUser-modal-in-3"

          />
          <input
            type="text"
            placeholder="Last Name"
            className="TablelUser-modal-in-3"
           
          />
        </div>
        {/* ////////////////////////////////////////////////// */}
       <div className="">
          <input
            type="text"
           placeholder="Phone No."
           className="TablelUser-modal-in-3"
             
            
          />
          <input
            type="text"
            placeholder="LinkedIn ID"
            className="TablelUser-modal-in-3"
            
          />
          <input
            type="text"
            placeholder="Hangout ID"
            className="TablelUser-modal-in-3"
           
          />
        </div>
        {/* ////////////////////////////////////////////////// */}
       <div className="">
          <input
            type="text"
           placeholder="WhatsApp Number"
           className="TablelUser-modal-in-3"
            
          />
          <input
            type="text"
            placeholder="Location"
            className="TablelUser-modal-in-3"
            
          />

        </div>
        {/* ////////////////////////////////////////////////// */}
 <button className="TablelUser-FaEdit-edit-icons-modal-button">yo loo</button>
      </Modal>

    </div>
  );
};

export default TablelUser;
