"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../reusable/card";

const data = [
  {
    name: "Midnight Rain",
    streams: 1200000,
  },
  {
    name: "As It Was",
    streams: 982000,
  },
  {
    name: "Anti-Hero",
    streams: 875000,
  },
  {
    name: "Unholy",
    streams: 754000,
  },
  {
    name: "Rich Flex",
    streams: 698000,
  },
];

export function TopSongsChart() {
  return (
    <Card className="mt-14 h-[400px]">
      <h1 className="text-lg font-bold text-white mb-4 text-center">
        Top 5 Streamed Songs
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
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
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="streams" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
