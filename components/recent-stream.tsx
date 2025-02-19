import Card from "./reusable/card";
import DataTable from "./reusable/data-table";

const dummyData = [
  ["Song Name", "Artist", "Date Streamed", "Stream Count", "User ID"],
  ["Bad Guy", "Billie Eilish", "2023-01-01", "100", "@Billie"],
  ["SkyFall", "Adele", "2023-01-02", "200", "@Adele"],
  ["Perfect", "Ed Sheeran", "2023-01-03", "300", "@Ed"],
  ["Lover", "Taylor Swift", "2023-01-04", "400", "@Taylor"],
  ["Brown Rang", "Yo Yo Honey Singh", "2023-01-05", "500", "@YoYo"],
];
export default function RecentStream() {
  return (
    <Card className="mt-14">
      <h1 className="text-lg font-bold text-white mb-4 text-center">
        Recent Streams
      </h1>
      <DataTable data={dummyData} />
    </Card>
  );
}
