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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function RevenueDistributionChart() {
  return (
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
  );
}
