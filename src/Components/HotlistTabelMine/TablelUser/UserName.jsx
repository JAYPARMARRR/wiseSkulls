/* eslint-disable react/prop-types */
import { flexRender } from "@tanstack/react-table";
import { Modal } from "antd";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const UserName = ({ cell, row, setModal2Open }) => {
  const [textClick, settextClick] = useState(false);




  return (
    <>
      <td
        // key={cell.id}
        className="underline"
        onClick={() => {
          settextClick(true);
        }}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}

        <FiEdit3  className="FiEdit3"/>
      </td>
      <>
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
          <div className="TablelUser-table-heding-main">
            <h4 className="TablelUser-table-heding">
              Benchsales Contact Details
            </h4>
          </div>
          <FaEdit
            className="TablelUser-FaEdit-edit-icons"
            onClick={() => setModal2Open(true)}
          />

          <div className="TablelUser-table-1">
            <div className="TablelUser-table-row">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >




                {Object.keys(row?.original).map((col) => {
                  const NameChang = col === "name";
        console.log("row?.original >> ", row?.original);
                  return (
                    <>
                      <div className="TablelUser-table-cell">
                        <div
                          key={col}
                          style={{ display: "flex", width: "100%" }}
                          className={ ` ${NameChang ? "nameColumn" : ""}`}
                          
                        >
                          <h3 className="lebal-show">{col}</h3>
                          <div>
                            {" "}
                            <span className="TablelUser-main-modal-sapn"> :</span>

                            <span className="TablelUser-main-modal-key" >
                            {row?.original[col]} 

                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}


              </div>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default UserName;
