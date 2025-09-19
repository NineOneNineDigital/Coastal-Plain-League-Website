"use client";

import { ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const featuredProducts = [
  {
    id: 1,
    name: "CPL Championship Series T-Shirt",
    team: "League Wide",
    price: 24.99,
    originalPrice: 29.99,
    image:
      "https://images.pexels.com/photos/163515/baseball-player-pitcher-ball-163515.jpeg",
    rating: 4.8,
    reviews: 127,
    isNew: true,
    isOnSale: true,
    colors: ["Navy", "White", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Commemorate the 2024 Championship Series with this premium cotton t-shirt.",
    slug: "cpl-championship-tshirt",
  },
  {
    id: 2,
    name: "Savannah Bananas Jersey",
    team: "Savannah Bananas",
    price: 89.99,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isOnSale: false,
    colors: ["Yellow", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Official replica jersey featuring the iconic Savannah Bananas design.",
    slug: "savannah-bananas-jersey",
  },
  {
    id: 3,
    name: "Wilson Tobs Cap",
    team: "Wilson Tobs",
    price: 32.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isOnSale: true,
    colors: ["Navy", "White"],
    sizes: ["S/M", "L/XL"],
    description: "Classic fitted cap with embroidered Wilson Tobs logo.",
    slug: "wilson-tobs-cap",
  },
  {
    id: 4,
    name: "CPL All-Star Game Hoodie",
    team: "League Wide",
    price: 69.99,
    originalPrice: null,
    image:
      "https://images.pexels.com/photos/163515/baseball-player-pitcher-ball-163515.jpeg",
    rating: 4.6,
    reviews: 73,
    isNew: true,
    isOnSale: false,
    colors: ["Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable hoodie celebrating the 2024 All-Star Game.",
    slug: "cpl-allstar-hoodie",
  },
];

const MerchandiseSpotlight = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold text-cpl-navy mb-4">
            Featured Merchandise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Show your CPL pride with official team gear and league merchandise
          </p>
        </div>

        {/* Featured Product Showcase */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-cpl-light-gray to-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={featuredProducts[selectedProduct].image}
                  alt={featuredProducts[selectedProduct].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {featuredProducts[selectedProduct].isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      New
                    </span>
                  )}
                  {featuredProducts[selectedProduct].isOnSale && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sale
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cpl-navy mb-2">
                      {featuredProducts[selectedProduct].name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {featuredProducts[selectedProduct].team}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i <
                              Math.floor(
                                featuredProducts[selectedProduct].rating
                              )
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {featuredProducts[selectedProduct].rating} (
                        {featuredProducts[selectedProduct].reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl font-bold text-cpl-navy">
                        ${featuredProducts[selectedProduct].price}
                      </span>
                      {featuredProducts[selectedProduct].originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${featuredProducts[selectedProduct].originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {featuredProducts[selectedProduct].description}
                    </p>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Colors:
                    </h4>
                    <div className="flex space-x-2">
                      {featuredProducts[selectedProduct].colors.map((color) => (
                        <button
                          key={color}
                          className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-cpl-navy hover:text-cpl-navy transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sizes:</h4>
                    <div className="flex space-x-2">
                      {featuredProducts[selectedProduct].sizes.map((size) => (
                        <button
                          key={size}
                          className="w-10 h-10 border border-gray-300 rounded text-sm hover:border-cpl-navy hover:text-cpl-navy transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <Link
                      href={`/shop/${featuredProducts[selectedProduct].slug}`}
                      className="flex-1 bg-cpl-navy hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                    >
                      Add to Cart
                    </Link>
                    <button className="w-12 h-12 border-2 border-cpl-navy text-cpl-navy hover:bg-cpl-navy hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                selectedProduct === index ? "ring-2 ring-cpl-navy" : ""
              }`}
              onClick={() => setSelectedProduct(index)}
            >
              {/* Product Image */}
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 flex space-x-1">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      New
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Sale
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{product.team}</p>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-cpl-navy">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Categories */}
        <div className="bg-cpl-light-gray rounded-xl p-8">
          <h3 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6 text-center">
            Shop by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Jerseys", count: "24 items", icon: "👕" },
              { name: "Hats", count: "18 items", icon: "🧢" },
              { name: "Accessories", count: "32 items", icon: "⚾" },
              { name: "Collectibles", count: "15 items", icon: "🏆" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop/${category.name.toLowerCase()}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-gray-900">
                  {category.name}
                </div>
                <div className="text-sm text-gray-600">{category.count}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center bg-cpl-navy hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Visit Full Shop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSpotlight;
