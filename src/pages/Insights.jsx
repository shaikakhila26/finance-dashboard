import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";

export default function Insights() {
  const { transactions } = useApp();

  const categories = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categories[t.category] =
        (categories[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categories).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const monthly = {};

transactions.forEach((t) => {
  const month = t.date.slice(0, 7);
  monthly[month] = (monthly[month] || 0) + t.amount;
});

const bestMonth = Object.entries(monthly).sort(
  (a, b) => b[1] - a[1]
)[0];

  return (
    <motion.div className="bg-white p-6 rounded-2xl shadow-md space-y-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-white p-4 rounded-xl shadow space-y-2">
        <h2 className="text-lg font-semibold text-darkGreen mb-2">Insights</h2>

        {highest ? (
          <>
            <p>Top Category: {highest[0]}</p>
            <p>Spent: ${highest[1]}</p>

            <p className="mt-3 font-semibold">Best Month</p>
<p>{bestMonth?.[0]}</p>
<p>${bestMonth?.[1]}</p>
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </motion.div>
  );
}