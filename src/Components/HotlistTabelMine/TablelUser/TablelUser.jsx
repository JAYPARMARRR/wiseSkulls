import "./TablelUser.css";
import { Modal } from "antd";
import { FaEdit } from "react-icons/fa";

import { useMemo, useState } from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import mData from "./MOCK_DATA.json";


import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';



const TablelUser = () => {
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

  const [textClick, settextClick] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  // console.log("mData >>",mData);

  const columns = [
    {
      accessorKey: "id",
      header:'Sr.No',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "name",
      header:"Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "title",
      header:"Title",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "experience",
      header:"Experience",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "visaType",
      header:"VisaType",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "currentLocation",
      header:"CurrentLocation",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "relocation",
      header:"Relocation",
      cell: (info) => info.getValue(),
    },
   
    {
      accessorKey: "availability",
      header:"Availability",
      cell: (info) => info.getValue(),
    },
   
  ];


  const data = useMemo(() => mData, []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });



  return (
    <div>
      <table className="TablelUser-main">
        <thead>
        {table?.getHeaderGroups()?.map((headerGroup) => (
          <tr key={headerGroup.id}>
            

            {headerGroup?.headers?.map((header) => (
              <th key={header?.id}>
                {flexRender(
                  header?.column?.columnDef?.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
     </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                // console.log(cell);
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>

        {/* <tfoot>
        {table?.getFooterGroups()?.map((footerGroups) => (
          <tr key={footerGroups.id}>
            

            {footerGroups?.headers?.map((header) => (
              <th key={header?.id}>
                {flexRender(
                  header?.column?.columnDef?.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
        </tfoot> */}

   

      </table>
   
      <div className="Pagination-react-table">
      
      <MdKeyboardDoubleArrowLeft  className="react-table-icons-1" onClick={()=> table.setPageIndex(0)}/>
    
    <MdKeyboardArrowLeft className="react-table-icons-2"    disabled={!table.getCanPreviousPage()} onClick={()=> table.previousPage()}/> 
    <MdKeyboardArrowRight className="react-table-icons-2"   disabled={!table.getCanNextPage() } onClick={()=> table.nextPage()}/>

    <MdKeyboardDoubleArrowRight className="react-table-icons-1"onClick={()=> table.setPageIndex(table.getPageCount() - 1)}/>
      </div>


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
}

export default TablelUser;
