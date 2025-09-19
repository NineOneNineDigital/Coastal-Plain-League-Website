"use client";

import {
  Award,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const featuredPlayers = [
  {
    id: 1,
    name: "Miguel Santos",
    team: "Savannah Bananas",
    position: "Outfielder",
    image: "/images/josh-hemsley-e-f17L4EBBc-unsplash.jpg",
    stats: {
      battingAverage: 0.387,
      homeRuns: 12,
      rbi: 42,
      stolenBases: 18,
    },
    highlights: [
      "Leading the league in batting average",
      "18 stolen bases this season",
      "Named Player of the Week 3 times",
    ],
    story:
      "The Savannah Bananas outfielder is having a phenomenal season, leading the league in multiple offensive categories and showcasing elite speed on the basepaths.",
    slug: "miguel-santos",
  },
  {
    id: 2,
    name: "Jake Morrison",
    team: "Macon Bacon",
    position: "Pitcher",
    image: "/images/josh-hemsley-ehGY57IZoKc-unsplash.jpg",
    stats: {
      era: 1.89,
      wins: 8,
      strikeouts: 89,
      whip: 0.95,
    },
    highlights: [
      "Lowest ERA in the league",
      "89 strikeouts this season",
      "Named Pitcher of the Year",
    ],
    story:
      "The Macon Bacon ace has been dominant on the mound, posting the league's best ERA while striking out nearly a batter per inning.",
    slug: "jake-morrison",
  },
  {
    id: 3,
    name: "Tyler Johnson",
    team: "Wilson Tobs",
    position: "First Baseman",
    image: "/images/keith-johnston-PenZT_IMrV8-unsplash.jpg",
    stats: {
      battingAverage: 0.365,
      homeRuns: 18,
      rbi: 48,
      ops: 1.125,
    },
    highlights: [
      "League leader in home runs",
      "48 RBIs this season",
      "Outstanding power numbers",
    ],
    story:
      "The Wilson Tobs first baseman has been a force at the plate, leading the league in home runs and providing consistent power production.",
    slug: "tyler-johnson",
  },
];

const PlayerSpotlight = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const timer = setInterval(() => {
      setCurrentPlayer((prev) => (prev + 1) % featuredPlayers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoRotating]);

  const nextPlayer = () => {
    setCurrentPlayer((prev) => (prev + 1) % featuredPlayers.length);
    setIsAutoRotating(false);
  };

  const prevPlayer = () => {
    setCurrentPlayer(
      (prev) => (prev - 1 + featuredPlayers.length) % featuredPlayers.length
    );
    setIsAutoRotating(false);
  };

  const goToPlayer = (index: number) => {
    setCurrentPlayer(index);
    setIsAutoRotating(false);
  };

  const player = featuredPlayers[currentPlayer];

  return (
    <section className="bg-gradient-to-br from-cpl-primary to-cpl-secondary py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold mb-4">
            Player Spotlight
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Meet the stars making headlines across the Coastal Plain League
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Player Image */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-sm text-gray-200">{player.position}</div>
                  <div className="text-2xl font-bold">{player.name}</div>
                  <div className="text-lg text-cpl-red">{player.team}</div>
                </div>
              </div>

              {/* Player Info */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-cpl-red" />
                      Season Highlights
                    </h3>
                    <ul className="space-y-2">
                      {player.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-200"
                        >
                          <div className="w-2 h-2 bg-cpl-red rounded-full mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Grid */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-2 text-cpl-red" />
                      Key Statistics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(player.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-white/10 rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-cpl-red">
                            {typeof value === "number" && value < 1
                              ? value.toFixed(3)
                              : value.toString()}
                          </div>
                          <div className="text-sm text-gray-300 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-cpl-red" />
                      Player Story
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {player.story}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <Link
                      href={`/players/${player.slug}`}
                      className="bg-cpl-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      View Full Profile
                    </Link>
                    <Link
                      href="/stats"
                      className="border-2 border-white text-white hover:bg-white hover:text-cpl-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      View All Stats
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevPlayer}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPlayer}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Player Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredPlayers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPlayer(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPlayer
                    ? "bg-cpl-red scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Player Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">.387</div>
            <div className="text-gray-200">League Leading Average</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">18</div>
            <div className="text-gray-200">Home Run Leader</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">1.89</div>
            <div className="text-gray-200">Lowest ERA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerSpotlight;
