"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../reusable/card";
import { UserGrowthChartData } from "@/utils/config";

export default function UserGrowthChart() {
  return (
    <Card className="mt-14 h-[400px]">
      <h1 className="text-lg font-bold text-white mb-4 text-center">
        User Growth Chart
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={UserGrowthChartData}>
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value / 1000000}M`}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#adfa1d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#00ff00"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
