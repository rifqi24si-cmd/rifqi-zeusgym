import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {
  return (
    <div>
      <PageHeader title="Jadwal Kelas" subtitle="Daftar semua jadwal kelas gym" />
      <div className="bg-white rounded-xl shadow-sm p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">#</th>
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
                <td className="py-3">{order.id}</td>
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