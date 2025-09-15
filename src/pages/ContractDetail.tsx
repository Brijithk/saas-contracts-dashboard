// src/pages/ContractDetail.tsx
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Badge from "../components/UI/Badge";
import { JSX } from "react";
interface Clause { title: string; summary: string; confidence: number; }
interface Insight { risk: string; message: string; }
interface Evidence { source: string; snippet: string; relevance: number; }

interface ContractDetailType {
  name: string;
  parties: string;
  start: string;
  expiry: string;
  status: string;
  risk: string;
  clauses: Clause[];
  insights: Insight[];
  evidence: Evidence[];
}

export default function ContractDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { data: contract, loading, error } = useFetch<ContractDetailType>(
    `/contracts/${id}.json`
  );

  if (loading) return <div className="p-6">Loading...</div>;
  if (error || !contract) return <div className="p-6">Error loading contract</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{contract.name}</h1>
      <p className="mb-2">Parties: {contract.parties}</p>
      <p className="mb-2">Status: <Badge text={contract.status} /></p>
      <p className="mb-6">Risk: <Badge text={contract.risk} /></p>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Clauses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {contract.clauses.map((c, idx) => (
            <div key={idx} className="p-3 border rounded shadow-sm">
              <h3 className="font-semibold">{c.title}</h3>
              <p>{c.summary}</p>
              <p>Confidence: {(c.confidence * 100).toFixed(0)}%</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">AI Insights</h2>
        <ul className="list-disc pl-5">
          {contract.insights.map((i, idx) => (
            <li key={idx}>
              <Badge text={i.risk} /> {i.message}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Evidence</h2>
        <ul className="list-disc pl-5">
          {contract.evidence.map((e, idx) => (
            <li key={idx}>
              {e.source}: {e.snippet} (Relevance: {(e.relevance * 100).toFixed(0)}%)
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
