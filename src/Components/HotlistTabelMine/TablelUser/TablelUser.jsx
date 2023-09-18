/* eslint-disable react/prop-types */
import "./TablelUser.css";

import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import UserName from "./UserName";
import ReactPaginate from "react-paginate";
// eslint-disable-next-line react/prop-types
const TablelUser = ({
  setFilter,
  Filter,
  mData,
  setInputSetV,
  InputSetV,
  InArr,
  setInArr,
  setyolo,
}) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [Shorting, setShorting] = useState("");
  const [isParentChecked, setIsParentChecked] = useState(false);

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

  const [currentPage, setCurrentPage] = useState(0);

  const dataPerPage = 10;
  const totalData = 500;
  const pageCount = Math.ceil(totalData / dataPerPage);

  const pageClick = (tableData) => {
    const selectedPage = tableData.selected;

    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * dataPerPage || 0;
  const endIndex = startIndex + dataPerPage || 10;
  const data = useMemo(
    () => mData.slice(startIndex, endIndex),
    [startIndex, mData]
  );

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

  useEffect(() => {
    setyolo(InArr);
  }, [InArr]);

  //////////////////////////////////////

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

                  <Icon icon="fa-solid:filter" className="fa-solid-icons" />

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
                        <UserName
                          cell={cell}
                          row={row}
                          setModal2Open={setModal2Open}
                          setInputSetV={setInputSetV}
                          InputSetV={InputSetV}
                          modal2Open={modal2Open}
                        />
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

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="footer-main-div">
        <div className="candidates-per-page">
          <span>Candidates per page</span>
          <select
            className="candidates-per-page-select"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option
                key={pageSize}
                value={pageSize}
                className="candidates-per-page-option"
              >
                <div>{pageSize}</div>
              </option>
            ))}
          </select>
        </div>

        {/* Pagination */}
        <div className="Pagination-react-table">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={5}
            pageRangeDisplayed={1}
            onPageChange={pageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            
            initialPage={data}
          />
        </div>
      </div>
    </div>
  );
};

export default TablelUser;
