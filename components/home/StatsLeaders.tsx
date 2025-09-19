import Image from "next/image";
import Link from "next/link";

const battingLeaders = [
  {
    name: "Miguel Santos",
    team: "Savannah Bananas",
    position: "OF",
    stat: ".387",
    category: "Batting Average",
    image: "/images/josh-hemsley-e-f17L4EBBc-unsplash.jpg",
  },
  {
    name: "Tyler Johnson",
    team: "Wilson Tobs",
    position: "1B",
    stat: "18",
    category: "Home Runs",
    image: "/images/josh-hemsley-ehGY57IZoKc-unsplash.jpg",
  },
  {
    name: "Carlos Rodriguez",
    team: "Peninsula Pilots",
    position: "SS",
    stat: "52",
    category: "RBIs",
    image: "/images/keith-johnston-PenZT_IMrV8-unsplash.jpg",
  },
];

const pitchingLeaders = [
  {
    name: "Jake Morrison",
    team: "Macon Bacon",
    position: "P",
    stat: "1.89",
    category: "ERA",
    image: "/images/josh-hemsley-e-f17L4EBBc-unsplash.jpg",
  },
  {
    name: "David Chen",
    team: "Columbia Blowfish",
    position: "P",
    stat: "89",
    category: "Strikeouts",
    image: "/images/josh-hemsley-ehGY57IZoKc-unsplash.jpg",
  },
  {
    name: "Alex Thompson",
    team: "Petersburg Generals",
    position: "P",
    stat: "8",
    category: "Wins",
    image: "/images/keith-johnston-PenZT_IMrV8-unsplash.jpg",
  },
];

const StatsLeaders = () => {
  return (
    <section className="py-16 bg-cpl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold cpl-primary mb-4">
            Statistical Leaders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Top performers setting the pace across the league in key offensive
            and pitching categories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Batting Leaders */}
          <div>
            <h3 className="text-2xl font-bold cpl-primary mb-6 flex items-center">
              <span className="w-4 h-4 bg-cpl-secondary rounded-full mr-3"></span>
              Offensive Leaders
            </h3>
            <div className="space-y-4">
              {battingLeaders.map((player, index) => (
                <div
                  key={`${player.name}-${player.category}`}
                  className="bg-white rounded-lg p-6 shadow-md card-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold cpl-primary">
                            {player.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {player.position} • {player.team}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {player.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold cpl-secondary">
                            {player.stat}
                          </div>
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                              index === 0
                                ? "bg-yellow-100 text-yellow-800"
                                : index === 1
                                ? "bg-gray-100 text-gray-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            #{index + 1} in CPL
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pitching Leaders */}
          <div>
            <h3 className="text-2xl font-bold cpl-navy mb-6 flex items-center">
              <span className="w-4 h-4 bg-cpl-navy rounded-full mr-3"></span>
              Pitching Leaders
            </h3>
            <div className="space-y-4">
              {pitchingLeaders.map((player, index) => (
                <div
                  key={`${player.name}-${player.category}`}
                  className="bg-white rounded-lg p-6 shadow-md card-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold cpl-primary">
                            {player.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {player.position} • {player.team}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {player.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold cpl-secondary">
                            {player.stat}
                          </div>
                          <div
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                              index === 0
                                ? "bg-yellow-100 text-yellow-800"
                                : index === 1
                                ? "bg-gray-100 text-gray-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            #{index + 1} in CPL
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/stats" className="btn-primary">
            View All Statistics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsLeaders;
