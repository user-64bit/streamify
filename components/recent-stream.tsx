"use client";

import { recentStreamData } from "@/utils/config";
import Card from "./reusable/card";
import DataTable from "./reusable/data-table";
import { motion } from "framer-motion";

export default function RecentStream() {
  const lastUpdatedOn = new Date(recentStreamData.last_updated).getDay();
  const now = new Date().getDay();
  const diffInDays = Math.ceil((now - lastUpdatedOn) / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full space-y-4"
    >
      <Card className="mt-14">
        <div className="flex justify-between items-center">
          <div></div>
          <h1 className="text-lg font-bold text-white pl-10">Recent Streams</h1>
          <h5 className="text-sm text-muted-foreground">
            Last updated
            <br />
            {diffInDays} day(s) ago
          </h5>
        </div>
        <DataTable data={recentStreamData} />
      </Card>
    </motion.div>
  );
}
