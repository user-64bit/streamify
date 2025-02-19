import { RevenueDistributionChart } from "@/components/charts/revenue-distribution-chart";
import { TopSongsChart } from "@/components/charts/top-streamed-songs-chard";
import UserGrowthChart from "@/components/charts/user-growth-chart";
import MetricsCard from "@/components/key-metric/metric-card";
import RecentStream from "@/components/recent-stream";
import { AudioLines, DollarSign, UserCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="lg:mx-32 mx-2 py-8">
      <div className="flex flex-col lg:flex-row justify-around gap-4">
        <MetricsCard
          title="Total Users"
          value="100"
          description="10% users in last month"
          className="rounded-3xl"
          icon={<Users className="text-white" />}
        />
        <MetricsCard
          title="Ative Users"
          value="100"
          description="10% users in last month"
          className="rounded-3xl"
          icon={<UserCheck className="text-green-400" />}
        />
        <MetricsCard
          title="Total Streams"
          value="100"
          description="10% users in last month"
          className="rounded-3xl"
          icon={<AudioLines />}
        />
        <MetricsCard
          title="Revenue"
          value="100"
          description="10% users in last month"
          className="rounded-3xl"
          icon={<DollarSign />}
        />
      </div>
      <MetricsCard
        title="Top Artist"
        value="Billie Eilish"
        description="100 Million Streams"
        imageUrl="/2.png"
        imageHeight={420}
        imageWidth={420}
        className="rounded-3xl p-6 py-14 mt-14"
      />
      <div className="flex justify-between gap-x-5 lg:flex-nowrap flex-wrap">
        <UserGrowthChart />
        <RevenueDistributionChart />
        <TopSongsChart />
      </div>
      <RecentStream />
    </div>
  );
}
