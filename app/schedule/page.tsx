import { addDays, format, startOfWeek } from "date-fns";
import { Calendar, Clock, Filter, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule - Coastal Plain League",
  description:
    "Complete game schedule for the Coastal Plain League including dates, times, locations, and results.",
  openGraph: {
    title: "Schedule - Coastal Plain League",
    description:
      "Complete game schedule for the Coastal Plain League including dates, times, locations, and results.",
  },
};

const teams = [
  "Asheville Turkeys",
  "Columbia Blowfish",
  "Forest City Owls",
  "Greenville Drive",
  "High Point-Thomasville HiToms",
  "Macon Bacon",
  "Martinsville Mustangs",
  "Peninsula Pilots",
  "Petersburg Generals",
  "Savannah Bananas",
  "Tri-City Chili Peppers",
  "Wilson Tobs",
];

// Generate sample schedule data
const generateSchedule = () => {
  const games = [];
  const startDate = new Date("2024-06-01");

  for (let i = 0; i < 60; i++) {
    const gameDate = addDays(startDate, i);
    const dayOfWeek = gameDate.getDay();

    // Skip some days to make it realistic
    if (dayOfWeek === 1 || dayOfWeek === 2) continue; // Skip Monday and Tuesday

    const gamesPerDay = dayOfWeek === 0 || dayOfWeek === 6 ? 6 : 4; // More games on weekends

    for (let j = 0; j < gamesPerDay; j++) {
      const homeTeam = teams[Math.floor(Math.random() * teams.length)];
      let awayTeam = teams[Math.floor(Math.random() * teams.length)];
      while (awayTeam === homeTeam) {
        awayTeam = teams[Math.floor(Math.random() * teams.length)];
      }

      const isPast = gameDate < new Date();
      const time = j % 2 === 0 ? "7:00 PM" : "7:30 PM";

      games.push({
        id: `${i}-${j}`,
        date: gameDate,
        time,
        homeTeam,
        awayTeam,
        homeScore: isPast ? Math.floor(Math.random() * 12) + 1 : null,
        awayScore: isPast ? Math.floor(Math.random() * 12) + 1 : null,
        status: isPast ? "Final" : "Scheduled",
        venue: `${homeTeam.split(" ")[0]} Stadium`,
        isPlayoff: i > 50,
        isChampionship: i > 55,
      });
    }
  }

  return games.sort((a, b) => a.date.getTime() - b.date.getTime());
};

const allGames = generateSchedule();

interface Game {
  id: string;
  date: Date;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: string;
  venue: string;
  isPlayoff: boolean;
  isChampionship: boolean;
}

const getGamesByWeek = () => {
  const weeks: Array<{ weekStart: Date; games: Game[] }> = [];
  let currentWeek: Game[] = [];
  let currentWeekStart: Date | null = null;

  allGames.forEach((game) => {
    const weekStart = startOfWeek(game.date, { weekStartsOn: 1 }); // Start week on Monday

    if (
      !currentWeekStart ||
      weekStart.getTime() !== currentWeekStart.getTime()
    ) {
      if (currentWeek.length > 0 && currentWeekStart) {
        weeks.push({
          weekStart: currentWeekStart,
          games: currentWeek,
        });
      }
      currentWeek = [game];
      currentWeekStart = weekStart;
    } else {
      currentWeek.push(game);
    }
  });

  if (currentWeek.length > 0 && currentWeekStart) {
    weeks.push({
      weekStart: currentWeekStart,
      games: currentWeek,
    });
  }

  return weeks;
};

const weeks = getGamesByWeek();

const getGameTypeLabel = (game: any) => {
  if (game.isChampionship)
    return { label: "Championship", color: "bg-yellow-500" };
  if (game.isPlayoff) return { label: "Playoff", color: "bg-orange-500" };
  return null;
};

