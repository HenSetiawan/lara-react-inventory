/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login, getUser } from "../services/auth";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const result = await login(data);
    if (!result.success) {
      toast.error("email or password is invalid");
      return null;
    }
    localStorage.setItem("token", result.token);
    navigate("/");
  };

  const handleGetUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
      return null;
    }
    const response = await getUser();
    if (response.status !== 401) {
      navigate("/");
      return null;
    }
  };
  useEffect(() => {
    handleGetUser();
  },[] );

  return (
    <div className=" bg-slate-700 h-[100vh]">
      <ToastContainer />
      <div className="container w-full relative flex justify-center">
        <div className="bg-white p-6 rounded-lg mx-auto w-96 md:w-1/4 absolute top-20">
          <div className="text-center">
            <img
              src="https://placehold.co/32x32"
              alt="logo"
              className="w-10 h-10 rounded mx-auto block object-cover"
            />
            <p className="text-sm text-slate-400 mt-2 font-semibold">
              Dashboard Kit
            </p>
            <p className="font-bold text-xl mt-5">Log in to Dashboard Kit</p>
            <p className="text-slate-400 text-xs mt-2">
              Enter your email and password below
            </p>
          </div>
          <div className="mt-10">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <label
                className="text-sm text-slate-400 font-semibold uppercase mt-5 inline-block"
                htmlFor="email"
              >
                Email
              </label>
              <div
                className={`border p-2 mt-1 ${
                  errors.email?.type === "required" ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("email", { required: true })}
                  id="email"
                  className="w-full h-full text-sm focus:outline-none"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  email is required
                </p>
              )}
              <div className="flex justify-between mt-5">
                <label
                  className="text-sm text-slate-400 font-semibold uppercase"
                  htmlFor="password"
                >
                  Password
                </label>
                <a className="text-xs text-slate-400" href="">
                  Forgot password?
                </a>
              </div>
              <div
                className={`border p-2 mt-1 ${
                  errors.password ? "border-red-600" : ""
                }`}
              >
                <input
                  {...register("password", { required: true })}
                  id="password"
                  className="w-full h-full text-sm focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-xs italic text-red-600 mt-1" role="alert">
                  password is required
                </p>
              )}
              <button
                type="submit"
                className="bg-blue-700 text-white text-center w-full mt-5 rounded-lg py-2 text-sm"
              >
                Log in
              </button>
              <p className="text-center text-xs text-slate-400 mt-5">
                Dont have an account?{" "}
                <span className="text-teal-500 font-semibold">Sign Up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
