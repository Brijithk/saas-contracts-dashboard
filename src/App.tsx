import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContractDetail from "./pages/ContractDetail";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/contracts/:id"
        element={
          <Layout>
            <ContractDetail />
          </Layout>
        }
      />
    </Routes>
  );
}
