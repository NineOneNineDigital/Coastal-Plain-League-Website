import { Award, BarChart3, Target, TrendingUp, Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistics - Coastal Plain League",
  description:
    "Complete team and player statistics for the Coastal Plain League including batting, pitching, and fielding stats.",
  openGraph: {
    title: "Statistics - Coastal Plain League",
    description:
      "Complete team and player statistics for the Coastal Plain League including batting, pitching, and fielding stats.",
  },
};

const teamStats = [
  {
    team: "Savannah Bananas",
    games: 42,
    wins: 30,
    losses: 12,
    avg: 0.298,
    runs: 268,
    hits: 412,
    hr: 58,
    rbi: 245,
    sb: 89,
    era: 2.85,
    whip: 1.18,
    k: 387,
    fielding: 0.975,
  },
  {
    team: "Wilson Tobs",
    games: 42,
    wins: 26,
    losses: 16,
    avg: 0.285,
    runs: 232,
    hits: 389,
    hr: 45,
    rbi: 218,
    sb: 76,
    era: 3.42,
    whip: 1.28,
    k: 342,
    fielding: 0.968,
  },
  {
    team: "Peninsula Pilots",
    games: 42,
    wins: 28,
    losses: 14,
    avg: 0.281,
    runs: 245,
    hits: 398,
    hr: 52,
    rbi: 235,
    sb: 82,
    era: 3.15,
    whip: 1.22,
    k: 365,
    fielding: 0.972,
  },
  {
    team: "Macon Bacon",
    games: 42,
    wins: 25,
    losses: 17,
    avg: 0.276,
    runs: 240,
    hits: 385,
    hr: 48,
    rbi: 228,
    sb: 71,
    era: 3.58,
    whip: 1.31,
    k: 328,
    fielding: 0.965,
  },
  {
    team: "Columbia Blowfish",
    games: 42,
    wins: 23,
    losses: 19,
    avg: 0.272,
    runs: 225,
    hits: 371,
    hr: 42,
    rbi: 212,
    sb: 68,
    era: 3.75,
    whip: 1.35,
    k: 315,
    fielding: 0.962,
  },
  {
    team: "Petersburg Generals",
    games: 42,
    wins: 22,
    losses: 20,
    avg: 0.268,
    runs: 218,
    hits: 365,
    hr: 38,
    rbi: 205,
    sb: 64,
    era: 3.89,
    whip: 1.38,
    k: 298,
    fielding: 0.958,
  },
];

const battingLeaders = [
  {
    rank: 1,
    name: "Miguel Santos",
    team: "Savannah Bananas",
    position: "OF",
    games: 38,
    avg: 0.387,
    hits: 58,
    hr: 12,
    rbi: 42,
    sb: 18,
    ops: 1.045,
  },
  {
    rank: 2,
    name: "Tyler Johnson",
    team: "Wilson Tobs",
    position: "1B",
    games: 40,
    avg: 0.365,
    hits: 62,
    hr: 18,
    rbi: 48,
    sb: 3,
    ops: 1.125,
  },
  {
    rank: 3,
    name: "Carlos Rodriguez",
    team: "Peninsula Pilots",
    position: "SS",
    games: 39,
    avg: 0.342,
    hits: 55,
    hr: 8,
    rbi: 52,
    sb: 22,
    ops: 0.945,
  },
  {
    rank: 4,
    name: "Jake Williams",
    team: "Macon Bacon",
    position: "C",
    games: 37,
    avg: 0.338,
    hits: 51,
    hr: 15,
    rbi: 45,
    sb: 2,
    ops: 1.012,
  },
  {
    rank: 5,
    name: "Danny Martinez",
    team: "Columbia Blowfish",
    position: "3B",
    games: 41,
    avg: 0.335,
    hits: 59,
    hr: 11,
    rbi: 38,
    sb: 14,
    ops: 0.968,
  },
];

const pitchingLeaders = [
  {
    rank: 1,
    name: "Jake Morrison",
    team: "Macon Bacon",
    position: "P",
    games: 12,
    wins: 8,
    losses: 1,
    era: 1.89,
    innings: 52.1,
    k: 68,
    whip: 0.95,
    saves: 0,
  },
  {
    rank: 2,
    name: "David Chen",
    team: "Columbia Blowfish",
    position: "P",
    games: 11,
    wins: 7,
    losses: 2,
    era: 2.15,
    innings: 48.2,
    k: 89,
    whip: 1.08,
    saves: 0,
  },
  {
    rank: 3,
    name: "Alex Thompson",
    team: "Petersburg Generals",
    position: "P",
    games: 13,
    wins: 8,
    losses: 3,
    era: 2.34,
    innings: 54.1,
    k: 72,
    whip: 1.12,
    saves: 0,
  },
  {
    rank: 4,
    name: "Ryan Davis",
    team: "Savannah Bananas",
    position: "P",
    games: 25,
    wins: 3,
    losses: 1,
    era: 1.68,
    innings: 32.1,
    k: 45,
    whip: 0.89,
    saves: 18,
  },
  {
    rank: 5,
    name: "Marcus Johnson",
    team: "Wilson Tobs",
    position: "P",
    games: 10,
    wins: 6,
    losses: 2,
    era: 2.67,
    innings: 47.0,
    k: 58,
    whip: 1.19,
    saves: 0,
  },
];

