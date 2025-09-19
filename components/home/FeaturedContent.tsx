import { format } from "date-fns";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredNews = [
  {
    id: 1,
    title: "Savannah Bananas Secure Playoff Spot with Dominant Victory",
    excerpt:
      "The Bananas clinched their playoff berth with a commanding 8-2 win over the Peninsula Pilots, showcasing exceptional pitching and timely hitting.",
    image: "/images/daiji-umemoto-f0aE-bu7sco-unsplash.jpg",
    author: "Mike Johnson",
    date: "2024-07-20",
    category: "Game Recap",
    slug: "bananas-secure-playoff-spot",
  },
  {
    id: 2,
    title: "Draft Prospect Spotlight: Tommy Rodriguez Shows Promise",
    excerpt:
      "The Wilson Tobs shortstop has MLB scouts taking notice with his impressive defensive play and clutch hitting throughout the season.",
    image: "/images/leio-mclaren-d3fpWcA4vyA-unsplash.jpg",
    author: "Sarah Davis",
    date: "2024-07-19",
    category: "Player Feature",
    slug: "tommy-rodriguez-prospect-spotlight",
  },
  {
    id: 3,
    title: "All-Star Game Selection Process Underway",
    excerpt:
      "Fans and coaches are voting for the 2024 CPL All-Star Game rosters, with several standout performers leading the way in early balloting.",
    image: "/images/joshua-peacock-aMuXhFkbxEw-unsplash (1).jpg",
    author: "David Wilson",
    date: "2024-07-18",
    category: "League News",
    slug: "all-star-game-selection-process",
  },
  {
    id: 4,
    title: "Record Attendance at Forest City Owls Home Game",
    excerpt:
      "The Owls set a new single-game attendance record as over 4,500 fans packed the stadium for their matchup against the Hi-Toms.",
    image: "/images/joshua-peacock-aMuXhFkbxEw-unsplash (1).jpg",
    author: "Lisa Chen",
    date: "2024-07-17",
    category: "Stadium News",
    slug: "record-attendance-forest-city",
  },
];

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-cpl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4">
            Latest News
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay up to date with the latest stories, player highlights, and
            league updates from across the CPL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Article */}
          <div className="lg:col-span-1">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden card-hover h-full">
              <div className="relative h-64">
                <Image
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cpl-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredNews[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold cpl-navy mb-3 line-clamp-2">
                  <Link
                    href={`/news/${featuredNews[0].slug}`}
                    className="hover:text-cpl-red transition-colors"
                  >
                    {featuredNews[0].title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {featuredNews[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredNews[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {format(new Date(featuredNews[0].date), "PPP")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary Articles */}
          <div className="space-y-6">
            {featuredNews.slice(1, 4).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                <div className="flex">
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="font-semibold cpl-primary text-sm mb-2 line-clamp-2">
                      <Link
                        href={`/news/${article.slug}`}
                        className="hover:text-cpl-secondary transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span>{article.author}</span>
                      <span>{format(new Date(article.date), "PPP")}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/news" className="btn-primary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
