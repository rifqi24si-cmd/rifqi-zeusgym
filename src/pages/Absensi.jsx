import { useState } from "react";
import PageHeader from "../components/PageHeader";
import absensi from "../data/absensi";

const statusList = ["Semua", "Hadir", "Tidak Hadir", "Izin"];

export default function Absensi() {
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = absensi.filter(a => {
    const matchStatus = filter === "Semua" || a.status === filter;
    const matchSearch = a.member.toLowerCase().includes(search.toLowerCase()) ||
      a.kelas.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalHadir = absensi.filter(a => a.status === "Hadir").length;
  const totalTidakHadir = absensi.filter(a => a.status === "Tidak Hadir").length;
  const totalIzin = absensi.filter(a => a.status === "Izin").length;

  return (
    <div>
      <PageHeader title="Absensi" subtitle="Data kehadiran member hari ini" />

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-600">{totalHadir}</p>
          <p className="text-sm text-gray-500">Hadir</p>
        </div>
        <div className="bg-red-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-600">{totalTidakHadir}</p>
          <p className="text-sm text-gray-500">Tidak Hadir</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">{totalIzin}</p>
          <p className="text-sm text-gray-500">Izin</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {statusList.map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === s ? "bg-blue-500 text-white" : "bg-white text-gray-500 hover:bg-gray-100"}`}>
              {s}
            </button>
          ))}
        </div>
        <input type="text" placeholder="Cari member..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">#</th>
              <th className="pb-2">Member</th>
              <th className="pb-2">Kelas</th>
              <th className="pb-2">Waktu</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map((a) => (
              <tr key={a.id} className="border-b last:border-0">
                <td className="py-3">{a.id}</td>
                <td className="py-3 font-medium">{a.member}</td>
                <td className="py-3">{a.kelas}</td>
                <td className="py-3">{a.waktu}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    a.status === "Hadir" ? "bg-green-100 text-green-600" :
                    a.status === "Izin" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"}`}>
                    {a.status}
                  </span>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="5" className="py-6 text-center text-gray-400">Data tidak ditemukan</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}