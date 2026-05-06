import React, { useState } from 'react';

const Dashboard = () => {
  // --- STATE MANAGEMENT (Materi Pertemuan 7) ---
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // --- DATA DUMMY (Materi Pertemuan 4 - List & Keys) ---
  const orders = [
    { id: '#O-001', customer: "Budi Santoso", menu: "Cappuccino", status: "Selesai", total: "Rp 35.000" },
    { id: '#O-002', customer: "Siti Rahayu", menu: "Latte", status: "Proses", total: "Rp 40.000" },
    { id: '#O-003', customer: "Ahmad Fauzi", menu: "Espresso", status: "Selesai", total: "Rp 25.000" },
    { id: '#O-004', customer: "Dewi Lestari", menu: "Matcha Latte", status: "Batal", total: "Rp 45.000" },
    { id: '#O-005', customer: "Rizky Pratama", menu: "Americano", status: "Proses", total: "Rp 30.000" },
    { id: '#O-006', customer: "Rifqi Al Shirazi", menu: "Caramel Macchiato", status: "Selesai", total: "Rp 48.000" },
    { id: '#O-007', customer: "Putri Amalia", menu: "Iced Chocolate", status: "Selesai", total: "Rp 38.000" },
    { id: '#O-008', customer: "Andi Wijaya", menu: "V60 Gayo", status: "Proses", total: "Rp 28.000" },
  ];

  // --- LOGIC SEARCH (Materi Pertemuan 4) ---
  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.menu.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- LOGIC STYLE (Materi Pertemuan 6 - Conditional Styling) ---
  const getStatusStyle = (status) => {
    switch (status) {
      case "Selesai": return "bg-green-100 text-green-600";
      case "Proses": return "bg-orange-100 text-orange-600";
      case "Batal": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      
      {/* === 1. HEADER SECTION (Sticky Header) === */}
      <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Cari pesanan atau pelanggan..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-10 focus:ring-2 focus:ring-yellow-500 outline-none transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-2.5">🔍</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative p-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition">
            🔔 <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">50</span>
          </div>
          <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>
          <div className="relative">
            <div 
              className="flex items-center gap-3 cursor-pointer p-1 rounded-lg hover:bg-gray-50 transition"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="text-right hidden sm:block">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter leading-none mb-1">Admin</p>
                <p className="text-sm font-bold text-gray-800 leading-none">Rifqi Al Shirazi</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Rifqi+Al+Shirazi&background=EAB308&color=fff" className="w-10 h-10 rounded-full border-2 border-yellow-100 shadow-sm" alt="avatar" />
            </div>
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-yellow-50 transition">Profil Saya</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-yellow-50 transition border-b border-gray-50">Pengaturan</button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium">Keluar</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="p-8">
        {/* === 2. TITLE SECTION === */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <nav className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Home &gt; Dashboard</nav>
            <h1 className="text-3xl font-black text-gray-950">Kaffe Dashboard</h1>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-yellow-200 transition-all active:scale-95">
            + Pesanan Baru
          </button>
        </div>

        {/* === 3. STATS CARDS (GRID 4 KOLOM) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Pesanan", val: "128", color: "blue" },
            { label: "Terkirim", val: "95", color: "green" },
            { label: "Dibatalkan", val: "12", color: "red" },
            { label: "Pendapatan", val: "Rp 4,2jt", color: "yellow" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-yellow-600 transition-colors">{item.label}</p>
              <h2 className="text-3xl font-black mt-2 text-gray-900 tracking-tight">{item.val}</h2>
              <div className="w-full h-1.5 mt-4 rounded-full bg-gray-50 overflow-hidden">
                <div className={`h-full bg-yellow-400 rounded-full`} style={{width: '65%'}}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* === 4. TABEL PESANAN (KOLOM KIRI) === */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-black text-gray-900 uppercase text-xs tracking-[0.2em]">Pesanan Terbaru</h3>
              <button className="text-[10px] bg-gray-50 text-gray-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-full font-black uppercase tracking-widest transition-all">
                Lihat Semua
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 border-b border-gray-50">
                  <tr className="text-[10px] uppercase text-gray-400 font-black tracking-widest">
                    <th className="px-8 py-5">Nama Pelanggan</th>
                    <th className="px-8 py-5">Menu</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-yellow-50/30 transition-colors">
                      <td className="px-8 py-5 text-sm font-bold text-gray-800">{order.customer}</td>
                      <td className="px-8 py-5 text-sm text-gray-500 font-medium">{order.menu}</td>
                      <td className="px-8 py-5">
                        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${getStatusStyle(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-sm text-right font-black text-gray-950 tracking-tight">{order.total}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="4" className="px-8 py-20 text-center text-gray-400 font-medium italic">Data tidak ditemukan...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* === 5. SIDEBAR INFO (KOLOM KANAN) === */}
          <div className="space-y-6">
            {/* Banner Menu Terlaris */}
            <div className="bg-yellow-500 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-yellow-200 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-black text-2xl mb-1 italic">Best Seller ☕</h4>
                <p className="text-yellow-100 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Cappuccino Signature</p>
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black tracking-tighter">42 <small className="text-sm font-normal opacity-80 uppercase">Cups</small></span>
                  <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">🔥</div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 text-9xl opacity-10 font-black italic select-none">KAFFE</div>
            </div>

            {/* GOOGLE MAPS - PEKANBARU RUMBAI */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-5 px-1">
                <div>
                  <h4 className="font-black text-gray-950 text-xs uppercase tracking-widest leading-none">Cabang Rumbai</h4>
                  <p className="text-[10px] text-gray-400 mt-1 font-medium">Pekanbaru, Riau</p>
                </div>
                <span className="text-[9px] bg-green-50 text-green-600 px-3 py-1 rounded-full font-black uppercase tracking-widest border border-green-100">Buka</span>
              </div>
              <div className="w-full h-52 rounded-3xl overflow-hidden border-4 border-gray-50 shadow-inner">
                <iframe
                  title="Pekanbaru Rumbai Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.42398579051!2d101.4216893!3d0.5746765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac652a975765%3A0xc3c9441113b28b78!2sRumbai%2C%20Pekanbaru%20City%2C%20Riau!5e0!3m2!1sen!2sid!4v1715000000000!5m2!1sen!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
              <p className="mt-4 text-[10px] text-gray-400 text-center font-bold uppercase tracking-widest">Sekitar Stadion Rumbai</p>
            </div>

            {/* Log Aktivitas */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h4 className="font-black text-gray-900 mb-6 text-xs uppercase tracking-[0.2em]">Live Activity</h4>
              <div className="space-y-5">
                {[
                  { t: "10:20", d: "Restock Kopi Arabica", c: "bg-blue-500" },
                  { t: "09:45", d: "Update Harga Espresso", c: "bg-yellow-500" },
                  { t: "08:00", d: "Toko Dibuka", c: "bg-green-500" },
                ].map((act, i) => (
                  <div key={i} className="flex gap-4 items-center group cursor-default">
                    <div className="flex flex-col items-center">
                      <div className={`w-2 h-2 rounded-full ${act.c} mb-1`}></div>
                      <div className="w-[1px] h-4 bg-gray-100"></div>
                    </div>
                    <div className="text-[10px] font-black text-gray-400 w-10">{act.t}</div>
                    <div className="text-xs text-gray-700 font-bold group-hover:text-yellow-600 transition-colors">{act.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>  
  );
};

export default Dashboard;