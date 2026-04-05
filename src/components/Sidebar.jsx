import { useState } from "react";
import { useApp } from "../context/AppContext";
import AddTransactionModal from "./AddTransactionModal";

export default function Sidebar({ setPage }) {
  const { role } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 bg-darkGreen text-white flex flex-col justify-between p-6">
      
      
      <div>
        <h1 className="text-2xl font-bold mb-8">Aura</h1>

        <div className="space-y-3 text-sm">
          <button onClick={() => setPage("dashboard")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-mossGreen">
            Dashboard
          </button>

          <button onClick={() => setPage("transactions")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-mossGreen">
            Transactions
          </button>

          <button onClick={() => setPage("insights")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-mossGreen">
            Insights
          </button>
        </div>
      </div>

      
      {role === "admin" && (
        <button
          onClick={() => setOpen(true)}
          className="bg-mossGreen text-white py-2 rounded-lg"
        >
          + Add Transaction
        </button>
      )}

      <AddTransactionModal isOpen={open} setIsOpen={setOpen} />
    </div>
  );
}