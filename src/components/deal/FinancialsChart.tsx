"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface FinancialYear {
  year: string;
  revenue: number | null;
  cogs: number | null;
  grossProfit: number | null;
  sga: number | null;
  operatingIncome: number | null;
  ebitda: number | null;
}

interface Props {
  data: FinancialYear[];
  unit?: string;
  currency?: string;
  lang?: "ko" | "en";
}

const CHART_LABELS = {
  ko: { revenue: "매출액", ebitda: "EBITDA", operatingIncome: "영업이익" },
  en: { revenue: "Revenue", ebitda: "EBITDA", operatingIncome: "Op. Income" },
} as const;

const CustomTooltip = ({
  active,
  payload,
  label,
  unit,
  currency,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string; dataKey?: string }[];
  label?: string;
  unit?: string;
  currency?: string;
}) => {
  if (!active || !payload?.length) return null;
  // Force display order: revenue → ebitda → operatingIncome
  const ORDER = ["revenue", "ebitda", "operatingIncome"];
  const sorted = [...payload].sort(
    (a, b) => ORDER.indexOf(a.dataKey ?? "") - ORDER.indexOf(b.dataKey ?? "")
  );
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-3 text-xs">
      <p className="font-semibold text-gray-700 dark:text-gray-200 mb-2">{label}</p>
      {sorted.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="text-gray-500 dark:text-gray-400 w-24">{entry.name}</span>
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            {currency} {Math.round(entry.value).toLocaleString("en-US")}{unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function FinancialsChart({ data, unit = "mn", currency = "USD", lang = "ko" }: Props) {
  const labels = CHART_LABELS[lang];

  const chartData = data.map((d) => ({
    year: d.year,
    revenue: d.revenue,
    ebitda: d.ebitda,
    operatingIncome: d.operatingIncome,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: -8, bottom: 0 }} barCategoryGap="28%" barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 11, fill: "#8b95a1" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#8b95a1" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => Math.round(v).toLocaleString("en-US")}
          />
          <Tooltip
            content={<CustomTooltip unit={unit} currency={currency} />}
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
          />
          <Legend
            wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
            content={() => (
              <div style={{ display: "flex", justifyContent: "center", gap: 16, fontSize: 12, paddingTop: 12 }}>
                {[
                  { label: labels.revenue,         color: "#3182f6" },
                  { label: labels.ebitda,          color: "#10b981" },
                  { label: labels.operatingIncome, color: "#f59e0b" },
                ].map(({ label, color }) => (
                  <span key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill={color} /></svg>
                    {label}
                  </span>
                ))}
              </div>
            )}
          />
          <Bar dataKey="revenue"         name={labels.revenue}         fill="#3182f6" opacity={0.85} radius={[3, 3, 0, 0]} />
          <Bar dataKey="ebitda"          name={labels.ebitda}          fill="#10b981" opacity={0.85} radius={[3, 3, 0, 0]} />
          <Bar dataKey="operatingIncome" name={labels.operatingIncome} fill="#f59e0b" opacity={0.85} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
