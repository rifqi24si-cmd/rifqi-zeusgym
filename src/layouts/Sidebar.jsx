import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Orders', path: '/orders', icon: '🛒' },
  { name: 'Customers', path: '/customers', icon: '👥' },
  { name: 'Alat Gym', path: '/menu', icon: '🏋️' }, // Ganti icon biar pas
  { name: 'Error 400', path: '/error/400', icon: '⚠️' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0F172A] h-screen border-r border-slate-800 p-6 flex flex-col transition-all">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-black text-white tracking-tighter">
          Zeus<span className="text-cyan-400">Gym</span>
        </h1>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Gym Dashboard</p>
      </div>
      
      <nav className="flex-1 space-y-2 text-sm">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-900/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-cyan-400'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Profile Card Kecil di Bawah Sidebar */}
      <div className="mt-auto p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
         <p className="text-[10px] text-cyan-400 font-black uppercase">Pro Plan</p>
         <p className="text-xs text-white mt-1">Upgrade your gym</p>
      </div>
    </div>
  );
};

export default Sidebar;