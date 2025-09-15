export default function ContractsTable() {
  const contracts = [
    { id: 1, name: "Contract A", status: "Active" },
    { id: 2, name: "Contract B", status: "Expired" },
  ];

  return (
    <table className="min-w-full bg-white shadow rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-4 py-2">Name</th>
          <th className="text-left px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((c) => (
          <tr key={c.id} className="border-b">
            <td className="px-4 py-2">{c.name}</td>
            <td className="px-4 py-2">{c.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
