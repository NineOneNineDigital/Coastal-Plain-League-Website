import FeaturedContent from "@/components/home/FeaturedContent";
import HeroSection from "@/components/home/HeroSection";
import PlayerSpotlight from "@/components/home/PlayerSpotlight";
import ScoresStandings from "@/components/home/ScoresStandings";
import StadiumShowcase from "@/components/home/StadiumShowcase";
import StatsLeaders from "@/components/home/StatsLeaders";
import TeamsGrid from "@/components/home/TeamsGrid";
import UpcomingGamesCarousel from "@/components/home/UpcomingGamesCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coastal Plain League - Premier Summer College Baseball",
  description:
    "Follow the Coastal Plain League for the latest scores, standings, stats, and news from premier summer collegiate baseball.",
  openGraph: {
    title: "Coastal Plain League - Premier Summer College Baseball",
    description:
      "Follow the Coastal Plain League for the latest scores, standings, stats, and news from premier summer collegiate baseball.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedContent />
      <UpcomingGamesCarousel />
      <ScoresStandings />
      <StatsLeaders />
      <PlayerSpotlight />
      <StadiumShowcase />
      <TeamsGrid />
    </div>
  );
}
