interface BadgeProps {
  text: string;
  color?: "red" | "green" | "yellow" | "blue";
}

export default function Badge({ text, color = "blue" }: BadgeProps) {
  const colors: Record<string, string> = {
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    blue: "bg-blue-100 text-blue-800",
  };

  return <span className={`px-2 py-1 rounded text-sm font-semibold ${colors[color]}`}>{text}</span>;
}
