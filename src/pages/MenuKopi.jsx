import React from 'react';

const MejaKopi = () => {
  const tables = [
    { id: 1, name: "Meja 01", status: "Terisi", type: "Indoor" },
    { id: 2, name: "Meja 02", status: "Kosong", type: "Outdoor" },
    { id: 3, name: "Meja 03", status: "Terisi", type: "Indoor" },
    { id: 4, name: "Meja 04", status: "Kosong", type: "Indoor" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-black text-gray-900 mb-6 uppercase italic">Manajemen Meja</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tables.map((table) => (
          <div key={table.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center">
            <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl ${table.status === 'Terisi' ? 'bg-orange-100' : 'bg-green-100'}`}>
              🪑
            </div>
            <h3 className="font-bold text-lg">{table.name}</h3>
            <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">{table.type}</p>
            <span className={`mt-4 px-4 py-1 rounded-full text-[10px] font-black uppercase ${table.status === 'Terisi' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
              {table.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MejaKopi;