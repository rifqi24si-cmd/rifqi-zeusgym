import { useState } from "react";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import orders from "../data/orders";
import customers from "../data/customers";

export default function Statistik() {
  const [periode, setPeriode] = useState("Mingguan");

  const totalAktif = orders.filter(o => o.status === "Aktif").length;
  const totalSelesai = orders.filter(o => o.status === "Selesai").length;
  const totalBatal = orders.filter(o => o.status === "Batal").length;
  const totalVIP = customers.filter(c => c.paket === "VIP").length;
  const totalPremium = customers.filter(c => c.paket === "Premium").length;
  const totalBasic = customers.filter(c => c.paket === "Basic").length;

  return (
    <div>
      <PageHeader title="Statistik" subtitle="Ringkasan data FitLife Gym" />

      {/* Periode Filter */}
      <div className="flex gap-2 mb-6">
        {["Harian", "Mingguan", "Bulanan"].map(p => (
          <button key={p} onClick={() => setPeriode(p)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              periode === p ? "bg-blue-500 text-white" : "bg-white text-gray-500 hover:bg-gray-100"}`}>
            {p}
          </button>
        ))}
      </div>

      {/* Stats Kelas */}
      <h2 className="text-md font-semibold text-gray-600 mb-3">Status Kelas</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard icon="✅" label="Kelas Aktif" value={totalAktif} color="text-green-600" bg="bg-green-50" />
        <StatCard icon="🏁" label="Kelas Selesai" value={totalSelesai} color="text-blue-600" bg="bg-blue-50" />
        <StatCard icon="❌" label="Kelas Batal" value={totalBatal} color="text-red-600" bg="bg-red-50" />
      </div>

      {/* Stats Member */}
      <h2 className="text-md font-semibold text-gray-600 mb-3">Paket Member</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard icon="👑" label="Member VIP" value={totalVIP} color="text-purple-600" bg="bg-purple-50" />
        <StatCard icon="⭐" label="Member Premium" value={totalPremium} color="text-yellow-600" bg="bg-yellow-50" />
        <StatCard icon="👤" label="Member Basic" value={totalBasic} color="text-gray-600" bg="bg-gray-50" />
      </div>

      {/* Tabel Ringkasan */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ringkasan Kelas per Trainer</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">Trainer</th>
              <th className="pb-2">Total Kelas</th>
              <th className="pb-2">Aktif</th>
              <th className="pb-2">Selesai</th>
              <th className="pb-2">Batal</th>
            </tr>
          </thead>
          <tbody>
            {["Andi", "Rina", "Doni", "Sari", "Bima"].map(trainer => {
              const kelasTrainer = orders.filter(o => o.trainer === trainer);
              return (
                <tr key={trainer} className="border-b last:border-0">
                  <td className="py-3 font-medium">{trainer}</td>
                  <td className="py-3">{kelasTrainer.length}</td>
                  <td className="py-3 text-green-600">{kelasTrainer.filter(o => o.status === "Aktif").length}</td>
                  <td className="py-3 text-blue-600">{kelasTrainer.filter(o => o.status === "Selesai").length}</td>
                  <td className="py-3 text-red-600">{kelasTrainer.filter(o => o.status === "Batal").length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}