/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { addNewAdmin, getAdmintById, updateAdmin } from "../services/admins";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import logistics from "../assets/logistics.svg";
function FormAdmin() {
  const navigate = useNavigate();
  const { adminId } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!adminId) {
      const response = await addNewAdmin(data);
      if (response.success) {
        toast.success("success !!", { delay: 500 });
        navigate("/admins");
      }
    } else {
      const updated = await updateAdmin(adminId, data);
      if (updated.success) {
        toast.success("success !!", { delay: 500 });
        navigate("/admins");
      }
    }
  };

  const handleGetAdminById = async (id) => {
    const admin = await getAdmintById(id);
    reset({
      name: admin.data.name,
      email: admin.data.email,
    });
  };

  useEffect(() => {
    if (adminId) {
      handleGetAdminById(adminId);
    }
  }, [reset]);
  return (
    <div className="container px-4 mt-5">
      <div className="bg-white p-10 rounded flex">
        <div className="w-1/2">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="name" className="text-slate-500 text-sm mb-1">
                Admin Name
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
                  admin name is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="text-slate-500 text-sm mb-1">
                Email
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.email?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("email", { required: true })}
                  placeholder="input product email"
                  id="email"
                  className="text-xs focus:outline-none w-full"
                  type="email"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  email is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="text-slate-500 text-sm mb-1">
                Password
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.password?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("password", { required: true })}
                  placeholder="input password"
                  id="password"
                  className="text-xs focus:outline-none w-full"
                  type="password"
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  password is required
                </p>
              )}
            </div>
            <div className="mt-5">
              <button className="text-sm bg-gray-500 text-white w-full rounded p-2">
                Save Data
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

export default FormAdmin;