export default function SchedulePage() {
  const todaysGames = allGames.filter((game) => {
    const today = new Date();
    return game.date.toDateString() === today.toDateString();
  });

  const upcomingGames = allGames
    .filter((game) => {
      const today = new Date();
      return game.date > today && game.status === "Scheduled";
    })
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              Game Schedule
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Complete schedule of games, results, and upcoming matchups across
              the Coastal Plain League
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>2024 Season</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Today's Games */}
        {todaysGames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
              <Clock className="w-8 h-8 mr-3" />
              Today's Games
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todaysGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-cpl-secondary"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {game.venue}
                    </div>
                    <div className="text-sm font-semibold cpl-secondary">
                      {game.time}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        {game.awayTeam}
                      </span>
                      <span className="text-xl font-bold cpl-navy">
                        {game.awayScore !== null ? game.awayScore : "-"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        {game.homeTeam}
                      </span>
                      <span className="text-xl font-bold cpl-navy">
                        {game.homeScore !== null ? game.homeScore : "-"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        game.status === "Final"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {game.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900">Filter by:</span>
              </div>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent">
                <option value="">All Teams</option>
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent">
                <option value="">All Games</option>
                <option value="regular">Regular Season</option>
                <option value="playoff">Playoffs</option>
                <option value="championship">Championship</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent">
                <option value="">All Months</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
              </select>
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section>
          <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
            <Calendar className="w-8 h-8 mr-3" />
            Full Schedule
          </h2>

          <div className="space-y-8">
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-cpl-primary to-cpl-secondary text-white p-4">
                  <h3 className="text-xl font-bebas-neue font-bold">
                    Week of {format(week.weekStart, "MMMM d, yyyy")}
                  </h3>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {week.games
                      .reduce((acc: any[], game) => {
                        const dateStr = format(game.date, "yyyy-MM-dd");
                        const existingDate = acc.find(
                          (item) => item.date === dateStr
                        );

                        if (existingDate) {
                          existingDate.games.push(game);
                        } else {
                          acc.push({
                            date: dateStr,
                            displayDate: format(game.date, "EEEE, MMMM d"),
                            games: [game],
                          });
                        }

                        return acc;
                      }, [])
                      .map((day) => (
                        <div
                          key={day.date}
                          className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                        >
                          <h4 className="text-lg font-bold cpl-navy mb-3">
                            {day.displayDate}
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {day.games.map((game: any) => {
                              const gameType = getGameTypeLabel(game);

                              return (
                                <div
                                  key={game.id}
                                  className="bg-cpl-light-gray rounded-lg p-4 relative"
                                >
                                  {gameType && (
                                    <div className="absolute top-2 right-2">
                                      <span
                                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-white ${gameType.color}`}
                                      >
                                        {gameType.label}
                                      </span>
                                    </div>
                                  )}

                                  <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm text-gray-600 flex items-center">
                                      <Clock className="w-3 h-3 mr-1" />
                                      {game.time}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {game.venue}
                                    </div>
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-gray-900">
                                        {game.awayTeam}
                                      </span>
                                      <span className="font-bold cpl-navy">
                                        {game.awayScore !== null
                                          ? game.awayScore
                                          : "-"}
                                      </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium text-gray-900">
                                        {game.homeTeam}
                                      </span>
                                      <span className="font-bold cpl-navy">
                                        {game.homeScore !== null
                                          ? game.homeScore
                                          : "-"}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <span
                                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                                        game.status === "Final"
                                          ? "bg-gray-100 text-gray-800"
                                          : "bg-green-100 text-green-800"
                                      }`}
                                    >
                                      {game.status}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Games Sidebar */}
        <aside className="mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold cpl-navy mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Next 10 Games
            </h3>

            <div className="space-y-3">
              {upcomingGames.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center justify-between p-3 bg-cpl-light-gray rounded-lg"
                >
                  <div>
                    <div className="font-medium text-sm text-gray-900">
                      {game.awayTeam} @ {game.homeTeam}
                    </div>
                    <div className="text-xs text-gray-600">
                      {format(game.date, "MMM d")} • {game.time}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{game.venue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
