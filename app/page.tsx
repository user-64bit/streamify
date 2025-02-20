import { RevenueDistributionChart } from "@/components/charts/revenue-distribution-chart";
import { TopSongsChart } from "@/components/charts/top-streamed-songs-chard";
import UserGrowthChart from "@/components/charts/user-growth-chart";
import MetricsCard from "@/components/key-metric/metric-card";
import TopArtistCard from "@/components/key-metric/top-artist";
import RecentStream from "@/components/recent-stream";
import { metricsCardData } from "@/utils/config";

export default function Home() {
  return (
    <div className="lg:mx-12 mx-4 py-8 max-w-full">
      <div className="flex flex-col lg:flex-row justify-around gap-4">
        {metricsCardData.map((metric, i) => (
          <MetricsCard
            key={i}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
            className="rounded-3xl"
          />
        ))}
      </div>
      <TopArtistCard
        title="Top Artist"
        value="Billie Eilish"
        description="100 Million Streams"
        imageUrl="/assets/images/billie.png"
        imageHeight={500}
        imageWidth={500}
        className="rounded-3xl p-6 py-14 mt-28"
      />
      <div className="flex justify-between gap-x-5 lg:flex-nowrap flex-wrap">
        <UserGrowthChart />
        <RevenueDistributionChart />
      </div>
      <div className="flex justify-between gap-x-5 lg:flex-nowrap flex-wrap">
        <TopSongsChart />
        <RecentStream />
      </div>
    </div>
  );
}
