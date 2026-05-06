import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

export default function Customers() {
  return (
    <div>
      <PageHeader title="Customers" subtitle="Daftar semua pelanggan" />
      <div className="bg-white rounded-xl shadow-sm p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">#</th>
              <th className="pb-2">Nama</th>
              <th className="pb-2">Email</th>
              <th className="pb-2">Total Order</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b last:border-0">
                <td className="py-3">{c.id}</td>
                <td className="py-3">{c.name}</td>
                <td className="py-3">{c.email}</td>
                <td className="py-3">{c.totalOrders} pesanan</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}