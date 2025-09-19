import {
  Calendar,
  Minus,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standings - Coastal Plain League",
  description:
    "Current standings, playoff picture, and team statistics for the Coastal Plain League.",
  openGraph: {
    title: "Standings - Coastal Plain League",
    description:
      "Current standings, playoff picture, and team statistics for the Coastal Plain League.",
  },
};

const eastDivision = [
  {
    team: "Peninsula Pilots",
    wins: 28,
    losses: 14,
    pct: 0.667,
    gb: "-",
    home: "16-5",
    away: "12-9",
    last10: "7-3",
    streak: "W3",
    runsFor: 245,
    runsAgainst: 198,
    diff: "+47",
    clinched: "division",
    trend: "up",
  },
  {
    team: "Wilson Tobs",
    wins: 26,
    losses: 16,
    pct: 0.619,
    gb: "2.0",
    home: "15-6",
    away: "11-10",
    last10: "6-4",
    streak: "W1",
    runsFor: 232,
    runsAgainst: 210,
    diff: "+22",
    clinched: "playoff",
    trend: "up",
  },
  {
    team: "Petersburg Generals",
    wins: 22,
    losses: 20,
    pct: 0.524,
    gb: "6.0",
    home: "13-8",
    away: "9-12",
    last10: "5-5",
    streak: "L2",
    runsFor: 218,
    runsAgainst: 225,
    diff: "-7",
    clinched: null,
    trend: "down",
  },
  {
    team: "Tri-City Chili Peppers",
    wins: 18,
    losses: 24,
    pct: 0.429,
    gb: "10.0",
    home: "11-10",
    away: "7-14",
    last10: "4-6",
    streak: "L1",
    runsFor: 195,
    runsAgainst: 240,
    diff: "-45",
    clinched: null,
    trend: "down",
  },
  {
    team: "Martinsville Mustangs",
    wins: 16,
    losses: 26,
    pct: 0.381,
    gb: "12.0",
    home: "10-11",
    away: "6-15",
    last10: "3-7",
    streak: "L4",
    runsFor: 180,
    runsAgainst: 255,
    diff: "-75",
    clinched: null,
    trend: "down",
  },
];

const westDivision = [
  {
    team: "Savannah Bananas",
    wins: 30,
    losses: 12,
    pct: 0.714,
    gb: "-",
    home: "17-4",
    away: "13-8",
    last10: "8-2",
    streak: "W5",
    runsFor: 268,
    runsAgainst: 185,
    diff: "+83",
    clinched: "division",
    trend: "up",
  },
  {
    team: "Macon Bacon",
    wins: 25,
    losses: 17,
    pct: 0.595,
    gb: "5.0",
    home: "14-7",
    away: "11-10",
    last10: "7-3",
    streak: "W2",
    runsFor: 240,
    runsAgainst: 205,
    diff: "+35",
    clinched: "playoff",
    trend: "up",
  },
  {
    team: "Columbia Blowfish",
    wins: 23,
    losses: 19,
    pct: 0.548,
    gb: "7.0",
    home: "13-8",
    away: "10-11",
    last10: "6-4",
    streak: "W1",
    runsFor: 225,
    runsAgainst: 215,
    diff: "+10",
    clinched: null,
    trend: "up",
  },
  {
    team: "Forest City Owls",
    wins: 20,
    losses: 22,
    pct: 0.476,
    gb: "10.0",
    home: "12-9",
    away: "8-13",
    last10: "4-6",
    streak: "L3",
    runsFor: 210,
    runsAgainst: 230,
    diff: "-20",
    clinched: null,
    trend: "down",
  },
  {
    team: "Greenville Drive",
    wins: 19,
    losses: 23,
    pct: 0.452,
    gb: "11.0",
    home: "11-10",
    away: "8-13",
    last10: "5-5",
    streak: "W1",
    runsFor: 205,
    runsAgainst: 235,
    diff: "-30",
    clinched: null,
    trend: "stable",
  },
  {
    team: "Asheville Turkeys",
    wins: 17,
    losses: 25,
    pct: 0.405,
    gb: "13.0",
    home: "10-11",
    away: "7-14",
    last10: "3-7",
    streak: "L2",
    runsFor: 190,
    runsAgainst: 250,
    diff: "-60",
    clinched: null,
    trend: "down",
  },
  {
    team: "High Point-Thomasville HiToms",
    wins: 15,
    losses: 27,
    pct: 0.357,
    gb: "15.0",
    home: "9-12",
    away: "6-15",
    last10: "2-8",
    streak: "L6",
    runsFor: 175,
    runsAgainst: 265,
    diff: "-90",
    clinched: null,
    trend: "down",
  },
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    case "down":
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    default:
      return <Minus className="w-4 h-4 text-gray-400" />;
  }
};

const getClinchBadge = (clinched: string | null) => {
  if (!clinched) return null;

  const badges = {
    division: {
      text: "x",
      color: "bg-green-500",
      tooltip: "Clinched Division",
    },
    playoff: {
      text: "y",
      color: "bg-blue-500",
      tooltip: "Clinched Playoff Spot",
    },
  };

  const badge = badges[clinched as keyof typeof badges];

  return (
    <span
      className={`inline-flex items-center justify-center w-5 h-5 ${badge.color} text-white text-xs font-bold rounded-full mr-2`}
      title={badge.tooltip}
    >
      {badge.text}
    </span>
  );
};

