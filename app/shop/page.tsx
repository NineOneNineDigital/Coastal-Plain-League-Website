import { Filter, Heart, Search, ShoppingCart, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shop - Coastal Plain League",
  description:
    "Official Coastal Plain League merchandise, team gear, and baseball apparel.",
  openGraph: {
    title: "Shop - Coastal Plain League",
    description:
      "Official Coastal Plain League merchandise, team gear, and baseball apparel.",
  },
};

// Sample product data - in a real app, this would come from a CMS or database
const featuredProducts = [
  {
    id: 1,
    name: "CPL Official League Hat",
    price: 29.99,
    originalPrice: 34.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    category: "Headwear",
    isNew: true,
    isSale: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Savannah Bananas Jersey",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/163515/baseball-player-pitcher-ball-163515.jpeg",
    category: "Jerseys",
    isNew: false,
    isSale: false,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Wilson Tobs T-Shirt",
    price: 24.99,
    image: "https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg",
    category: "Apparel",
    isNew: false,
    isSale: false,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "CPL Championship Ring",
    price: 199.99,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    category: "Accessories",
    isNew: true,
    isSale: false,
    rating: 5.0,
    reviews: 23,
  },
];

const categories = [
  { name: "All Products", count: 156, active: true },
  { name: "Jerseys", count: 24, active: false },
  { name: "T-Shirts", count: 45, active: false },
  { name: "Hats", count: 32, active: false },
  { name: "Accessories", count: 28, active: false },
  { name: "Collectibles", count: 27, active: false },
];

const teams = [
  "Savannah Bananas",
  "Wilson Tobs",
  "Peninsula Pilots",
  "Columbia Blowfish",
  "Macon Bacon",
  "Forest City Owls",
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bebas-neue font-bold text-white mb-4">
            Official CPL Shop
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Show your support with official Coastal Plain League merchandise,
            team gear, and exclusive collectibles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-red focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-cpl-navy text-white rounded-lg hover:bg-blue-800 transition-colors">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? "bg-cpl-red text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-cpl-light-gray rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-cpl-navy mb-4">
                Filter by Team
              </h3>
              <div className="space-y-2">
                {teams.map((team, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 text-cpl-red focus:ring-cpl-red"
                    />
                    <span className="text-gray-700">{team}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-cpl-navy mb-4">
                  Price Range
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 text-cpl-red focus:ring-cpl-red"
                    />
                    <span className="text-gray-700">Under $25</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 text-cpl-red focus:ring-cpl-red"
                    />
                    <span className="text-gray-700">$25 - $50</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 text-cpl-red focus:ring-cpl-red"
                    />
                    <span className="text-gray-700">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 text-cpl-red focus:ring-cpl-red"
                    />
                    <span className="text-gray-700">Over $100</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
                Featured Products
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-red focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Best Selling</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-cpl-red text-white px-2 py-1 rounded-full text-xs font-semibold">
                        NEW
                      </div>
                    )}
                    {product.isSale && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        SALE
                      </div>
                    )}
                    <button className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-cpl-navy mb-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-cpl-red">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button className="w-full bg-cpl-navy text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-cpl-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-cpl-primary to-cpl-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bebas-neue font-bold text-white mb-4">
            Stay Updated on New Products
          </h2>
          <p className="text-gray-200 mb-6">
            Be the first to know about new merchandise, exclusive deals, and
            limited edition items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-cpl-red"
            />
            <button className="bg-cpl-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
