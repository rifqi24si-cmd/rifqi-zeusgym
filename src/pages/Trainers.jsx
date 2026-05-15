import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import trainers from "../data/trainers";

export default function Trainers() {
  return (
    <div>
      <PageHeader title="Trainers" subtitle="Daftar semua trainer Zeus Gym" />
      <Table headers={["#", "Nama", "Spesialisasi", "Pengalaman", "Rating"]}>
        {trainers.map((t) => (
          <tr key={t.id} className="border-b last:border-0">
            <td className="py-3 pr-4">{t.id}</td>
            <td className="py-3 pr-4 font-medium">{t.name}</td>
            <td className="py-3 pr-4">{t.spesialisasi}</td>
            <td className="py-3 pr-4">{t.pengalaman}</td>
            <td className="py-3 pr-4">
              <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-medium">
                ⭐ {t.rating}
              </span>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}