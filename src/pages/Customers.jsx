import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

export default function Customers() {
  return (
    <div>
      <PageHeader title="Members" subtitle="Daftar semua member gym" />
      <div className="bg-white rounded-xl shadow-sm p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b">
              <th className="pb-2">#</th>
              <th className="pb-2">Nama</th>
              <th className="pb-2">Email</th>
              <th className="pb-2">Paket</th>
              <th className="pb-2">Lama Member</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b last:border-0">
                <td className="py-3">{c.id}</td>
                <td className="py-3">{c.name}</td>
                <td className="py-3">{c.email}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    c.paket === "VIP" ? "bg-purple-100 text-purple-600" :
                    c.paket === "Premium" ? "bg-yellow-100 text-yellow-600" :
                    "bg-gray-100 text-gray-600"}`}>
                    {c.paket}
                  </span>
                </td>
                <td className="py-3">{c.lamaMember}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}