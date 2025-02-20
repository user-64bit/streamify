"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Card from "../reusable/card";
import { RevenueDistributionChartData } from "@/utils/config";
import { motion } from "framer-motion";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function RevenueDistributionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="mt-14 h-[400px]">
        <h1 className="text-lg font-bold text-white mb-4 text-center">
          Revenue Distribution
        </h1>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={RevenueDistributionChartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={130}
              dataKey="value"
            >
              {RevenueDistributionChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}
