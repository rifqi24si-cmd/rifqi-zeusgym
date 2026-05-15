import { Link, useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FiArrowLeft, FiMail, FiPhone, FiCalendar } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import customers from "../data/customers";
import orders from "../data/orders";
import absensi from "../data/absensi";

const PIE_COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#eab308", "#f97316"];

function paketBadgeClass(paket) {
  if (paket === "VIP") return "bg-purple-100 text-purple-600";
  if (paket === "Premium") return "bg-yellow-100 text-yellow-600";
  return "bg-gray-100 text-gray-600";
}

export default function CustomerDetail() {
  const { id } = useParams();
  const member = customers.find((c) => c.id === Number(id));

  if (!member) {
    return (
      <div className="text-center py-16">
        <p className="text-6xl font-bold text-blue-500 mb-4">404</p>
        <p className="text-gray-600 mb-6">Member tidak ditemukan</p>
        <Link
          to="/customers"
          className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <FiArrowLeft /> Kembali ke Daftar Member
        </Link>
      </div>
    );
  }

  const memberOrders = orders.filter((o) => o.member === member.name);
  const memberAbsensi = absensi.filter((a) => a.member === member.name);
  const totalHadir = member.kehadiranBulanan.reduce((sum, m) => sum + m.hadir, 0);
  const totalKelas = memberOrders.length;
  const kelasAktif = memberOrders.filter((o) => o.status === "Aktif").length;

  return (
    <div>
      <Link
        to="/customers"
        className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 mb-4 transition"
      >
        <FiArrowLeft /> Kembali ke Members
      </Link>

      <PageHeader
        title={member.name}
        subtitle={`Detail profil dan aktivitas member · ID #${member.id}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
              {member.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${paketBadgeClass(member.paket)}`}>
                {member.paket}
              </span>
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FiMail className="text-gray-400" /> {member.email}
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-gray-400" /> {member.phone}
            </p>
            <p className="flex items-center gap-2">
              <FiCalendar className="text-gray-400" /> Bergabung {member.joinDate}
            </p>
            <p className="text-gray-500">
              Lama member: <span className="font-medium text-gray-700">{member.lamaMember}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard icon="📅" label="Total Kehadiran" value={totalHadir} color="text-green-600" bg="bg-green-50" />
          <StatCard icon="🏃" label="Total Kelas" value={totalKelas} color="text-blue-600" bg="bg-blue-50" />
          <StatCard icon="✅" label="Kelas Aktif" value={kelasAktif} color="text-purple-600" bg="bg-purple-50" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Kehadiran Bulanan</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={member.kehadiranBulanan}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="bulan" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="hadir" name="Hadir" fill="#22c55e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tidak" name="Tidak Hadir" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Distribusi Kelas</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={member.distribusiKelas}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {member.distribusiKelas.map((_, index) => (
                  <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Riwayat Kelas</h3>
          {memberOrders.length === 0 ? (
            <p className="text-sm text-gray-400">Belum ada riwayat kelas.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b">
                  <th className="pb-2">Kelas</th>
                  <th className="pb-2">Trainer</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Biaya</th>
                </tr>
              </thead>
              <tbody>
                {memberOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-3">{order.kelas}</td>
                    <td className="py-3">{order.trainer}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Aktif"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Selesai"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">{order.biaya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Riwayat Absensi</h3>
          {memberAbsensi.length === 0 ? (
            <p className="text-sm text-gray-400">Belum ada data absensi.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-400 border-b">
                  <th className="pb-2">Tanggal</th>
                  <th className="pb-2">Kelas</th>
                  <th className="pb-2">Waktu</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {memberAbsensi.map((row) => (
                  <tr key={row.id} className="border-b last:border-0">
                    <td className="py-3">{row.tanggal}</td>
                    <td className="py-3">{row.kelas}</td>
                    <td className="py-3">{row.waktu}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === "Hadir"
                            ? "bg-green-100 text-green-600"
                            : row.status === "Izin"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
