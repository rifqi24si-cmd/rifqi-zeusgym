export default function Table({ headers, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400 border-b">
            {headers.map((h) => (
              <th key={h} className="pb-2 pr-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}