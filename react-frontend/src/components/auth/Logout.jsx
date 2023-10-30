import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return null;
    }
  }, []);
  return <div>Logout</div>;
}

export default Logout;
