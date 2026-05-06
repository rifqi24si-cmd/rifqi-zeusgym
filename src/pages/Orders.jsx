import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {
  return (
    <div>
      <PageHeader title="Orders" subtitle="Daftar semua pesanan" />
      <div className="bg-white rounded-xl shadow-sm p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">#</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Menu</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="py-3">{order.id}</td>
                <td className="py-3">{order.customer}</td>
                <td className="py-3">{order.menu}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === "Selesai" ? "bg-green-100 text-green-600" :
                    order.status === "Proses" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}