"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import Card from "../reusable/card";

const data = [
  { month: "Jan", totalUsers: 1000000, activeUsers: 750000 },
  { month: "Feb", totalUsers: 1100000, activeUsers: 800000 },
  { month: "Mar", totalUsers: 1200000, activeUsers: 850000 },
  { month: "Apr", totalUsers: 1300000, activeUsers: 900000 },
  { month: "May", totalUsers: 1400000, activeUsers: 950000 },
  { month: "Jun", totalUsers: 1500000, activeUsers: 1000000 },
  { month: "Jul", totalUsers: 1600000, activeUsers: 1100000 },
  { month: "Aug", totalUsers: 1700000, activeUsers: 1200000 },
  { month: "Sep", totalUsers: 1800000, activeUsers: 1300000 },
  { month: "Oct", totalUsers: 1900000, activeUsers: 1400000 },
  { month: "Nov", totalUsers: 2000000, activeUsers: 1500000 },
  { month: "Dec", totalUsers: 2100000, activeUsers: 1600000 },
];

export default function UserGrowthChart() {
  return (
    <Card className="mt-14 h-[400px]">
      <h1 className="text-lg font-bold text-white mb-4 text-center">
        User Growth Chart
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
