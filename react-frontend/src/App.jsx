/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import Navbar from './components/navbar/index';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer/>
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
