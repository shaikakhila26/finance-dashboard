import { useApp } from "../context/AppContext";
import { LineChart, Line, PieChart, Pie, ResponsiveContainer } from "recharts";
import {motion } from "framer-motion";

export default function Dashboard() {
  const { transactions } = useApp();

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expenses;

  const categoryData = Object.values(
  transactions.reduce((acc, t) => {
    if (t.type === "expense") {
      acc[t.category] = acc[t.category] || {
        name: t.category,
        value: 0,
      };
      acc[t.category].value += t.amount;
    }
    return acc;
  }, {})
);

  return (
    <motion.div className="p-6 space-y-6"  initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Balance" value={balance} />
        <Card title="Income" value={income} />
        <Card title="Expenses" value={expenses} />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">Balance Overview</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={transactions}>
              <Line dataKey="amount" stroke="#105666" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold mb-3">Spending</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-2 hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-darkGreen mt-2">
        ${value}
      </h2>
    </div>
  );
}