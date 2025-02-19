import { recentStreamData } from "@/utils/config";
import Card from "./reusable/card";
import DataTable from "./reusable/data-table";

export default function RecentStream() {
  return (
    <Card className="mt-14">
      <h1 className="text-lg font-bold text-white mb-4 text-center">
        Recent Streams
      </h1>
      <DataTable data={recentStreamData} />
    </Card>
  );
}
