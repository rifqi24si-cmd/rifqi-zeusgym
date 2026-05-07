import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1E293B]/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl text-center">
        <div className="w-20 h-20 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/20">
          <span className="text-4xl">🔑</span>
        </div>
        <h2 className="text-2xl font-black text-white mb-2">Forgot Password?</h2>
        <p className="text-slate-400 mb-8 text-sm">No worries! Enter your email and we'll send you reset instructions.</p>
        
        <input type="email" className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 text-white outline-none mb-6" placeholder="Your Email" />
        
        <button className="w-full bg-white text-black font-black py-4 rounded-xl mb-6 hover:bg-cyan-500 hover:text-white transition-all">
          SEND RESET LINK
        </button>

        <Link to="/login" className="text-slate-500 text-sm font-bold hover:text-white transition-colors">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}