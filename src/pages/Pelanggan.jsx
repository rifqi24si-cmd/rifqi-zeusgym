import React from 'react';

const Pelanggan = () => {
  const dataMember = [
    { id: 1, nama: "Rifqi Al Shirazi", level: "Gold", poin: 1200, email: "rifqi@kaffe.com" },
    { id: 2, nama: "Budi Santoso", level: "Silver", poin: 450, email: "budi@mail.com" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-black text-gray-900 mb-6 uppercase italic">Database Pelanggan</h1>
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50">
            <tr className="text-[10px] uppercase text-gray-400 font-black tracking-widest">
              <th className="px-8 py-5">Nama Pelanggan</th>
              <th className="px-8 py-5">Level</th>
              <th className="px-8 py-5">Poin</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {dataMember.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50/50 transition">
                <td className="px-8 py-5 font-bold text-gray-800">{m.nama}</td>
                <td className="px-8 py-5">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[9px] font-black uppercase">
                    {m.level}
                  </span>
                </td>
                <td className="px-8 py-5 font-bold text-blue-600">{m.poin} Pts</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pelanggan;