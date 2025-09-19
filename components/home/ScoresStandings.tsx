import { Clock } from "lucide-react";
import Link from "next/link";

const recentGames = [
  {
    id: 1,
    homeTeam: "Savannah Bananas",
    awayTeam: "Peninsula Pilots",
    homeScore: 8,
    awayScore: 2,
    status: "Final",
    date: "2024-07-20",
    inning: null,
  },
  {
    id: 2,
    homeTeam: "Wilson Tobs",
    awayTeam: "Petersburg Generals",
    homeScore: 5,
    awayScore: 4,
    status: "Final",
    date: "2024-07-20",
    inning: null,
  },
  {
    id: 3,
    homeTeam: "Macon Bacon",
    awayTeam: "Columbia Blowfish",
    homeScore: 3,
    awayScore: 4,
    status: "Live",
    date: "2024-07-21",
    inning: "Top 7th",
  },
];

const upcomingGames = [
  {
    id: 4,
    homeTeam: "Forest City Owls",
    awayTeam: "Hi-Toms",
    time: "7:00 PM",
    date: "2024-07-21",
  },
  {
    id: 5,
    homeTeam: "Greenville Drive",
    awayTeam: "Asheville Turkeys",
    time: "7:30 PM",
    date: "2024-07-21",
  },
];

const standings = [
  { team: "Savannah Bananas", wins: 28, losses: 14, pct: 0.667, gb: "-" },
  { team: "Wilson Tobs", wins: 26, losses: 16, pct: 0.619, gb: "2.0" },
  { team: "Peninsula Pilots", wins: 24, losses: 18, pct: 0.571, gb: "4.0" },
  { team: "Macon Bacon", wins: 22, losses: 20, pct: 0.524, gb: "6.0" },
  { team: "Columbia Blowfish", wins: 20, losses: 22, pct: 0.476, gb: "8.0" },
  { team: "Petersburg Generals", wins: 18, losses: 24, pct: 0.429, gb: "10.0" },
];

const ScoresStandings = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Scores Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bebas-neue font-bold cpl-primary">
                Scores
              </h2>
              <Link
                href="/schedule"
                className="text-cpl-secondary hover:text-green-700 font-semibold transition-colors"
              >
                View Full Schedule
              </Link>
            </div>

            <div className="space-y-4 mb-8">
              {recentGames.map((game) => (
                <div key={game.id} className="bg-cpl-light-gray rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {game.awayTeam}
                        </span>
                        <span className="text-2xl font-bold cpl-primary">
                          {game.awayScore}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">
                          {game.homeTeam}
                        </span>
                        <span className="text-2xl font-bold cpl-primary">
                          {game.homeScore}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-semibold ${
                          game.status === "Live"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {game.status === "Live" && (
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                        )}
                        {game.status}
                      </div>
                      {game.inning && (
                        <div className="text-sm text-gray-600 mt-1">
                          {game.inning}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Games */}
            <div>
              <h3 className="text-xl font-bold cpl-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Today's Games
              </h3>
              <div className="space-y-3">
                {upcomingGames.map((game) => (
                  <div
                    key={game.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-gray-900">
                        {game.awayTeam} @ {game.homeTeam}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-cpl-primary">
                        {game.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Standings Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bebas-neue font-bold cpl-primary">
                Standings
              </h2>
              <Link
                href="/standings"
                className="text-cpl-secondary hover:text-green-700 font-semibold transition-colors"
              >
                View Full Standings
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-cpl-primary text-white p-4">
                <div className="grid grid-cols-5 gap-4 text-sm font-semibold">
                  <div className="col-span-2">Team</div>
                  <div className="text-center">W-L</div>
                  <div className="text-center">PCT</div>
                  <div className="text-center">GB</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {standings.map((team, index) => (
                  <div
                    key={team.team}
                    className={`p-4 hover:bg-cpl-light-gray transition-colors ${
                      index < 3 ? "bg-green-50" : ""
                    }`}
                  >
                    <div className="grid grid-cols-5 gap-4 items-center">
                      <div className="col-span-2 font-medium text-gray-900">
                        {index < 3 && (
                          <span className="inline-block w-2 h-2 bg-cpl-secondary rounded-full mr-2" />
                        )}
                        {team.team}
                      </div>
                      <div className="text-center font-semibold">
                        {team.wins}-{team.losses}
                      </div>
                      <div className="text-center">{team.pct.toFixed(3)}</div>
                      <div className="text-center text-gray-600">{team.gb}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoresStandings;
