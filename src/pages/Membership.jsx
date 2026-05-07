import PageHeader from "../components/PageHeader";
import membership from "../data/membership";

export default function Membership() {
  return (
    <div>
      <PageHeader title="Membership" subtitle="Paket keanggotaan FitLife Gym" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {membership.map((m) => (
          <div key={m.id} className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-blue-400">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${m.warna}`}>
              {m.nama}
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-1">{m.harga}</p>
            <p className="text-sm text-gray-400 mb-4">{m.aktif} member aktif</p>
            <hr className="mb-4" />
            <ul className="space-y-2">
              {m.fasilitas.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}