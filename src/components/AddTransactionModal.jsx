import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function AddTransactionModal({ isOpen, setIsOpen }) {
  const { transactions, setTransactions } = useApp();

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const handleSubmit = () => {
    if (!form.date || !form.category || !form.amount) return;

    setTransactions([
      ...transactions,
      { ...form, amount: Number(form.amount) },
    ]);

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-80 space-y-3">
        <h2 className="text-lg font-bold">Add Transaction</h2>

        <input
          type="date"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Amount"
          type="number"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <select
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-mossGreen text-white w-full py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}