const StandingsTable = ({
  division,
  title,
}: {
  division: typeof eastDivision;
  title: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-gradient-to-r from-cpl-primary to-cpl-secondary text-white p-4">
      <h3 className="text-xl font-bebas-neue font-bold flex items-center">
        <Trophy className="w-6 h-6 mr-2" />
        {title}
      </h3>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Team
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              W
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              L
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              PCT
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              GB
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Home
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Away
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              L10
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Streak
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Diff
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {division.map((team, index) => (
            <tr
              key={team.team}
              className={`hover:bg-cpl-light-gray transition-colors ${
                index < 2 ? "bg-green-50" : ""
              }`}
            >
              <td className="px-4 py-4">
                <div className="flex items-center">
                  {getClinchBadge(team.clinched)}
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">
                      {team.team}
                    </span>
                    {getTrendIcon(team.trend)}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-center font-semibold">
                {team.wins}
              </td>
              <td className="px-4 py-4 text-center font-semibold">
                {team.losses}
              </td>
              <td className="px-4 py-4 text-center">{team.pct.toFixed(3)}</td>
              <td className="px-4 py-4 text-center text-gray-600">{team.gb}</td>
              <td className="px-4 py-4 text-center text-sm">{team.home}</td>
              <td className="px-4 py-4 text-center text-sm">{team.away}</td>
              <td className="px-4 py-4 text-center text-sm">{team.last10}</td>
              <td className="px-4 py-4 text-center">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                    team.streak.startsWith("W")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {team.streak}
                </span>
              </td>
              <td className="px-4 py-4 text-center">
                <span
                  className={`font-semibold ${
                    team.diff.startsWith("+")
                      ? "text-green-600"
                      : team.diff.startsWith("-")
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {team.diff}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function StandingsPage() {
  const playoffTeams = [...eastDivision, ...westDivision]
    .filter((team) => team.clinched)
    .sort((a, b) => b.pct - a.pct);

  const wildCardRace = [...eastDivision, ...westDivision]
    .filter((team) => !team.clinched)
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              League Standings
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Current standings, playoff picture, and team performance across
              both divisions
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Updated: July 21, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>42 Games Played</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legend */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-bold cpl-navy mb-4">Legend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full">
                x
              </span>
              <span>Clinched Division</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full">
                y
              </span>
              <span>Clinched Playoff Spot</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 bg-green-50 border border-green-200 rounded"></div>
              <span>Playoff Position</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>Trending Up</span>
            </div>
          </div>
        </div>

        {/* Division Standings */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          <StandingsTable division={eastDivision} title="East Division" />
          <StandingsTable division={westDivision} title="West Division" />
        </div>

        {/* Playoff Picture & Wild Card Race */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Playoff Picture */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
              <h3 className="text-xl font-bebas-neue font-bold flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Playoff Picture
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {playoffTeams.map((team, index) => (
                  <div
                    key={team.team}
                    className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-green-500 text-white font-bold rounded-full text-sm">
                        {index + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {team.team}
                        </div>
                        <div className="text-sm text-gray-600">
                          {team.wins}-{team.losses} ({team.pct.toFixed(3)})
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {getClinchBadge(team.clinched)}
                      <div className="text-sm text-gray-600">
                        {team.clinched === "division"
                          ? "Division Winner"
                          : "Wild Card"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wild Card Race */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
              <h3 className="text-xl font-bebas-neue font-bold flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Wild Card Race
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {wildCardRace.map((team, index) => (
                  <div
                    key={team.team}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      index < 2
                        ? "bg-orange-50 border border-orange-200"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`flex items-center justify-center w-8 h-8 font-bold rounded-full text-sm ${
                          index < 2
                            ? "bg-orange-500 text-white"
                            : "bg-gray-400 text-white"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {team.team}
                        </div>
                        <div className="text-sm text-gray-600">
                          {team.wins}-{team.losses} ({team.pct.toFixed(3)})
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">
                        {index < 2 ? (
                          <span className="text-orange-600">In Hunt</span>
                        ) : (
                          <span className="text-gray-500">Outside</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">{team.last10}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bebas-neue font-bold cpl-navy mb-6">
            Key Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-cpl-light-gray rounded-lg">
              <div className="text-2xl font-bold cpl-navy">268</div>
              <div className="text-sm text-gray-600">Most Runs Scored</div>
              <div className="text-xs text-gray-500 mt-1">Savannah Bananas</div>
            </div>
            <div className="text-center p-4 bg-cpl-light-gray rounded-lg">
              <div className="text-2xl font-bold cpl-navy">175</div>
              <div className="text-sm text-gray-600">Fewest Runs Scored</div>
              <div className="text-xs text-gray-500 mt-1">Hi-Toms</div>
            </div>
            <div className="text-center p-4 bg-cpl-light-gray rounded-lg">
              <div className="text-2xl font-bold cpl-navy">185</div>
              <div className="text-sm text-gray-600">Fewest Runs Allowed</div>
              <div className="text-xs text-gray-500 mt-1">Savannah Bananas</div>
            </div>
            <div className="text-center p-4 bg-cpl-light-gray rounded-lg">
              <div className="text-2xl font-bold cpl-navy">+83</div>
              <div className="text-sm text-gray-600">Best Run Differential</div>
              <div className="text-xs text-gray-500 mt-1">Savannah Bananas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
