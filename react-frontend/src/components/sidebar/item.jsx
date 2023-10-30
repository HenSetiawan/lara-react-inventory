/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
function Item({ to, title, icon, className }) {
  return (
    <li className={`mb-1 ${className}`}>
      <NavLink
        to={to}
        className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
      >
        <i className={`${icon} text-lg mr-3`}></i>
        <span className="text-sm">{title}</span>
      </NavLink>
    </li>
  );
}

export default Item;
