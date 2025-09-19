import { format } from "date-fns";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or API
const teams = {
  "savannah-bananas": {
    name: "Savannah Bananas",
    location: "Savannah, GA",
    founded: "2016",
    stadium: "Grayson Stadium",
    capacity: "4,000",
    colors: ["#FFFF00", "#000000"],
    record: "28-14",
    description:
      "The Savannah Bananas have become one of the most entertaining and successful teams in the Coastal Plain League, known for their innovative approach to baseball and fan engagement.",
    manager: "Tyler Gillum",
    championships: ["2021"],
    image: "/images/daiji-umemoto-f0aE-bu7sco-unsplash.jpg",
  },
  "wilson-tobs": {
    name: "Wilson Tobs",
    location: "Wilson, NC",
    founded: "1999",
    stadium: "Fleming Stadium",
    capacity: "3,200",
    colors: ["#000080", "#FFD700"],
    record: "26-16",
    description:
      "The Wilson Tobs are one of the founding members of the Coastal Plain League and have consistently been competitive throughout the league's history.",
    manager: "Mike Bell",
    championships: ["2019"],
    image: "/images/leio-mclaren-d3fpWcA4vyA-unsplash.jpg",
  },
  // Add more teams as needed
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [{ slug: "savannah-bananas" }, { slug: "wilson-tobs" }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = teams[slug as keyof typeof teams];

  if (!team) {
    return {
      title: "Team Not Found",
    };
  }

  return {
    title: `${team.name} - Coastal Plain League`,
    description: `Follow the ${team.name} for roster, schedule, stats, and news. ${team.description}`,
    openGraph: {
      title: `${team.name} - Coastal Plain League`,
      description: `Follow the ${team.name} for roster, schedule, stats, and news.`,
      images: [team.image],
    },
  };
}

export default async function TeamPage({ params }: PageProps) {
  const { slug } = await params;
  const team = teams[slug as keyof typeof teams];

  if (!team) {
    notFound();
  }

  const roster = [
    {
      name: "Miguel Santos",
      position: "OF",
      year: "Junior",
      school: "Georgia Tech",
      hometown: "Atlanta, GA",
      number: "12",
      stats: { avg: ".387", hr: 8, rbi: 32 },
    },
    {
      name: "Jake Morrison",
      position: "P",
      year: "Sophomore",
      school: "Clemson",
      hometown: "Charleston, SC",
      number: "21",
      stats: { era: "1.89", wins: 6, k: 45 },
    },
    {
      name: "Tyler Johnson",
      position: "1B",
      year: "Senior",
      school: "UNC",
      hometown: "Raleigh, NC",
      number: "34",
      stats: { avg: ".312", hr: 12, rbi: 38 },
    },
  ];

  const schedule = [
    {
      date: "2024-07-22",
      opponent: "Peninsula Pilots",
      time: "7:00 PM",
      location: "Home",
      result: null,
    },
    {
      date: "2024-07-20",
      opponent: "Peninsula Pilots",
      time: "7:00 PM",
      location: "Home",
      result: "W 8-2",
    },
    {
      date: "2024-07-18",
      opponent: "Columbia Blowfish",
      time: "7:30 PM",
      location: "Away",
      result: "L 4-6",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Team Header */}
      <section className="relative h-96 overflow-hidden">
        <Image src={team.image} alt={team.name} fill className="object-cover" />
        <div className="absolute inset-0 hero-gradient" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center space-x-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${team.colors[0]} 0%, ${team.colors[1]} 100%)`,
                }}
              >
                {team.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div className="text-white">
                <h1 className="text-5xl font-bebas-neue font-bold mb-2">
                  {team.name}
                </h1>
                <div className="flex items-center space-x-6 text-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{team.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5" />
                    <span>{team.record}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Navigation */}
      <nav className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {["Overview", "Roster", "Schedule", "Stats", "News"].map((tab) => (
              <button
                key={tab}
                className="py-4 px-1 border-b-2 border-transparent hover:border-cpl-red text-gray-700 hover:text-cpl-navy font-medium transition-colors whitespace-nowrap"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Team Overview */}
            <section>
              <h2 className="text-3xl font-bebas-neue font-bold cpl-primary mb-6">
                Team Overview
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-700 mb-6">{team.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Manager</span>
                      <span className="font-semibold">{team.manager}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Founded</span>
                      <span className="font-semibold">{team.founded}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Stadium</span>
                      <span className="font-semibold">{team.stadium}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Capacity</span>
                      <span className="font-semibold">{team.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Championships</span>
                      <span className="font-semibold">
                        {team.championships.join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Current Record</span>
                      <span className="font-semibold">{team.record}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Roster */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bebas-neue font-bold cpl-navy flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  Roster
                </h2>
                <Link
                  href={`/teams/${slug}/roster`}
                  className="text-cpl-red hover:text-red-700 font-semibold"
                >
                  View Full Roster
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-cpl-navy text-white">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                          #
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                          Pos
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                          School
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                          Year
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">
                          Stats
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {roster.map((player, index) => (
                        <tr
                          key={player.name}
                          className="hover:bg-cpl-light-gray"
                        >
                          <td className="px-6 py-4 text-sm font-medium">
                            {player.number}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium cpl-navy">
                            {player.name}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {player.position}
                          </td>
                          <td className="px-6 py-4 text-sm">{player.school}</td>
                          <td className="px-6 py-4 text-sm">{player.year}</td>
                          <td className="px-6 py-4 text-sm">
                            {player.position === "P"
                              ? `${player.stats.era} ERA, ${player.stats.wins}W, ${player.stats.k}K`
                              : `${player.stats.avg} AVG, ${player.stats.hr}HR, ${player.stats.rbi}RBI`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold cpl-navy mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary">Buy Tickets</button>
                <button className="w-full btn-secondary">Follow Team</button>
              </div>
            </div>

            {/* Recent Schedule */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold cpl-navy flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Recent Games
                </h3>
                <Link
                  href={`/teams/${slug}/schedule`}
                  className="text-cpl-red hover:text-red-700 text-sm font-semibold"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {schedule.map((game, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-cpl-light-gray rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-sm">
                        vs {game.opponent}
                      </div>
                      <div className="text-xs text-gray-600">
                        {format(new Date(game.date), "PPP")}
                      </div>
                    </div>
                    <div className="text-right">
                      {game.result ? (
                        <div
                          className={`text-sm font-semibold ${
                            game.result.startsWith("W")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {game.result}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-600">{game.time}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold cpl-primary mb-4">Team Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Batting Average</span>
                  <span className="font-semibold">.285</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Team ERA</span>
                  <span className="font-semibold">3.42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Home Runs</span>
                  <span className="font-semibold">58</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Stolen Bases</span>
                  <span className="font-semibold">89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
