/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/auth";
import { useEffect } from "react";

function Protected({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleGetUser = async () => {
    if (!token) {
      navigate("/login");
      return null;
    }
    const response = await getUser();
    if (response.status === 401) {
      navigate("/login");
      return null;
    }
  };

  useEffect(() => {
    handleGetUser();
  },[]);

  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default Protected;
