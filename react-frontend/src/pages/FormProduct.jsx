/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addNewProduct,
  updateProduct,
  getProductById,
} from "../services/product";
import { toast } from "react-toastify";
import logistics from "../assets/logistics.svg";
function FormProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!productId) {
      const response = await addNewProduct(data);
      if (response.success) {
        toast.success("success !!", { delay: 500 });
        navigate("/products");
      } else {
        toast.error("error !!", { delay: 500 });
      }
    } else {
      const response = await updateProduct(productId, data);
      if (response.success) {
        toast.success("success !!", { delay: 500 });
        navigate("/products");
      } else {
        toast.error("error !!", { delay: 500 });
      }
    }
  };

  const handleGetProductById = async (id) => {
    const product = await getProductById(id);
    reset({
      name: product.data.name,
      price: product.data.price,
      stock: product.data.stock,
      code: product.data.code,
    });
  };
  useEffect(() => {
    if (productId) {
      handleGetProductById(productId);
    }
  }, [reset]);
  return (
    <div className="container px-4 mt-5">
      <div className="bg-white p-10 rounded flex">
        <div className="w-1/2">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="name" className="text-slate-500 text-sm mb-1">
                Product Name
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.name?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("name", { required: true })}
                  placeholder="input product name"
                  id="name"
                  className="text-xs focus:outline-none w-full"
                  type="text"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  product name is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="stock" className="text-slate-500 text-sm mb-1">
                Product Stock
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.stock?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("stock", { required: true })}
                  placeholder="input product stock"
                  id="stock"
                  className="text-xs focus:outline-none w-full"
                  type="text"
                />
              </div>
              {errors.stock?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  product stock is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="price" className="text-slate-500 text-sm mb-1">
                Product Price
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.price?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("price", { required: true })}
                  placeholder="input product price"
                  id="price"
                  className="text-xs focus:outline-none w-full"
                  type="text"
                />
              </div>
              {errors.price?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  product price is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="code" className="text-slate-500 text-sm mb-1">
                Product Code
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.code?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("code", { required: true })}
                  placeholder="input product code"
                  id="code"
                  className="text-xs focus:outline-none w-full"
                  type="text"
                />
              </div>
              {errors.code?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  product code is required
                </p>
              )}
            </div>
            <div className="mt-5">
              <button className="text-sm bg-gray-500 text-white w-full rounded p-2">
                Save Product
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/3">
          <img className="ml-10 mt-10" src={logistics} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FormProduct;
