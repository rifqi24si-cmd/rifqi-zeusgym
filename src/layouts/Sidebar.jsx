import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Orders', path: '/orders', icon: '🛒' },
  { name: 'Customers', path: '/customers', icon: '👥' },
  { name: 'Menu Kopi', path: '/menu', icon: '☕' },
  { name: 'Error 400', path: '/error/400', icon: '⚠️' },
  { name: 'Error 401', path: '/error/401', icon: '🔒' },
  { name: 'Error 403', path: '/error/403', icon: '🚫' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-100 p-6 flex flex-col">
      <div className="mb-10 px-4">
        <h1 className="text-2xl font-black text-gray-900">Kaffe<span className="text-yellow-500">.</span></h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Coffee Shop Dashboard</p>
      </div>
      <nav className="flex-1 space-y-2 text-sm">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${
                isActive ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-100' : 'text-gray-400 hover:bg-gray-50'
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;