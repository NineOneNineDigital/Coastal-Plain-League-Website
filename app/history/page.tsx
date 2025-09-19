import { Award, Calendar, Star, Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "League History - Coastal Plain League",
  description:
    "Discover the rich history of the Coastal Plain League from its origins in 1937 to today's premier summer collegiate baseball league.",
  openGraph: {
    title: "League History - Coastal Plain League",
    description:
      "Discover the rich history of the Coastal Plain League from its origins in 1937 to today's premier summer collegiate baseball league.",
  },
};

const originalTeams = [
  "Ayden",
  "Edenton",
  "Fayetteville",
  "Goldsboro",
  "Greenville",
  "Kinston",
  "New Bern",
  "Roanoke Rapids",
  "Rocky Mount",
  "Snow Hill",
  "Tarboro",
  "Williamston",
  "Wilson",
];

const continuingMarkets = [
  "Edenton",
  "Fayetteville",
  "Greenville",
  "New Bern",
  "Rocky Mount",
  "Wilson",
];

const notableAlumni = [
  {
    name: "Justin Verlander",
    achievement: "AL MVP, Cy Young Winner, World Series Champion",
  },
  { name: "Ryan Zimmerman", achievement: "Mr. National" },
  { name: "Mark Reynolds", achievement: "MLB All-Star" },
  { name: "Kevin Youkilis", achievement: "MLB All-Star" },
  { name: "Alec Bohm", achievement: "MLB Third Baseman" },
  { name: "Nicky Lopez", achievement: "MLB Infielder" },
  { name: "Jake Cave", achievement: "MLB Outfielder" },
  { name: "Russell Wilson", achievement: "NFL Super Bowl Champion" },
];

