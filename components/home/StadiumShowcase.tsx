"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const featuredStadiums = [
  {
    id: 1,
    name: "Grayson Stadium",
    team: "Savannah Bananas",
    location: "Savannah, GA",
    capacity: "4,000",
    image: "/images/daiji-umemoto-f0aE-bu7sco-unsplash.jpg",
    features: [
      "Historic ballpark atmosphere",
      "Premium seating options",
      "Full-service concessions",
      "Family-friendly activities",
    ],
    description:
      "One of the most iconic venues in the CPL, Grayson Stadium offers fans an authentic baseball experience with its historic charm and modern amenities.",
    established: "1926",
    recordAttendance: "4,847",
    slug: "grayson-stadium",
  },
  {
    id: 2,
    name: "Fleming Stadium",
    team: "Wilson Tobs",
    location: "Wilson, NC",
    capacity: "3,000",
    image: "/images/leio-mclaren-d3fpWcA4vyA-unsplash.jpg",
    features: [
      "Intimate seating bowl",
      "Grass berm seating",
      "Local food vendors",
      "Kids play area",
    ],
    description:
      "Fleming Stadium provides an intimate setting where fans can get close to the action while enjoying the community atmosphere that makes CPL baseball special.",
    established: "1939",
    recordAttendance: "3,245",
    slug: "fleming-stadium",
  },
  {
    id: 3,
    name: "War Memorial Stadium",
    team: "Peninsula Pilots",
    location: "Hampton, VA",
    capacity: "2,500",
    image: "/images/joshua-peacock-aMuXhFkbxEw-unsplash (1).jpg",
    features: [
      "Military tribute elements",
      "Modern facilities",
      "Group seating areas",
      "Accessible design",
    ],
    description:
      "War Memorial Stadium honors our nation's heroes while providing a top-notch baseball experience with modern amenities and comfortable seating.",
    established: "1948",
    recordAttendance: "2,678",
    slug: "war-memorial-stadium",
  },
];

const StadiumShowcase = () => {
  const [currentStadium, setCurrentStadium] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const timer = setInterval(() => {
      setCurrentStadium((prev) => (prev + 1) % featuredStadiums.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoRotating]);

  const nextStadium = () => {
    setCurrentStadium((prev) => (prev + 1) % featuredStadiums.length);
    setIsAutoRotating(false);
  };

  const prevStadium = () => {
    setCurrentStadium(
      (prev) => (prev - 1 + featuredStadiums.length) % featuredStadiums.length
    );
    setIsAutoRotating(false);
  };

  const goToStadium = (index: number) => {
    setCurrentStadium(index);
    setIsAutoRotating(false);
  };

  const stadium = featuredStadiums[currentStadium];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold text-cpl-navy mb-4">
            Stadium Spotlight
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the unique atmosphere of CPL ballparks across the
            Southeast
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-cpl-light-gray to-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Stadium Image */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={stadium.image}
                  alt={stadium.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm text-gray-200">Home of the</div>
                  <div className="text-2xl font-bold">{stadium.team}</div>
                  <div className="text-lg">{stadium.name}</div>
                </div>
              </div>

              {/* Stadium Info */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-cpl-navy mb-4">
                      {stadium.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 text-cpl-red" />
                        {stadium.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-cpl-red" />
                        {stadium.capacity} capacity
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-cpl-red" />
                        Est. {stadium.established}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 mr-2 text-cpl-red" />
                        Record: {stadium.recordAttendance}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {stadium.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-cpl-navy mb-3">
                      Stadium Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stadium.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-cpl-red rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <Link
                      href={`/venues/${stadium.slug}`}
                      className="bg-cpl-navy hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/teams"
                      className="border-2 border-cpl-navy text-cpl-navy hover:bg-cpl-navy hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      View All Venues
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevStadium}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-cpl-navy w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextStadium}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-cpl-navy w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Stadium Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredStadiums.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStadium(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStadium
                    ? "bg-cpl-navy scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stadium Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-3xl font-bold text-cpl-navy mb-2">15</div>
            <div className="text-gray-600">Total Venues</div>
          </div>
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-3xl font-bold text-cpl-navy mb-2">4</div>
            <div className="text-gray-600">States</div>
          </div>
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-3xl font-bold text-cpl-navy mb-2">50K+</div>
            <div className="text-gray-600">Total Capacity</div>
          </div>
          <div className="text-center p-6 bg-cpl-light-gray rounded-lg">
            <div className="text-3xl font-bold text-cpl-navy mb-2">1937</div>
            <div className="text-gray-600">Oldest Venue</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StadiumShowcase;
