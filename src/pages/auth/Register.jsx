import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1E293B]/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white tracking-tighter">
            JOIN <span className="text-cyan-500">FITLIFE.</span>
          </h1>
          <p className="text-slate-400 mt-2 font-medium">Start your fitness journey today</p>
        </div>

        <div className="space-y-5">
          <input type="text" className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-white outline-none" placeholder="Full Name" />
          <input type="email" className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-white outline-none" placeholder="Email Address" />
          <input type="password" className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-white outline-none" placeholder="Password" />
          
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-4 rounded-xl shadow-lg transition-all transform active:scale-95">
            CREATE ACCOUNT
          </button>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Already a member? <Link to="/login" className="text-cyan-500 font-bold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}