import { useApp } from "../context/AppContext";
import { exportJSON } from "../utils/export";
import {useState} from "react";
import { motion } from "framer-motion";

export default function Transactions() {
  const { transactions, search, setSearch, role } = useApp();

  const [sort, setSort] = useState("latest");
  const [filterType, setFilterType] = useState("all");
 
  const filtered = transactions
  .filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  )
  .filter(t =>
    filterType === "all" ? true : t.type === filterType
  );
  const sorted = [...filtered].sort((a, b) => {
  if (sort === "high") return b.amount - a.amount;
  if (sort === "low") return a.amount - b.amount;
  return new Date(b.date) - new Date(a.date);
});

const { setTransactions } = useApp();

const deleteTx = (index) => {
  setTransactions(transactions.filter((_, i) => i !== index));
};

  return (
    <motion.div
  className="bg-white rounded-2xl shadow-md overflow-hidden p-6 space-y-4"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
>
      <input
        placeholder="Search..."
        className="p-2 border rounded mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  onChange={(e) => setSort(e.target.value)}
  className="border p-2 rounded"
>
  <option value="latest">Latest</option>
  <option value="high">High Amount</option>
  <option value="low">Low Amount</option>
</select>
      <button onClick={() => exportJSON(transactions)} className="bg-midnightGreen text-white px-4 py-2 rounded">
        Export JSON
      </button>

<motion.div className="bg-white rounded-2xl shadow-md overflow-hidden">
    <select
  onChange={(e) => setFilterType(e.target.value)}
  className="border p-2 rounded"
>
  <option value="all">All</option>
  <option value="income">Income</option>
  <option value="expense">Expense</option>
</select>
      <table className="w-full bg-white rounded-xl shadow divide-y">
        <thead className="bg-mossGreen text-white text-sm">
          <tr className="hover:bg-gray-50 transition">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
            {sorted.length === 0 && (
  <tr>
    <td colSpan="4" className="p-4 text-center">
      No transactions found
    </td>
  </tr>
)}
          {sorted.map((t, i) => (
            <tr key={i} className=" hover:bg-gray-50 transition text-center border-b">
              <td>{t.date}</td>
              <td>
                <span className="px-3 py-1  bg-beige rounded-lg text-xs">
                {t.category}
                </span></td>
              <td>${t.amount}</td>
              <td>{t.type}</td>

{role === "admin" && (
  <td>
    <button
      onClick={() => deleteTx(i)}
      className="text-red-500"
    >
      Delete
    </button>
  </td>
)}
            </tr>
          ))}
        </tbody>
      </table>
      </motion.div>
    </motion.div>
  );
}