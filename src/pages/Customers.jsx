import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

function paketBadgeClass(paket) {
  if (paket === "VIP") return "bg-purple-100 text-purple-600";
  if (paket === "Premium") return "bg-yellow-100 text-yellow-600";
  return "bg-gray-100 text-gray-600";
}

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
              <th className="pb-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b last:border-0 hover:bg-gray-50 transition">
                <td className="py-3">{c.id}</td>
                <td className="py-3 font-medium text-gray-800">{c.name}</td>
                <td className="py-3">{c.email}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${paketBadgeClass(c.paket)}`}>
                    {c.paket}
                  </span>
                </td>
                <td className="py-3">{c.lamaMember}</td>
                <td className="py-3 text-right">
                  <Link
                    to={`/customers/${c.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                  >
                    <FiEye /> Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
