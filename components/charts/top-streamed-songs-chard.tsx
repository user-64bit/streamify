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
import { TopSongsChartData } from "@/utils/config";

export function TopSongsChart() {
  return (
    <Card className="mt-14 max-h-[450px]">
      <h1 className="text-lg font-bold text-white mb-4 text-center">
        Top 5 Streamed Songs
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={TopSongsChartData}>
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
