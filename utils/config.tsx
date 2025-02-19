import { AudioLines, DollarSign, UserCheck, Users } from "lucide-react";

export const metricsCardData = [
  {
    title: "Total Users",
    value: "100",
    description: "10% users in last month",
    icon: <Users />,
  },
  {
    title: "Ative Users",
    value: "100",
    description: "10% users in last month",
    icon: <UserCheck className="text-green-400" />,
  },
  {
    title: "Total Streams",
    value: "10B",
    description: "10% users in last month",
    icon: <AudioLines />,
  },
  {
    title: "Revenue",
    value: "100M",
    description: "10% users in last month",
    icon: <DollarSign />,
  },
];

export const recentStreamData = [
  ["Song Name", "Artist", "Date Streamed", "Stream Count", "User ID"],
  ["Bad Guy", "Billie Eilish", "2023-01-01", "100", "@Billie"],
  ["SkyFall", "Adele", "2023-01-02", "200", "@Adele"],
  ["Perfect", "Ed Sheeran", "2023-01-03", "300", "@Ed"],
  ["Lover", "Taylor Swift", "2023-01-04", "400", "@Taylor"],
  ["Brown Rang", "Yo Yo Honey Singh", "2023-01-05", "500", "@YoYo"],
];

export const TopSongsChartData = [
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

export const UserGrowthChartData = [
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

export const RevenueDistributionChartData = [
  { name: "Subscriptions", value: 65 },
  { name: "Advertisements", value: 25 },
  { name: "Other", value: 10 },
];
