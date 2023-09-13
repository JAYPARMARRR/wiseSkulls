import "./TablelUser.css";
import { Modal } from "antd";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import mData from "./MOCK_DATA.json";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import UserName from "./UserName";

// eslint-disable-next-line react/prop-types
const TablelUser = ({ setFilter, Filter ,setInputSetV,InputSetV }) => {


  const [modal2Open, setModal2Open] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);


  const [Shorting, setShorting] = useState("");
  const [isParentChecked, setIsParentChecked] = useState(false);
  const [InArr, setInArr] = useState([]);

  const columns = [
    {
      accessorKey: "id",
      header: "Sr.No",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "experience",
      header: "Experience",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "visaType",
      header: "VisaType",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "currentLocation",
      header: "CurrentLocation",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "relocation",
      header: "Relocation",
      cell: (info) => info.getValue(),
    },

    {
      accessorKey: "availability",
      header: "Availability",
      cell: (info) => info.getValue(),
    },
  ];

  const data = useMemo(() => mData, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      Shorting: Shorting,
      globalFilter: Filter,
    },
    onSortingChange: setFilter,
    onGlobalFilterChange: setShorting,
  });

  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleParentChange = () => {
    if (isParentChecked) {
      setInArr([]);
    } else {
      const allRowIds = data.map((item) => item.id);
      setInArr(allRowIds);
    }
    setIsParentChecked(!isParentChecked);
  };

  const handleChildChange = (id) => {
    if (InArr.includes(id)) {
      setInArr(InArr.filter((item) => item !== id));
    } else {
      setInArr([...InArr, id]);
    }
  };

  useEffect(() => {
    if (InArr.length === mData.length) {
      setIsParentChecked(true);
    } else {
      setIsParentChecked(false);
    }
  }, [InArr, data]);

  return (
    <div>
      <table className="TablelUser-main">
        <thead>
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className="TablelUser-heding">
                {/* Heding  */}
                <input
                  type="checkbox"
                  className="TablelUser-input"
                  checked={isParentChecked}
                  onChange={handleParentChange}
                />
              </th>

              {headerGroup?.headers?.map((header) => (
                <th key={header?.id}>
                  {flexRender(
                    header?.column?.columnDef?.header,
                    header.getContext()
                  )}

                  <Icon
                    icon="fa-solid:filter"
                    className="fa-solid-icons"
                    onClick={showModal3}
                  />
                  <Modal
                    className="chakBoxinputmodal"
                    open={isModalOpen3}
                    onOk={handleOk3}
                    onCancel={handleCancel3}
                    footer={null}
                    closeIcon={false}
                  >
                    <p>Kam baki </p>
                  </Modal>
                  <Icon icon="fa-solid:sort-amount-up-alt" />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <>
                <tr key={row.id}>
                  <td className="chacbox">
                    {/* rows */}
                    <input
                      type="checkbox"
                      className="chacbox-chekd"
                      checked={InArr.includes(row.original.id)}
                      onChange={() => handleChildChange(row.original.id)}
                    />
                  </td>

                  {row.getVisibleCells().map((cell) => {
                    if (cell.column.id == "name") {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <UserName cell={cell} row={row} setModal2Open={setModal2Open}  setInputSetV={setInputSetV} InputSetV={InputSetV} />
                      );
                    } else {
                      return (
                        <td key={row.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    }
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div className="footer-main-div">
        <div className="Pagination-react-table">
          <MdKeyboardDoubleArrowLeft
            className="react-table-icons-1"
            onClick={() => table.setPageIndex(0)}
          />

          <MdKeyboardArrowLeft
            className="react-table-icons-2"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          />
          <MdKeyboardArrowRight
            className="react-table-icons-2"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          />

          <MdKeyboardDoubleArrowRight
            className="react-table-icons-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          />
        </div>
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
          <div className="yyy">

          <input
            type="text"
            placeholder="Business Email"
            className="TablelUser-modal-in-3"
          />
          </div>
     <div className="yyy">

          <input
            type="text"
            placeholder="First Name"
            className="TablelUser-modal-in-3"
          />
     </div>
     <div className="yyy">

          <input
            type="text"
            placeholder="Last Name"
            className="TablelUser-modal-in-3"
          />
     </div>
        </div>
        {/* ////////////////////////////////////////////////// */}
        <div className="TablelUser-FaEdit-right-modal">
          <div className="yyy">

          <input
            type="text"
            placeholder="Phone No."
            className="TablelUser-modal-in-3"
          />
          </div>
          <div className="yyy">

          <input
            type="text"
            placeholder="LinkedIn ID"
            className="TablelUser-modal-in-3"
          />
          </div>
          <div className="yyy">

          <input
            type="text"
            placeholder="Hangout ID"
            className="TablelUser-modal-in-3"
          />
          </div>
        </div>
        {/* ////////////////////////////////////////////////// */}
        <div className="TablelUser-FaEdit-right-modal">
          <div className="yyy">

          <input
            type="text"
            placeholder="WhatsApp Number"
            className="TablelUser-modal-in-3"
          />
          </div>
          <div className="yyy">

          <input
            type="text"
            placeholder="Location"
            className="TablelUser-modal-in-3"
          />
          </div>
        </div>
        {/* ////////////////////////////////////////////////// */}
        <div className="TablelUser-FaEdit-edit-icons-modal-button-main">

        <button className="TablelUser-FaEdit-edit-icons-modal-button">
          Update
        </button>
        </div>
      </Modal>
    </div>
  );
};

export default TablelUser;
