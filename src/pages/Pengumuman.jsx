import { useState } from "react";
import PageHeader from "../components/PageHeader";
import pengumuman from "../data/pengumuman";

export default function Pengumuman() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <PageHeader title="Pengumuman" subtitle="Info terbaru dari Zeus Gym" />
      <div className="grid grid-cols-1 gap-4">
        {pengumuman.map((p) => (
          <div key={p.id}
            className={`bg-white rounded-xl shadow-sm p-5 cursor-pointer border-l-4 ${
              p.penting ? "border-red-400" : "border-blue-300"}`}
            onClick={() => setSelected(selected === p.id ? null : p.id)}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {p.penting && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">Penting</span>}
                <h3 className="font-semibold text-gray-800">{p.judul}</h3>
              </div>
              <span className="text-xs text-gray-400">{p.tanggal}</span>
            </div>
            {selected === p.id && (
              <p className="mt-3 text-sm text-gray-600 border-t pt-3">{p.isi}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}