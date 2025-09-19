"use client";

import { format } from "date-fns";
import { ArrowRight, Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const communityEvents = [
  {
    id: 1,
    title: "Youth Baseball Clinic",
    team: "Savannah Bananas",
    date: "2024-07-30",
    time: "9:00 AM - 12:00 PM",
    location: "Grayson Stadium",
    city: "Savannah, GA",
    image:
      "https://images.pexels.com/photos/163515/baseball-player-pitcher-ball-163515.jpeg",
    description:
      "Free baseball clinic for kids ages 8-14. Learn from CPL players and coaches.",
    type: "Youth Development",
    capacity: "50 participants",
    price: "Free",
    registrationRequired: true,
    slug: "youth-clinic-savannah",
  },
  {
    id: 2,
    title: "Military Appreciation Night",
    team: "Peninsula Pilots",
    date: "2024-08-02",
    time: "6:00 PM - 9:00 PM",
    location: "War Memorial Stadium",
    city: "Hampton, VA",
    image: "https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg",
    description:
      "Special tribute to our military heroes with discounted tickets and ceremonies.",
    type: "Community Service",
    capacity: "2,500 attendees",
    price: "$5 (military), $10 (general)",
    registrationRequired: false,
    slug: "military-appreciation-pilots",
  },
  {
    id: 3,
    title: "Baseball Card Show",
    team: "Wilson Tobs",
    date: "2024-08-05",
    time: "10:00 AM - 4:00 PM",
    location: "Fleming Stadium",
    city: "Wilson, NC",
    image: "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg",
    description:
      "Collectors showcase featuring vintage cards, autographs, and memorabilia.",
    type: "Fan Engagement",
    capacity: "200 vendors",
    price: "$8 admission",
    registrationRequired: false,
    slug: "card-show-wilson",
  },
  {
    id: 4,
    title: "Senior Citizens Day",
    team: "Macon Bacon",
    date: "2024-08-08",
    time: "1:00 PM - 4:00 PM",
    location: "Luther Williams Field",
    city: "Macon, GA",
    image:
      "https://images.pexels.com/photos/163515/baseball-player-pitcher-ball-163515.jpeg",
    description:
      "Special afternoon game with senior-friendly pricing and activities.",
    type: "Community Outreach",
    capacity: "1,500 attendees",
    price: "$5 (seniors), $8 (general)",
    registrationRequired: false,
    slug: "senior-day-macon",
  },
];

const CommunityEvents = () => {
  const [selectedType, setSelectedType] = useState("All");

  const eventTypes = [
    "All",
    "Youth Development",
    "Community Service",
    "Fan Engagement",
    "Community Outreach",
  ];

  const filteredEvents =
    selectedType === "All"
      ? communityEvents
      : communityEvents.filter((event) => event.type === selectedType);

  return (
    <section className="bg-gradient-to-br from-cpl-light-gray to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold text-cpl-navy mb-4">
            Community Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for special events that bring baseball and community
            together
          </p>
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedType === type
                  ? "bg-cpl-navy text-white"
                  : "bg-white text-gray-700 hover:bg-cpl-light-gray border border-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Event Image */}
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cpl-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-cpl-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {event.price}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cpl-navy mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-cpl-red" />
                    <span>
                      {format(new Date(event.date), "EEEE, MMMM d, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-cpl-red" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-cpl-red" />
                    <span>
                      {event.location}, {event.city}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-3 text-cpl-red" />
                    <span>{event.capacity}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  {event.registrationRequired ? (
                    <Link
                      href={`/events/${event.slug}`}
                      className="flex-1 bg-cpl-navy hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-center"
                    >
                      Register Now
                    </Link>
                  ) : (
                    <Link
                      href={`/events/${event.slug}`}
                      className="flex-1 bg-cpl-navy hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-center"
                    >
                      Learn More
                    </Link>
                  )}
                  <Link
                    href="/events"
                    className="flex items-center justify-center px-4 py-2 border-2 border-cpl-navy text-cpl-navy hover:bg-cpl-navy hover:text-white rounded-lg font-semibold transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Impact Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6 text-center">
            Community Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cpl-red mb-2">500+</div>
              <div className="text-gray-600">Youth Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cpl-red mb-2">$50K+</div>
              <div className="text-gray-600">Raised for Charity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cpl-red mb-2">100+</div>
              <div className="text-gray-600">Events Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cpl-red mb-2">15</div>
              <div className="text-gray-600">Community Partners</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cpl-navy to-blue-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bebas-neue font-bold mb-4">
              Host Your Own Event
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Want to partner with the CPL for a community event? We'd love to
              work with you to create memorable experiences.
            </p>
            <Link
              href="/contact"
              className="bg-cpl-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              <Star className="w-5 h-5 mr-2" />
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
