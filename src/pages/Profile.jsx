import PageHeader from "../components/PageHeader";

export default function Profile() {
  return (
    <div>
      <PageHeader title="Profil Gym" subtitle="Informasi FitLife Gym" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Informasi Gym</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Nama</span>
              <span className="font-medium">FitLife Gym</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Alamat</span>
              <span className="font-medium">Jl. Fitness No. 1, Pekanbaru</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Telepon</span>
              <span className="font-medium">0812-3456-7890</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-400">Email</span>
              <span className="font-medium">fitlife@gym.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Jam Buka</span>
              <span className="font-medium">05:00 - 22:00</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Fasilitas</h2>
          <div className="grid grid-cols-2 gap-3">
            {["Treadmill", "Barbells", "Dumbbells", "Kolam Renang", "Sauna", "Locker Room", "Cafe", "Parkir Luas"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-gray-600">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}