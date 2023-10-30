import { useLocation } from "react-router-dom";

function Index() {
  let location = useLocation();
  return (
    <div className="py-4 px-6 bg-white md:flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-gray-600 sidebar-toggle">
        <i className="ri-menu-line"></i>
      </button>
      <ul className="flex items-center text-sm ml-4">
        <li className="mr-2">
          <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">
            Dashboard
          </a>
        </li>
        <li className="text-gray-600 mr-2 font-medium">/</li>
        <li className="text-gray-600 mr-2 font-medium capitalize">{location.pathname.substring(1)}</li>
      </ul>
    </div>
  );
}

export default Index;
