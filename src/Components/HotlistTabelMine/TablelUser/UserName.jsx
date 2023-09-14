/* eslint-disable react/prop-types */
import { flexRender } from "@tanstack/react-table";
import { Modal } from "antd";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import EditUserComp from "./EditUserComp";

const UserName = ({ cell, row, setInputSetV }) => {
  const [textClick, settextClick] = useState(false);
  const [editModal, setEditModal] = useState(false);

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

        <FiEdit3 className="FiEdit3" />
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
          <EditUserComp row={row} setEditModal={setEditModal} editModal={editModal} />

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
                  const handleClick = () => {
                    if (NameChang) {
                      setInputSetV(row?.original.name);
                      settextClick(false);
                    }
                  };

                  return (
                    <>
                      <div className="TablelUser-table-cell">
                        <div
                          key={col}
                          style={{ display: "flex", width: "100%" }}
                          className={` ${NameChang ? "nameColumn" : ""}`}
                        >
                          <h3 className="lebal-show">{col}</h3>
                          <div>
                            {" "}
                            <span className="TablelUser-main-modal-sapn">
                              {" "}
                              :
                            </span>
                            <span
                              className="TablelUser-main-modal-key"
                              onClick={handleClick}
                            >
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

        {/* ////////////////////////////////////////////////// ////////////////////////////////////////////////// */}
      </>
    </>
  );
};

export default UserName;
