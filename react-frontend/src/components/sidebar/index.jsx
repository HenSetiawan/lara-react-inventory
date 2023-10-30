import Item from "./item";

function index() {
  return (
    <div className="hidden md:block md:fixed top-0 left-0 w-64 h-full bg-gray-900 p-4 z-50">
      <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
        <img
          src="https://placehold.co/32x32"
          alt="logo"
          className="w-8 h-8 rounded object-cover"
        />
        <span className="text-lg font-bold text-white ml-3">Dashboard Kit</span>
      </a>
      <ul className="mt-4">
        <Item to="/" title="Overview" icon="ri-pie-chart-2-line" />
        <Item to="/products" title="Products" icon="ri-ticket-2-line" />
        <Item to="/admins" title="Admins" icon="ri-admin-line" />
        <Item
          to="/logout"
          title="Logout"
          icon="ri-contract-left-line"
          className="mt-10"
        />
      </ul>
    </div>
  );
}

export default index;
