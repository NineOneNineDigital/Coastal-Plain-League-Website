import { format } from "date-fns";
import {
  Award,
  Calendar,
  Clock,
  Tag,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News - Coastal Plain League",
  description:
    "Latest news, updates, and stories from the Coastal Plain League including game recaps, player features, and league announcements.",
  openGraph: {
    title: "News - Coastal Plain League",
    description:
      "Latest news, updates, and stories from the Coastal Plain League including game recaps, player features, and league announcements.",
  },
};

const featuredArticle = {
  id: 1,
  title: "Championship Series Set: Savannah Bananas vs Wilson Tobs",
  excerpt:
    "Two powerhouse teams with contrasting styles will clash in what promises to be an epic championship series. The Bananas bring their high-powered offense while the Tobs counter with dominant pitching.",
  content:
    "The stage is set for what could be the most exciting championship series in Coastal Plain League history...",
  image: "/images/daiji-umemoto-f0aE-bu7sco-unsplash.jpg",
  author: "Mike Johnson",
  date: "2024-07-21",
  category: "Championship",
  readTime: "5 min read",
  slug: "championship-series-bananas-vs-tobs",
  featured: true,
};

const newsArticles = [
  {
    id: 2,
    title: "Jake Morrison Named CPL Pitcher of the Year",
    excerpt:
      "The Macon Bacon ace dominated throughout the season with a 1.89 ERA and 89 strikeouts, earning him the league's top pitching honor.",
    image: "/images/josh-hemsley-e-f17L4EBBc-unsplash.jpg",
    author: "Sarah Davis",
    date: "2024-07-20",
    category: "Awards",
    readTime: "3 min read",
    slug: "jake-morrison-pitcher-of-year",
  },
  {
    id: 3,
    title: "Record Attendance Marks Successful 2024 Season",
    excerpt:
      "The Coastal Plain League saw its highest attendance figures in league history, with over 500,000 fans attending games across all venues.",
    image: "/images/josh-hemsley-ehGY57IZoKc-unsplash.jpg",
    author: "David Wilson",
    date: "2024-07-19",
    category: "League News",
    readTime: "4 min read",
    slug: "record-attendance-2024-season",
  },
  {
    id: 4,
    title: "All-Star Game Highlights Rising Talent",
    excerpt:
      "The 2024 CPL All-Star Game showcased the incredible depth of talent in the league, with several players expected to be drafted in the upcoming MLB Draft.",
    image: "/images/keith-johnston-PenZT_IMrV8-unsplash.jpg",
    author: "Lisa Chen",
    date: "2024-07-18",
    category: "All-Star Game",
    readTime: "6 min read",
    slug: "all-star-game-highlights-talent",
  },
  {
    id: 5,
    title: "Peninsula Pilots Clinch Division Title",
    excerpt:
      "With a dramatic 7-6 victory over the Petersburg Generals, the Peninsula Pilots secured their first division title since 2019.",
    image: "/images/leio-mclaren-d3fpWcA4vyA-unsplash.jpg",
    author: "Tom Rodriguez",
    date: "2024-07-17",
    category: "Game Recap",
    readTime: "4 min read",
    slug: "peninsula-pilots-clinch-division",
  },
  {
    id: 6,
    title: "Rookie Sensation Miguel Santos Making Waves",
    excerpt:
      "The Savannah Bananas outfielder is having a phenomenal rookie season, leading the league in batting average and stolen bases.",
    image: "/images/joshua-peacock-aMuXhFkbxEw-unsplash (1).jpg",
    author: "Jennifer Adams",
    date: "2024-07-16",
    category: "Player Feature",
    readTime: "5 min read",
    slug: "miguel-santos-rookie-sensation",
  },
  {
    id: 7,
    title: "New Stadium Renovations Enhance Fan Experience",
    excerpt:
      "Several CPL venues have completed major renovations this season, featuring improved seating, concessions, and fan amenities.",
    image: "/images/daiji-umemoto-f0aE-bu7sco-unsplash.jpg",
    author: "Mark Thompson",
    date: "2024-07-15",
    category: "Stadium News",
    readTime: "3 min read",
    slug: "stadium-renovations-fan-experience",
  },
  {
    id: 8,
    title: "Community Impact: CPL Teams Give Back",
    excerpt:
      "Coastal Plain League teams have contributed over $2 million to local communities through various charitable initiatives and youth programs.",
    image: "/images/josh-hemsley-e-f17L4EBBc-unsplash.jpg",
    author: "Rachel Green",
    date: "2024-07-14",
    category: "Community",
    readTime: "4 min read",
    slug: "community-impact-teams-give-back",
  },
];

const categories = [
  { name: "All", count: 25, active: true },
  { name: "Game Recap", count: 8, active: false },
  { name: "Player Feature", count: 6, active: false },
  { name: "League News", count: 5, active: false },
  { name: "Awards", count: 3, active: false },
  { name: "Community", count: 3, active: false },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Awards":
      return <Award className="w-4 h-4" />;
    case "Player Feature":
      return <Users className="w-4 h-4" />;
    case "League News":
      return <TrendingUp className="w-4 h-4" />;
    default:
      return <Tag className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Championship":
      return "bg-yellow-100 text-yellow-800";
    case "Awards":
      return "bg-purple-100 text-purple-800";
    case "Player Feature":
      return "bg-blue-100 text-blue-800";
    case "Game Recap":
      return "bg-green-100 text-green-800";
    case "League News":
      return "bg-cpl-red/10 text-cpl-red";
    case "All-Star Game":
      return "bg-orange-100 text-orange-800";
    case "Stadium News":
      return "bg-gray-100 text-gray-800";
    case "Community":
      return "bg-pink-100 text-pink-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              League News
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay up to date with the latest stories, game recaps, player
              features, and league announcements
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Breaking News</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                        featuredArticle.category
                      )}`}
                    >
                      {getCategoryIcon(featuredArticle.category)}
                      <span className="ml-1">{featuredArticle.category}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-cpl-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-8">
                <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-4">
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="hover:text-cpl-red transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {format(new Date(featuredArticle.date), "PPP")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="btn-primary"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-xl font-bold cpl-navy mb-4">
                Browse by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category.active
                        ? "bg-cpl-navy text-white"
                        : "bg-white text-gray-700 hover:bg-cpl-light-gray border border-gray-200"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* News Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                          article.category
                        )}`}
                      >
                        {getCategoryIcon(article.category)}
                        <span className="ml-1">{article.category}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold cpl-navy mb-3 line-clamp-2">
                      <Link
                        href={`/news/${article.slug}`}
                        className="hover:text-cpl-red transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <span>{format(new Date(article.date), "MMM d")}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-secondary">Load More Articles</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Stories */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold cpl-navy mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Trending Stories
              </h3>
              <div className="space-y-4">
                {newsArticles.slice(0, 4).map((article, index) => (
                  <div key={article.id} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cpl-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm cpl-navy line-clamp-2 mb-1">
                        <Link
                          href={`/news/${article.slug}`}
                          className="hover:text-cpl-red transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">
                        {format(new Date(article.date), "MMM d")} •{" "}
                        {article.readTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-cpl-primary to-cpl-secondary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Stay Informed</h3>
              <p className="text-gray-200 text-sm mb-4">
                Get the latest CPL news and updates delivered straight to your
                inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-cpl-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold cpl-primary mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Games Played</span>
                  <span className="font-bold cpl-primary">252</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Attendance</span>
                  <span className="font-bold cpl-primary">523,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Home Runs Hit</span>
                  <span className="font-bold cpl-primary">293</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Perfect Games</span>
                  <span className="font-bold cpl-primary">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
