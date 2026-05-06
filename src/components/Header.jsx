import React, { useState } from 'react';
import orders from '../data/orders';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Filter data berdasarkan input search (Materi Pertemuan 4)
  const filteredResults = searchTerm === "" ? [] : orders.filter(item =>
    item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.menu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* 1. SEARCH BAR AREA */}
      <div className="relative w-1/3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 pl-11 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-2.5 text-gray-400">🔍</span>
        </div>

        {/* Search Results Dropdown - Muncul kalau ada ketikan */}
        {searchTerm && (
          <div className="absolute mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl max-h-60 overflow-y-auto">
            {filteredResults.length > 0 ? (
              filteredResults.map(res => (
                <div key={res.id} className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
                  <p className="font-bold text-sm text-gray-800">{res.customer}</p>
                  <p className="text-xs text-gray-500">{res.menu} - {res.total}</p>
                </div>
              ))
            ) : (
              <p className="p-4 text-sm text-gray-400 text-center">Data tidak ditemukan...</p>
            )}
          </div>
        )}
      </div>

      {/* 2. ACTIONS AREA (Icons & Profile) */}
      <div className="flex items-center gap-4">
        {/* Notifikasi Icon */}
        <div className="relative p-2 bg-blue-50 text-blue-600 rounded-xl cursor-pointer hover:bg-blue-100 transition">
          🔔 <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white font-bold">50</span>
        </div>

        {/* Analytics Icon */}
        <div className="p-2 bg-cyan-50 text-cyan-600 rounded-xl cursor-pointer hover:bg-cyan-100 transition">
          📊
        </div>

        {/* Settings Icon */}
        <div className="p-2 bg-red-50 text-red-600 rounded-xl cursor-pointer hover:bg-red-100 transition mr-2">
          ⚙️
        </div>

        {/* PROFILE SECTION */}
        <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
        
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="text-right hidden md:block">
              <p className="text-xs text-gray-400">Hello,</p>
              <p className="text-sm font-bold text-gray-800 leading-tight">Rifqi Al Shirazi</p>
            </div>
            <img 
              src="https://ui-avatars.com/api/?name=Rifqi+Al+Shirazi&background=random" 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-blue-100 shadow-sm"
            />
          </div>

          {/* Profile Dropdown Menu - Materi Pertemuan 6 (Conditional Rendering) */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-2 border-b border-gray-50">
                <p className="text-xs text-gray-400 font-medium">Account Settings</p>
              </div>
              <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">My Profile</a>
              <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Security</a>
              <div className="border-t border-gray-50 mt-2">
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition font-medium">Log Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;