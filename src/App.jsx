import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
  <div className="flex h-screen bg-beige">
    {/* SIDEBAR */}
    <Sidebar setPage={setPage} />

    {/* MAIN CONTENT */}
    <div className="flex-1 flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <div className="px-6 py-4 border-b bg-white">
        <Header />
      </div>

      {/* PAGE CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <Transactions />}
        {page === "insights" && <Insights />}
      </div>

    </div>
  </div>
);
}