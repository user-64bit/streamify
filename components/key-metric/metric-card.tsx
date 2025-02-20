/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Card from "../reusable/card";

export default function MetricsCard({
  title,
  value,
  description,
  className,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  className?: string;
  icon?: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <Card
        className={`relative p-6 rounded-lg hover:opacity-90 transition-all duration-200 ease-in-out shadow-lg bg-white text-gray-800 ${className}`}
      >
        <div className="flex flex-col text-start px-2 space-y-2 text-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">{title}</h1>
            {icon}
          </div>
          <h1 className="text-4xl font-bold">{value}</h1>
          <p className="text-xs">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
