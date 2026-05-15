import React, { useState } from 'react';
import { HiSearch, HiOutlineBell, HiOutlineCog } from 'react-icons/hi';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0F172A]/80 backdrop-blur-md h-20 px-8 flex items-center justify-between border-b border-slate-800 sticky top-0 z-40">
        {/* Search Bar ala Dark Mode */}
        <div 
          onClick={() => setIsSearchOpen(true)}
          className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 px-4 py-2.5 rounded-xl w-96 cursor-pointer hover:border-cyan-500/50 transition-all group"
        >
          <HiSearch className="text-slate-500 group-hover:text-cyan-400" size={20} />
          <span className="text-slate-500 text-sm font-medium">Search anything...</span>
        </div>

        <div className="flex items-center gap-6 text-white">
          <div className="flex gap-4 border-r border-slate-700 pr-6 text-slate-400">
            <button className="hover:text-cyan-400 transition-colors"><HiOutlineBell size={22} /></button>
            <button className="hover:text-cyan-400 transition-colors"><HiOutlineCog size={22} /></button>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold">Rifqi Al Shirazi</p>
              <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-tighter">Head Admin</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-slate-800">
              RS
            </div>
          </div>
        </div>
      </header>

      {/* MODAL SEARCH DARK THEME */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60 shadow-2xl">
          <div className="bg-[#1E293B] w-full max-w-2xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black text-white italic italic">SEARCH <span className="text-cyan-400">ZEUS GYM</span></h2>
                <button onClick={() => setIsSearchOpen(false)} className="text-slate-500 hover:text-white">✕</button>
              </div>
              <div className="relative">
                <HiSearch className="absolute left-5 top-5 text-cyan-500" size={24} />
                <input 
                  autoFocus
                  className="w-full bg-slate-900 border-2 border-slate-700 focus:border-cyan-500 rounded-2xl py-5 pl-14 pr-6 outline-none text-white transition-all shadow-2xl"
                  placeholder="Find members, equipment..."
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setIsSearchOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Header;