const timelineEvents = [
  {
    year: "1937",
    event: "Original Coastal Plain League begins operations as Class D league",
  },
  {
    year: "1941",
    event:
      "Wilson Tobs achieve legendary 87-30 record, ranked #82 all-time minor league team",
  },
  {
    year: "1942-1945",
    event: "League suspends operations due to World War II",
  },
  { year: "1946", event: "League returns after the war" },
  { year: "1952", event: "Original league ceases operations" },
  {
    year: "1997",
    event: "New Coastal Plain League founded as collegiate summer league",
  },
  { year: "2013", event: "Justin Sellers named Commissioner" },
  {
    year: "2022",
    event:
      "Capitol Broadcasting Company purchases league, Chip Allen named Commissioner",
  },
  {
    year: "2024",
    event: "League celebrates 28th season with 15 teams across four states",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              League History
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From humble beginnings in 1937 to today's premier summer
              collegiate baseball league
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>87 Years of Baseball</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>Rich Tradition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* A Salute to History */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
              <Trophy className="w-10 h-10 mr-4" />A Salute to History
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  The original Coastal Plain League competed from 1937 to 1941,
                  and then, like most of baseball's other minor leagues,
                  suspended operations due to World War II. It would later
                  return in 1946 and continue to operate through 1952.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  During that time, the original CPL was a Class D league that
                  featured teams in thirteen cities across North Carolina. Many
                  big names have come through the ballparks that were and still
                  are in the Coastal Plain League, including{" "}
                  <strong className="text-cpl-navy">
                    Babe Ruth, Ted Williams, and Cal Ripken, Sr.
                  </strong>
                </p>

                <div className="bg-cpl-light-gray rounded-lg p-6">
                  <h3 className="text-xl font-bold cpl-navy mb-4">
                    Legendary 1941 Wilson Tobs
                  </h3>
                  <p className="text-gray-700 mb-4">
                    One of the original clubs, the 1941 Wilson Tobs was voted{" "}
                    <strong>
                      number 82 of the top 100 teams in the history of minor
                      league baseball.
                    </strong>
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-white rounded">
                      <div className="text-2xl font-bold cpl-red">87-30</div>
                      <div className="text-gray-600">Record (.744)</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded">
                      <div className="text-2xl font-bold cpl-red">6</div>
                      <div className="text-gray-600">League Categories Led</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold cpl-navy mb-6">
                  Original CPL Teams (1937-1952)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {originalTeams.map((team) => (
                    <div
                      key={team}
                      className={`p-3 rounded-lg text-center font-medium ${
                        continuingMarkets.includes(team)
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {team}
                      {continuingMarkets.includes(team) && (
                        <div className="text-xs mt-1">Still Active</div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <span className="inline-block w-3 h-3 bg-green-100 border border-green-200 rounded mr-2"></span>
                  Six markets continue to host CPL teams today
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-8 text-center">
            Historical Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cpl-navy"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold cpl-secondary mb-2">
                        {event.year}
                      </div>
                      <p className="text-gray-700">{event.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-cpl-secondary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Today's CPL */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
              <Star className="w-10 h-10 mr-4" />
              Today's Coastal Plain League
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
                <div className="text-4xl font-bold cpl-secondary mb-2">28</div>
                <div className="text-gray-700">Seasons (1997-2024)</div>
              </div>
              <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
                <div className="text-4xl font-bold cpl-secondary mb-2">15</div>
                <div className="text-gray-700">Current Teams</div>
              </div>
              <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
                <div className="text-4xl font-bold cpl-secondary mb-2">
                  500K+
                </div>
                <div className="text-gray-700">Annual Attendance</div>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The new and revived Coastal Plain League is a collegiate summer
                league, featuring top-notched college players from across the
                nation. The CPL returned in 1997 to fill a void in summer
                baseball in the Southeastern United States.
              </p>

              <p>
                Former league president <strong>Pete Bock</strong> first got the
                idea for the CPL in the early 1990's when his son, Jeff, a
                pitcher for Barton College, was spending his summers playing in
                the Valley League. After making several long trips to see his
                son play, Bock, a long-time minor league sports executive, began
                wishing there was a summer league closer to home.
              </p>

              <p>
                A few years later, he partnered with league Chairman and CEO{" "}
                <strong>Jerry Petitt</strong> to form the new Coastal Plain
                League. <strong>Justin Sellers</strong> was named Commissioner
                in 2013 after spending the previous 11 seasons in the league
                office.
              </p>

              <p>
                On October 6, 2022,{" "}
                <strong>Capitol Broadcasting Company (CBC)</strong> closed on
                the purchase to own and operate the Coastal Plain League.{" "}
                <strong>Chip Allen</strong>, formerly the Assistant General
                Manager, Sales for the Durham Bulls was named Commissioner, with
                Sellers remaining as Deputy Commissioner.
              </p>
            </div>
          </div>
        </section>

        {/* League Stats */}
        <section className="mb-16">
          <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-8 text-center">
            League Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold cpl-secondary mb-2">
                1,750+
              </div>
              <div className="text-gray-700 font-medium">Alumni Drafted</div>
              <div className="text-sm text-gray-500 mt-1">by MLB teams</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold cpl-secondary mb-2">185</div>
              <div className="text-gray-700 font-medium">Major Leaguers</div>
              <div className="text-sm text-gray-500 mt-1">CPL alumni</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold cpl-secondary mb-2">48</div>
              <div className="text-gray-700 font-medium">Game Schedule</div>
              <div className="text-sm text-gray-500 mt-1">May - August</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold cpl-secondary mb-2">4</div>
              <div className="text-gray-700 font-medium">States</div>
              <div className="text-sm text-gray-500 mt-1">GA, NC, SC, VA</div>
            </div>
          </div>
        </section>

        {/* Notable Alumni */}
        <section>
          <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-8 text-center flex items-center justify-center">
            <Award className="w-10 h-10 mr-4" />
            Notable Alumni
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {notableAlumni.map((alum, index) => (
                <div
                  key={alum.name}
                  className="flex items-center p-4 bg-cpl-light-gray rounded-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cpl-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg cpl-navy">{alum.name}</h3>
                    <p className="text-gray-600 text-sm">{alum.achievement}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cpl-primary to-cpl-secondary rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Professional Development
              </h3>
              <p className="text-gray-200 leading-relaxed">
                The Coastal Plain League prides itself in returning players to
                their respective schools as better, well-rounded individuals who
                can instantly help their program succeed on and off the field;
                as well as be successful at the next level of baseball.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
