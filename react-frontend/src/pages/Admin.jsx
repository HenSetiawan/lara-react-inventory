/* eslint-disable no-unused-vars */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllAdmins, deleteAdmin } from "../services/admins";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { BsSortUp } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const columnHelper = createColumnHelper();

function Admin() {
  const [data, setData] = useState([
    { name: "Hendy", email: "hendy@gmail.com" },
  ]);

  const handleGetAllAdmins = async () => {
    const admins = await getAllAdmins();
    setData(admins.data);
  };

  const handleDeleteAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Data will deleted permanently",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async function (result) {
      if (result.isConfirmed) {
        const response = await deleteAdmin(id);
        if (response.success) {
          toast.success("success");
          handleGetAllAdmins();
        }
      }
    });
  };

  const columns = [
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => (
        <>
          <p>{info.getValue()}</p>
        </>
      ),
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => (
        <>
          <p>{info.getValue()}</p>
        </>
      ),
    }),
    columnHelper.accessor("id", {
      header: "Action",
      cell: (info) => (
        <div className="flex gap-1">
          <button
            onClick={() => {
              handleDeleteAdmin(info.getValue());
            }}
            className="bg-red-500 rounded px-4 py-2 text-xs text-white tect-center"
          >
            <i className="ri-delete-bin-line"></i>
          </button>
          <NavLink to={`/update-admin/${info.getValue()}`}>
            {" "}
            <button className="bg-yellow-400 rounded px-4 py-2 text-xs text-white tect-center">
              <i className="ri-edit-line"></i>
            </button>
          </NavLink>
        </div>
      ),
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    handleGetAllAdmins();
  }, []);
  return (
    <div className="container px-4 mt-10">
      <div className="p-6 bg-white rounded-lg">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">All Admin</h3>
            <NavLink to="/add-admin">
              <button className="bg-gray-500 px-4 py-1 text-white mt-3 text-xs rounded-md">
                Add Admin
              </button>
            </NavLink>
          </div>

          <div className="flex">
            <button className="flex items-center text-sm text-slate-500">
              <BsSortUp /> <span className=" ml-1">Sort</span>
            </button>
            <button className="flex items-center text-sm text-slate-500 ml-4">
              <FaFilter /> <span className=" ml-1">Filter</span>
            </button>
          </div>
        </div>
        <table className="mt-5 w-full text-left text-grey-500">
          <thead className="text-xs text-slate-500 capitalize">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-4 border-b-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="bg-white border-b-2">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 text-slate-600 py-4 font-medium text-sm whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="flex justify-end mt-5 text-slate-500">
          <select
            value={table.options.state.pagination.pageSize}
            onChange={(e) => table.setPageSize(e.target.value)}
            className="bg-transparent mr-10"
          >
            {[5, 10, 15].map((pageSizeEl) => {
              return (
                <option key={pageSizeEl} value={pageSizeEl}>
                  {pageSizeEl}
                </option>
              );
            })}
          </select>
          <button
            className="mx-4"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {<AiOutlineLeft />}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {<AiOutlineRight />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
