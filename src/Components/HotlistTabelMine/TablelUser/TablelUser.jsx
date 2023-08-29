import { useState } from "react";
import "./TablelUser.css";
import { Modal } from "antd";
import { FaEdit } from "react-icons/fa";

import { Icon } from "@iconify/react";

const TablelUser = () => {
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
      name: "Parmar Jay",
      title: "Software Engineer",
      experience: "5 years",
      visaType: "H1B",
      currentLocation: "New York",
      relocation: "Yes",
      availability: "Immediate",
    },
    {
      id: 2,
      name: "Sohil",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 3,
      name: "Shi",
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
    {
      id: 13,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 14,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 15,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 16,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 17,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 18,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 19,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 20,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 21,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 22,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 23,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 24,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 25,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 26,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 27,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 28,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 29,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 30,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 31,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 32,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 33,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 34,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 35,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 36,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 37,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 38,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 40,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 41,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 42,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 43,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 44,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 45,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 46,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 47,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 48,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 49,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 50,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
  ]);
  
  // eslint-disable-next-line no-unused-vars

  const [textClick, settextClick] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const [InArr, setInArr] = useState([]);

  const tableData = [
    { label: "First Name", value: "Jayu" },
    { label: "Last Name", value: "Parmar" },
    { label: "Business Email", value: "@relianttechno.com" },
    { label: "Hangout ID", value: "--No--" },
    { label: "Phone No", value: "9510923353" },
    { label: "LinkedIn ID", value: "--No--" },
    { label: "WhatsApp Number", value: "9510923353" },
    { label: "Location", value: "Charlotte, NC" },
  ];

  const [childChecked, setChildChecked] = useState(false);

  const handleParentChange = (check) => {
    if (check.target.checked) {
      setInArr(candidates.map((e) => e.id));
    } else {
      setInArr([]);
    }
  };
  //////////////////////////////////////////////////////////

  const handleChildChange = (id) => {
    setChildChecked(!childChecked);

    if (InArr.includes(id)) {
      setInArr(InArr.filter((item) => item !== id));
    } else {
      setInArr([...InArr, id]);
    }

  };


  const isParentChecked = InArr.length === candidates.length;

  return (
    <div>
      <table className="TablelUser-main">
        <tr>
          <th className="TablelUser-heding">
            <input
              type="checkbox"
              className="TablelUser-input"
              checked={isParentChecked}
              onChange={handleParentChange}
            />
          </th>

          <th>
            Sr. No <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Condidata Name <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Title
            <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Experience <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Visa type <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Current Location <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Relocation
            <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
          <th>
            Availability
            <Icon icon="fa-solid:filter" />{" "}
            <Icon icon="fa-solid:sort-amount-up-alt" />
          </th>
        </tr>

        <tbody>
          {candidates.map((ele) => {
            return (
              <tr key={candidates.id}>
                <td className="chacbox">
                  <input
                    type="checkbox"
                    className="chacbox-chekd"
                    checked={InArr.includes(ele.id)}
                    onChange={() => handleChildChange(ele.id)}
                  />
                </td>

                {keys?.map((e) => {
                  if (e === "name") {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <td
                        className="underline"
                        onClick={() => {
                          settextClick(true);
                        }}
                      >
                        {ele?.[e]}
                      </td>
                    );
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
        <Modal
          open={textClick}
          onOk={() => {
            settextClick(false);
          }}
          onCancel={() => {
            settextClick(false);
          }}
          footer={null}
          className="TablelUser-table"
        >
          <h1 className="TablelUser-table-heding">
            Benchsales Contact Details
          </h1>
          <FaEdit
            className="TablelUser-FaEdit-edit-icons"
            onClick={() => setModal2Open(true)}
          />
          <div className="TablelUser-table-1">
            {tableData.map((e, index) => (
              <div key={index} className="TablelUser-table-row">
                <div className="TablelUser-table-cell">{e.label} : </div>
                <div className="TablelUser-table-cell">{e.value}</div>
              </div>
            ))}
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
        <h2 className="TablelUser-FaEdit-edit-icons-modal-heding">
          Bench Sales Details
        </h2>

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
        <button className="TablelUser-FaEdit-edit-icons-modal-button">
          Update
        </button>
      </Modal>
    </div>
  );
};

export default TablelUser;
