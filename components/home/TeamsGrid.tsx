import Link from "next/link";

const teams = [
  {
    name: "Asheville Turkeys",
    slug: "asheville-turkeys",
    location: "Asheville, NC",
    colors: ["#8B4513", "#FFA500"],
    record: "22-20",
  },
  {
    name: "Columbia Blowfish",
    slug: "columbia-blowfish",
    location: "Columbia, SC",
    colors: ["#00008B", "#FFFFFF"],
    record: "20-22",
  },
  {
    name: "Forest City Owls",
    slug: "forest-city-owls",
    location: "Forest City, NC",
    colors: ["#654321", "#FFA500"],
    record: "19-23",
  },
  {
    name: "Greenville Drive",
    slug: "greenville-drive",
    location: "Greenville, SC",
    colors: ["#228B22", "#FFFFFF"],
    record: "21-21",
  },
  {
    name: "High Point-Thomasville HiToms",
    slug: "hi-toms",
    location: "High Point, NC",
    colors: ["#DC143C", "#FFFFFF"],
    record: "18-24",
  },
  {
    name: "Macon Bacon",
    slug: "macon-bacon",
    location: "Macon, GA",
    colors: ["#8B0000", "#FFD700"],
    record: "22-20",
  },
  {
    name: "Martinsville Mustangs",
    slug: "martinsville-mustangs",
    location: "Martinsville, VA",
    colors: ["#000080", "#C0C0C0"],
    record: "17-25",
  },
  {
    name: "Peninsula Pilots",
    slug: "peninsula-pilots",
    location: "Hampton, VA",
    colors: ["#4169E1", "#FFFFFF"],
    record: "24-18",
  },
  {
    name: "Petersburg Generals",
    slug: "petersburg-generals",
    location: "Petersburg, VA",
    colors: ["#2F4F4F", "#FFD700"],
    record: "18-24",
  },
  {
    name: "Savannah Bananas",
    slug: "savannah-bananas",
    location: "Savannah, GA",
    colors: ["#FFFF00", "#000000"],
    record: "28-14",
  },
  {
    name: "Tri-City Chili Peppers",
    slug: "tri-city-chili-peppers",
    location: "Colonial Heights, VA",
    colors: ["#DC143C", "#32CD32"],
    record: "16-26",
  },
  {
    name: "Wilson Tobs",
    slug: "wilson-tobs",
    location: "Wilson, NC",
    colors: ["#000080", "#FFD700"],
    record: "26-16",
  },
];

const TeamsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4">
            Our Teams
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Twelve teams across the Southeast competing at the highest level of
            summer collegiate baseball.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden card-hover"
            >
              <div className="relative">
                <div
                  className="h-32 flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${
                      team.colors[0]
                    } 0%, ${team.colors[1] || team.colors[0]} 100%)`,
                  }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bebas-neue font-bold">
                      {team.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-gray-800">
                  {team.record}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold cpl-primary mb-2 group-hover:text-cpl-secondary transition-colors">
                  {team.name}
                </h3>
                <p className="text-gray-600 text-sm flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  {team.location}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Team Colors</span>
                    <div className="flex space-x-2">
                      {team.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/teams" className="btn-secondary">
            View All Teams
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamsGrid;
