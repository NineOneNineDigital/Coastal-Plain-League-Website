"use client";

import {
  BarChart3,
  Calendar,
  ShoppingBag,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    icon: Calendar,
    title: "Schedule",
    description: "View upcoming games",
    href: "/schedule",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  },
  {
    icon: Trophy,
    title: "Standings",
    description: "Current league standings",
    href: "/standings",
    color: "bg-yellow-500",
    hoverColor: "hover:bg-yellow-600",
  },
  {
    icon: BarChart3,
    title: "Statistics",
    description: "Player & team stats",
    href: "/stats",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    icon: Ticket,
    title: "Tickets",
    description: "Buy game tickets",
    href: "/tickets",
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600",
  },
  {
    icon: Users,
    title: "Teams",
    description: "Explore all teams",
    href: "/teams",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description: "Official merchandise",
    href: "/shop",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
  },
];

const QuickActionsBar = () => {
  return (
    <section className="bg-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bebas-neue font-bold text-cpl-navy mb-2">
            Quick Access
          </h2>
          <p className="text-gray-600">
            Everything you need for CPL baseball in one place
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.title}
              href={action.href}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100"
            >
              <div
                className={`w-12 h-12 ${action.color} ${action.hoverColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-cpl-navy transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                {action.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cpl-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* Additional quick links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/news"
            className="inline-flex items-center px-4 py-2 bg-cpl-light-gray hover:bg-cpl-navy hover:text-white rounded-full text-sm font-medium transition-colors duration-200"
          >
            Latest News
          </Link>
          <Link
            href="/media"
            className="inline-flex items-center px-4 py-2 bg-cpl-light-gray hover:bg-cpl-navy hover:text-white rounded-full text-sm font-medium transition-colors duration-200"
          >
            Media Center
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-cpl-light-gray hover:bg-cpl-navy hover:text-white rounded-full text-sm font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickActionsBar;
