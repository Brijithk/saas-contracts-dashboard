import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Contract } from "../types";

export default function Dashboard() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/contracts.json")
      .then(res => res.json())
      .then((data) => setContracts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6">Error: {error}</div>;
  if (!contracts.length) return <div className="p-6">No contracts yet</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contracts Dashboard</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Parties</th>
            <th className="border p-2">Expiry</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Risk</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(c => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="border p-2"><Link className="text-blue-600" to={`/contracts/${c.id}`}>{c.name}</Link></td>
              <td className="border p-2">{c.parties}</td>
              <td className="border p-2">{c.expiry}</td>
              <td className="border p-2">{c.status}</td>
              <td className="border p-2">{c.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
