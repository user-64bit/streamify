import { RevenueDistributionChart } from "@/components/charts/revenue-distribution-chart";
import { TopSongsChart } from "@/components/charts/top-streamed-songs-chard";
import UserGrowthChart from "@/components/charts/user-growth-chart";
import MetricsCard from "@/components/key-metric/metric-card";
import TopArtistCard from "@/components/key-metric/top-artist";
import RecentStream from "@/components/recent-stream";
import { metricsCardData } from "@/utils/config";
import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:mx-12 mx-4 py-8 max-w-full">
      <div className="flex gap-x-3 items-center mb-4">
        <Image
          src={"/logo.png"}
          width={60}
          height={60}
          alt="Logo"
          className="hover:animate-spin hover:cursor-pointer transition-all duration-300"
        />
        <h3 className="text-2xl font-bold">Streamify</h3>
      </div>
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
        name="Billie Eilish"
        description="is the most-streamed artist on Spotify. She is the first female artist to top the list. with 10+ Billions streamings."
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
