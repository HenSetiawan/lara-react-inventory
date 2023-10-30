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
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import {
  getAllProducts,
  deleteProduct,
  getProductByName,
} from "../services/product";
import { BsSortUp } from "react-icons/bs";

const columnHelper = createColumnHelper();

function Products() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);

  const handleAllProducts = async () => {
    try {
      const products = await getAllProducts();
      setData(products.data.data);
      setPageCount(Math.ceil(products.data.total / 10))
      setTotalProduct(products.data.total)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (name) => {
    try {
      if (name !== "") {
        const product = await getProductByName(name);
        setData(product.data);
      } else {
        handleAllProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Data will deleted permanently",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async function (result) {
      if (result.isConfirmed) {
        const response = await deleteProduct(id);
        if (response.success) {
          toast.success("success");
          handleAllProducts();
        }
      }
    });
  };
    const handlePageClick = (event) => {
      console.log(event.selected);
    };
  const columns = [
    columnHelper.accessor("code", {
      header: () => "Product Code",
      cell: (info) => (
        <>
          <p>{info.getValue()}</p>
        </>
      ),
    }),
    columnHelper.accessor("name", {
      header: () => "Product Name",
      cell: (info) => (
        <>
          <p>{info.getValue()}</p>
        </>
      ),
    }),
    columnHelper.accessor("price", {
      header: () => "Price",
      cell: (info) => (
        <>
          <p>{info.getValue()}</p>
        </>
      ),
    }),
    columnHelper.accessor("stock", {
      header: "Stock",
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
              handleDelete(info.getValue());
            }}
            className="bg-red-500 rounded px-4 py-2 text-xs text-white tect-center"
          >
            <i className="ri-delete-bin-line"></i>
          </button>
          <NavLink to={`/update-product/${info.getValue()}`}>
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
    handleAllProducts();
  }, []);
  return (
    <div className="container px-4 mt-10">
      <div className="p-6 bg-white rounded-lg">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">All Products</h3>
            <NavLink to="/add-product">
              <button className="bg-gray-500 px-4 py-1 text-white mt-2 text-xs rounded-md">
                Add Product
              </button>
            </NavLink>
            <form action="">
              <div className="border-2 p-1 mt-5">
                <input
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                  placeholder="search ..."
                  type="text"
                  className="px-1 text-sm focus:outline-none"
                />
              </div>
            </form>
          </div>

          <div className="flex">
            <button className="flex items-center text-slate-500">
              <BsSortUp /> <span className=" ml-1">Sort</span>
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
        <div className="flex items-center mt-2 justify-end">
          <div>
            <p className="text-slate-500 text-sm">Total Products : { totalProduct}</p>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            containerClassName="flex justify-center px-5 text-slate-500"
            previousClassName="mr-2 mt-1.5 font-bold"
            nextClassName="ml-2 mt-1.5 font-bold"
            previousLabel="<"
            marginPagesDisplayed={1}
            pageClassName="rounded-full w-[35px] mx-1 text-center leading-[35px] h-[35px]"
            breakClassName="rounded-full w-[35px] mx-1 text-center leading-[35px] h-[35px]"
            activeClassName="rounded-full w-[35px] mx-1 text-center leading-[35px] h-[35px] border-2"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
