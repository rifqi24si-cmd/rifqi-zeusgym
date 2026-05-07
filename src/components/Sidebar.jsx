import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdFitnessCenter, MdPerson } from "react-icons/md";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";

const menus = [
  { name: "Dashboard", path: "/", icon: <MdDashboard /> },
  { name: "Jadwal Kelas", path: "/jadwal", icon: <FaCalendarAlt /> },
  { name: "Members", path: "/customers", icon: <FaUsers /> },
  { name: "Trainers", path: "/trainers", icon: <MdFitnessCenter /> },
  { name: "Peralatan", path: "/menu", icon: <GiWeightLiftingUp /> },
  { name: "Profil Gym", path: "/profile", icon: <MdPerson /> },
  { name: "Error 400", path: "/error/400", icon: <BsExclamationCircle /> },
  { name: "Error 401", path: "/error/401", icon: <BsExclamationCircle /> },
  { name: "Error 403", path: "/error/403", icon: <BsExclamationCircle /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-56 min-h-screen bg-white shadow-md flex flex-col p-4">
      {/* Logo Section */}
      <h1 className="text-2xl font-bold mb-2">
        FitLife<span className="text-blue-500">.</span>
      </h1>
      <p className="text-xs text-gray-400 mb-8 font-medium">Gym Dashboard</p>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menus.map((menu) => {
          const isActive = location.pathname === menu.path;
          
          return (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200" // Menu Aktif (Tetap Biru)
                  : "text-gray-500 hover:bg-[#E8F5E9] hover:text-[#2E7D32]" // HOVER JADI HIJAU (Seperti contoh Sedap)
              }`}
            >
              <span className={`text-xl transition-colors ${isActive ? "text-white" : "group-hover:text-[#2E7D32]"}`}>
                {menu.icon}
              </span>
              {menu.name}
            </Link>
          );
        })}
      </nav>

      {/* Info Tambahan di bawah (Optional - Biar makin mirip Sedap) */}
      <div className="mt-auto p-2 bg-gray-50 rounded-xl border border-dashed border-gray-200">
        <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">v 1.0.0</p>
      </div>
    </div>
  );
}