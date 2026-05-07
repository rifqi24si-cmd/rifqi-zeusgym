import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import jadwal from "../data/jadwal";

export default function Jadwal() {
  return (
    <div>
      <PageHeader title="Jadwal Kelas" subtitle="Jadwal kelas mingguan FitLife" />
      <Table headers={["#", "Hari", "Kelas", "Waktu", "Trainer", "Kuota"]}>
        {jadwal.map((j) => (
          <tr key={j.id} className="border-b last:border-0">
            <td className="py-3 pr-4">{j.id}</td>
            <td className="py-3 pr-4 font-medium">{j.hari}</td>
            <td className="py-3 pr-4">{j.kelas}</td>
            <td className="py-3 pr-4">{j.waktu}</td>
            <td className="py-3 pr-4">{j.trainer}</td>
            <td className="py-3 pr-4">
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${j.terisi === j.kuota ? "bg-red-400" : "bg-green-400"}`}
                    style={{ width: `${(j.terisi / j.kuota) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{j.terisi}/{j.kuota}</span>
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}