interface FiltersProps {
  onFilterChange?: (status: string, risk: string) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  return (
    <div className="flex space-x-4 mb-4">
      <select
        className="border p-2 rounded"
        onChange={(e) => onFilterChange?.(e.target.value, "")}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Expired">Expired</option>
        <option value="Renewal Due">Renewal Due</option>
      </select>

      <select
        className="border p-2 rounded"
        onChange={(e) => onFilterChange?.("", e.target.value)}
      >
        <option value="">All Risk</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
}
