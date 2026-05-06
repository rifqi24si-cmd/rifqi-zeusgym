import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCoffee, FaUsers } from "react-icons/fa";
import { BsCart3, BsExclamationCircle } from "react-icons/bs";

const menus = [
  { name: "Dashboard", path: "/", icon: <MdDashboard /> },
  { name: "Orders", path: "/orders", icon: <BsCart3 /> },
  { name: "Customers", path: "/customers", icon: <FaUsers /> },
  { name: "Menu Kopi", path: "/menu", icon: <FaCoffee /> },
  { name: "Error 400", path: "/error/400", icon: <BsExclamationCircle /> },
  { name: "Error 401", path: "/error/401", icon: <BsExclamationCircle /> },
  { name: "Error 403", path: "/error/403", icon: <BsExclamationCircle /> },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="w-56 min-h-screen bg-white shadow-md flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-2">Kaffe<span className="text-yellow-500">.</span></h1>
      <p className="text-xs text-gray-400 mb-8">Coffee Shop Dashboard</p>
      <nav className="flex flex-col gap-2">
        {menus.map((menu) => (
          <Link key={menu.path} to={menu.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition ${
              location.pathname === menu.path
                ? "bg-yellow-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}>
            <span className="text-lg">{menu.icon}</span>
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}   