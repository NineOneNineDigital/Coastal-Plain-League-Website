"use client";

import { format } from "date-fns";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Ticket,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const upcomingGames = [
  {
    id: 1,
    homeTeam: "Savannah Bananas",
    awayTeam: "Wilson Tobs",
    date: "2024-07-25",
    time: "7:00 PM",
    venue: "Grayson Stadium",
    location: "Savannah, GA",
    status: "upcoming",
    ticketsAvailable: true,
    ticketPrice: "$12",
    isPlayoff: true,
    series: "Championship Series Game 1",
  },
  {
    id: 2,
    homeTeam: "Peninsula Pilots",
    awayTeam: "Macon Bacon",
    date: "2024-07-26",
    time: "7:30 PM",
    venue: "War Memorial Stadium",
    location: "Hampton, VA",
    status: "upcoming",
    ticketsAvailable: true,
    ticketPrice: "$10",
    isPlayoff: false,
  },
  {
    id: 3,
    homeTeam: "Wilson Tobs",
    awayTeam: "Savannah Bananas",
    date: "2024-07-27",
    time: "7:00 PM",
    venue: "Fleming Stadium",
    location: "Wilson, NC",
    status: "upcoming",
    ticketsAvailable: true,
    ticketPrice: "$12",
    isPlayoff: true,
    series: "Championship Series Game 2",
  },
  {
    id: 4,
    homeTeam: "Columbia Blowfish",
    awayTeam: "Forest City Owls",
    date: "2024-07-28",
    time: "6:00 PM",
    venue: "Segra Park",
    location: "Columbia, SC",
    status: "upcoming",
    ticketsAvailable: true,
    ticketPrice: "$8",
    isPlayoff: false,
  },
  {
    id: 5,
    homeTeam: "Macon Bacon",
    awayTeam: "Petersburg Generals",
    date: "2024-07-29",
    time: "7:00 PM",
    venue: "Luther Williams Field",
    location: "Macon, GA",
    status: "upcoming",
    ticketsAvailable: true,
    ticketPrice: "$9",
    isPlayoff: false,
  },
];

const UpcomingGamesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % upcomingGames.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextGame = () => {
    setCurrentIndex((prev) => (prev + 1) % upcomingGames.length);
    setIsAutoPlaying(false);
  };

  const prevGame = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + upcomingGames.length) % upcomingGames.length
    );
    setIsAutoPlaying(false);
  };

  const goToGame = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold text-cpl-navy mb-4">
            Upcoming Games
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss the action! Get your tickets for the next exciting
            matchups
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
            {upcomingGames.map((game, index) => (
              <div
                key={game.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="relative h-full bg-gradient-to-br from-cpl-primary to-cpl-secondary text-white">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
                  </div>

                  <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Game Info */}
                        <div className="space-y-6">
                          {game.isPlayoff && (
                            <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-black rounded-full text-sm font-bold">
                              <Trophy className="w-4 h-4 mr-2" />
                              {game.series}
                            </div>
                          )}

                          <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold">
                                  {game.awayTeam}
                                </div>
                                <div className="text-sm text-gray-300">
                                  Away
                                </div>
                              </div>
                              <div className="text-4xl font-bold text-cpl-red">
                                @
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold">
                                  {game.homeTeam}
                                </div>
                                <div className="text-sm text-gray-300">
                                  Home
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Calendar className="w-5 h-5 text-cpl-red" />
                              <span>
                                {format(
                                  new Date(game.date),
                                  "EEEE, MMMM d, yyyy"
                                )}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Clock className="w-5 h-5 text-cpl-red" />
                              <span>{game.time} EST</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <MapPin className="w-5 h-5 text-cpl-red" />
                              <span>
                                {game.venue}, {game.location}
                              </span>
                            </div>
                          </div>

                          <div className="flex space-x-4">
                            {game.ticketsAvailable ? (
                              <Link
                                href={`/tickets/${game.id}`}
                                className="bg-cpl-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                              >
                                <Ticket className="w-5 h-5 mr-2" />
                                Get Tickets - {game.ticketPrice}
                              </Link>
                            ) : (
                              <div className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center">
                                <Ticket className="w-5 h-5 mr-2" />
                                Sold Out
                              </div>
                            )}
                            <Link
                              href="/schedule"
                              className="border-2 border-white text-white hover:bg-white hover:text-cpl-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                              View Schedule
                            </Link>
                          </div>
                        </div>

                        {/* Visual Element */}
                        <div className="hidden lg:block">
                          <div className="relative">
                            <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <div className="text-center">
                                <div className="text-6xl font-bold text-cpl-red mb-2">
                                  VS
                                </div>
                                <div className="text-sm text-gray-300">
                                  Baseball
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevGame}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-cpl-navy w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextGame}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-cpl-navy w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {upcomingGames.map((_, index) => (
              <button
                key={index}
                onClick={() => goToGame(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-cpl-navy scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-2xl font-bold text-cpl-navy mb-2">5</div>
            <div className="text-gray-600">Games This Week</div>
          </div>
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-2xl font-bold text-cpl-navy mb-2">2</div>
            <div className="text-gray-600">Playoff Games</div>
          </div>
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-2xl font-bold text-cpl-navy mb-2">$8-$12</div>
            <div className="text-gray-600">Ticket Range</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGamesCarousel;
