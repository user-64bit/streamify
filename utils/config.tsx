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

export const recentStreamData = {
  top_streamed_songs: [
    {
      rank: 1,
      song_id: "s001",
      title: "Brown Rang",
      artists: ["Yo Yo Honey Singh"],
      album: "International Villager",
      streams: "500M",
      duration: null,
      release_date: "2023-01-05",
      genre: "Unknown",
      cover_image_url: "/brown-rang-song.jpeg",
      artist_handle: "@YoYo",
    },
    {
      rank: 2,
      song_id: "s002",
      title: "Lover",
      artists: ["Taylor Swift"],
      album: "1989",
      streams: "400M",
      duration: null,
      release_date: "2023-01-04",
      genre: "Unknown",
      cover_image_url: "/lover-song.png",
      artist_handle: "@Taylor",
    },
    {
      rank: 3,
      song_id: "s003",
      title: "Perfect",
      artists: ["Ed Sheeran"],
      album: "Perfect",
      streams: "300M",
      duration: null,
      release_date: "2023-01-03",
      genre: "Unknown",
      cover_image_url: "/perfect-song.jpg",
      artist_handle: "@Ed",
    },
    {
      rank: 4,
      song_id: "s004",
      title: "Die With A Smile",
      artists: ["Lady Gaga", "Bruno Mars"],
      album: "Born This Way",
      streams: "200M",
      duration: null,
      release_date: "2023-01-02",
      genre: "Unknown",
      cover_image_url: "/die-with-a-smile-song.jpg",
      artist_handle: "@gaga",
    },
    {
      rank: 5,
      song_id: "s005",
      title: "Bad Guy",
      artists: ["Billie Eilish"],
      album: "Bad Guy",
      streams: "100M",
      duration: null,
      release_date: "2023-01-01",
      genre: "Unknown",
      cover_image_url: "/bad-guy-song.jpg",
      artist_handle: "@Billie",
    },
  ],
  last_updated: "2025-02-20T14:00:00Z",
};

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
