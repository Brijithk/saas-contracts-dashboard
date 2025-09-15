import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!login(username, password)) {
      setError("Invalid password. Use test123");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Login Card */}
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Welcome Back</h1>

        {error && (
          <div className="text-red-400 text-center font-medium mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 border rounded-xl border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm bg-gray-700 text-white"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-xl border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm bg-gray-700 text-white"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-300 text-center mt-4">
          Password must be <strong>test123</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
