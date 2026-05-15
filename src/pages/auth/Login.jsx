import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validasi sesuai permintaanmu
    if (email === 'kaye@gmail.com' && password === 'kayepass') {
      navigate('/');
    } else {
      setError('Email atau Password salah! (Cek instruksi)');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1E293B]/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white tracking-tighter">
            ZEUS<span className="text-cyan-500">GYM.</span>
          </h1>
          <p className="text-slate-400 mt-2 font-medium">Welcome Back, Captain! 👋</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-red-400 text-xs text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">{error}</p>}
          
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 mt-2 text-white outline-none transition-all"
              placeholder="kaye@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex justify-between ml-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
              <Link to="/forgot" className="text-xs text-cyan-500 hover:underline">Forgot?</Link>
            </div>
            <input 
              type="password" 
              className="w-full bg-slate-900/50 border border-slate-700 focus:border-cyan-500 rounded-xl py-3 px-4 mt-2 text-white outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black py-4 rounded-xl shadow-lg shadow-cyan-900/20 transition-all transform active:scale-95">
            LOG IN
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-8">
          Don't have an account? <Link to="/register" className="text-cyan-500 font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}