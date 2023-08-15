import { useState } from "react";
import "./TablelUser.css";

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
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 3,
      name: "Jane Smith",
      title: "Frontend Developer",
      experience: "3 years",
      visaType: "Green Card",
      currentLocation: "San Francisco",
      relocation: "No",
      availability: "2 weeks",
    },
    {
      id: 4,
      name: "Jane Smith",
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
                    return <td className="underline" >{ele?.[e]}</td>;

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
    </div>
  );
};

export default TablelUser;
