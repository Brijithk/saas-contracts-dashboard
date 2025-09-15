import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Contracts", path: "/dashboard" },
    { name: "Insights", path: "/insights" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        SaaS Dashboard
      </div>
      <nav className="flex-1 p-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block p-2 rounded mb-1 hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
