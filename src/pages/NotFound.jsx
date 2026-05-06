export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-8xl font-bold text-yellow-500">404</h1>
      <p className="text-xl text-gray-600 mt-4">Halaman tidak ditemukan</p>
      <a href="/" className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
        Kembali ke Dashboard
      </a>
    </div>
  );
}