const StatsPage = () => {
  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              League Statistics
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive team and player statistics across all categories
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>2024 Season Stats</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Statistics */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bebas-neue font-bold cpl-navy flex items-center">
              <Trophy className="w-8 h-8 mr-3" />
              Team Statistics
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cpl-primary to-cpl-secondary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Team
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      W-L
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      AVG
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      R
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      H
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      HR
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      RBI
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      SB
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      ERA
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      WHIP
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      K
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">
                      FLD%
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teamStats.map((team, index) => (
                    <tr
                      key={team.team}
                      className="hover:bg-cpl-light-gray transition-colors"
                    >
                      <td className="px-4 py-4 font-medium cpl-navy">
                        {team.team}
                      </td>
                      <td className="px-4 py-4 text-center font-semibold">
                        {team.wins}-{team.losses}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {team.avg.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-center">{team.runs}</td>
                      <td className="px-4 py-4 text-center">{team.hits}</td>
                      <td className="px-4 py-4 text-center font-semibold text-cpl-red">
                        {team.hr}
                      </td>
                      <td className="px-4 py-4 text-center">{team.rbi}</td>
                      <td className="px-4 py-4 text-center">{team.sb}</td>
                      <td className="px-4 py-4 text-center font-semibold text-green-600">
                        {team.era.toFixed(2)}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {team.whip.toFixed(2)}
                      </td>
                      <td className="px-4 py-4 text-center">{team.k}</td>
                      <td className="px-4 py-4 text-center">
                        {team.fielding.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Player Statistics */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Batting Leaders */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bebas-neue font-bold cpl-navy flex items-center">
                <Award className="w-8 h-8 mr-3" />
                Batting Leaders
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-cpl-red to-red-600 text-white p-4">
                <h3 className="text-xl font-bebas-neue font-bold">
                  Top Hitters
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        #
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Player
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        AVG
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        H
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        HR
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        RBI
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        OPS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {battingLeaders.map((player) => (
                      <tr
                        key={player.name}
                        className="hover:bg-cpl-light-gray transition-colors"
                      >
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white ${
                              player.rank === 1
                                ? "bg-yellow-500"
                                : player.rank === 2
                                ? "bg-gray-400"
                                : player.rank === 3
                                ? "bg-orange-500"
                                : "bg-gray-300"
                            }`}
                          >
                            {player.rank}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div>
                            <div className="font-semibold cpl-navy">
                              {player.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {player.position} • {player.team}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center font-bold text-lg cpl-red">
                          {player.avg.toFixed(3)}
                        </td>
                        <td className="px-4 py-4 text-center">{player.hits}</td>
                        <td className="px-4 py-4 text-center font-semibold">
                          {player.hr}
                        </td>
                        <td className="px-4 py-4 text-center">{player.rbi}</td>
                        <td className="px-4 py-4 text-center font-semibold">
                          {player.ops.toFixed(3)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Pitching Leaders */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bebas-neue font-bold cpl-navy flex items-center">
                <Target className="w-8 h-8 mr-3" />
                Pitching Leaders
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-cpl-primary to-cpl-secondary text-white p-4">
                <h3 className="text-xl font-bebas-neue font-bold">
                  Top Pitchers
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        #
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                        Player
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        ERA
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        W-L
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        K
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        WHIP
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">
                        SV
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pitchingLeaders.map((player) => (
                      <tr
                        key={player.name}
                        className="hover:bg-cpl-light-gray transition-colors"
                      >
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white ${
                              player.rank === 1
                                ? "bg-yellow-500"
                                : player.rank === 2
                                ? "bg-gray-400"
                                : player.rank === 3
                                ? "bg-orange-500"
                                : "bg-gray-300"
                            }`}
                          >
                            {player.rank}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div>
                            <div className="font-semibold cpl-navy">
                              {player.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {player.position} • {player.team}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center font-bold text-lg text-green-600">
                          {player.era.toFixed(2)}
                        </td>
                        <td className="px-4 py-4 text-center font-semibold">
                          {player.wins}-{player.losses}
                        </td>
                        <td className="px-4 py-4 text-center font-semibold cpl-red">
                          {player.k}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {player.whip.toFixed(2)}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {player.saves}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* Statistical Categories */}
        <section className="mt-16">
          <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3" />
            League Leaders by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Batting Average */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold cpl-navy mb-2">
                  Batting Average
                </h3>
                <div className="text-3xl font-bold cpl-red mb-2">.387</div>
                <div className="text-sm text-gray-600">Miguel Santos</div>
                <div className="text-xs text-gray-500">Savannah Bananas</div>
              </div>
            </div>

            {/* Home Runs */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold cpl-navy mb-2">Home Runs</h3>
                <div className="text-3xl font-bold cpl-red mb-2">18</div>
                <div className="text-sm text-gray-600">Tyler Johnson</div>
                <div className="text-xs text-gray-500">Wilson Tobs</div>
              </div>
            </div>

            {/* ERA */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold cpl-navy mb-2">ERA</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  1.68
                </div>
                <div className="text-sm text-gray-600">Ryan Davis</div>
                <div className="text-xs text-gray-500">Savannah Bananas</div>
              </div>
            </div>

            {/* Strikeouts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold cpl-navy mb-2">Strikeouts</h3>
                <div className="text-3xl font-bold cpl-red mb-2">89</div>
                <div className="text-sm text-gray-600">David Chen</div>
                <div className="text-xs text-gray-500">Columbia Blowfish</div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Stats */}
        <section className="mt-16">
          <h2 className="text-3xl font-bebas-neue font-bold cpl-primary mb-8">
            League Totals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-2xl font-bold cpl-primary">1,428</div>
              <div className="text-sm text-gray-600">Total Runs Scored</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-2xl font-bold cpl-primary">293</div>
              <div className="text-sm text-gray-600">Total Home Runs</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-2xl font-bold cpl-primary">2,035</div>
              <div className="text-sm text-gray-600">Total Strikeouts</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-2xl font-bold cpl-primary">390</div>
              <div className="text-sm text-gray-600">Total Stolen Bases</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatsPage;
