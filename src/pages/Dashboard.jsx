import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

const stats = [
  { label: "Total Member", value: "248", color: "text-blue-600", bg: "bg-blue-50", icon: "👥" },
  { label: "Kelas Aktif", value: "12", color: "text-green-600", bg: "bg-green-50", icon: "🏃" },
  { label: "Peralatan", value: "36", color: "text-yellow-600", bg: "bg-yellow-50", icon: "🏋️" },
  { label: "Pendapatan", value: "Rp 12jt", color: "text-purple-600", bg: "bg-purple-50", icon: "💰" },
];

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" subtitle="Selamat datang di Zeus Gym Dashboard" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-5">
            <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center text-xl mb-3`}>
              {stat.icon}
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Jadwal Kelas Terbaru</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">Member</th>
              <th className="pb-2">Kelas</th>
              <th className="pb-2">Trainer</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Biaya</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="py-3">{order.member}</td>
                <td className="py-3">{order.kelas}</td>
                <td className="py-3">{order.trainer}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === "Aktif" ? "bg-green-100 text-green-600" :
                    order.status === "Selesai" ? "bg-blue-100 text-blue-600" :
                    "bg-red-100 text-red-600"}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3">{order.biaya}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}