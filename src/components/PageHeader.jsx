export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-400">Home &gt; {title}</p>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
  );
}