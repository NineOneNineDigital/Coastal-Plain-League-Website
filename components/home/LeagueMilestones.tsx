"use client";

import { Award, Calendar, Star, TrendingUp, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";

const milestones = [
  {
    id: 1,
    title: "Record Attendance Season",
    description: "CPL surpasses 500,000 fans for the sixth consecutive season",
    date: "2024-07-15",
    type: "Attendance",
    icon: Users,
    color: "bg-blue-500",
    impact: "Historic",
  },
  {
    id: 2,
    title: "1,750+ Alumni Drafted",
    description: "Milestone reached in MLB Draft selections from CPL players",
    date: "2024-07-10",
    type: "Development",
    icon: Trophy,
    color: "bg-yellow-500",
    impact: "Major",
  },
  {
    id: 3,
    title: "New Stadium Renovations",
    description: "Three venues complete major facility upgrades",
    date: "2024-06-20",
    type: "Facilities",
    icon: Award,
    color: "bg-green-500",
    impact: "Significant",
  },
  {
    id: 4,
    title: "Community Impact Record",
    description: "Teams contribute over $2M to local communities",
    date: "2024-06-15",
    type: "Community",
    icon: Star,
    color: "bg-purple-500",
    impact: "Historic",
  },
  {
    id: 5,
    title: "Digital Growth Surge",
    description: "Social media following increases 150% this season",
    date: "2024-06-01",
    type: "Digital",
    icon: TrendingUp,
    color: "bg-red-500",
    impact: "Major",
  },
];

const LeagueMilestones = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneId = parseInt(
              entry.target.getAttribute("data-milestone-id") || "0"
            );
            setVisibleMilestones((prev) => [...prev, milestoneId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    milestones.forEach((milestone) => {
      const element = document.getElementById(`milestone-${milestone.id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Historic":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Major":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Significant":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="bg-gradient-to-br from-cpl-navy to-blue-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold mb-4">
            League Milestones
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Celebrating the achievements and growth of the Coastal Plain League
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                id={`milestone-${milestone.id}`}
                data-milestone-id={milestone.id}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg transform transition-all duration-700 ${
                      visibleMilestones.includes(milestone.id)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {/* Impact Badge */}
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border mb-4 ${getImpactColor(
                        milestone.impact
                      )}`}
                    >
                      {milestone.impact} Achievement
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${
                        milestone.color
                      } rounded-full flex items-center justify-center mb-4 ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-200 mb-3">
                      {milestone.description}
                    </p>

                    {/* Date */}
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(milestone.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cpl-red rounded-full border-4 border-white"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">28</div>
            <div className="text-gray-200">Seasons</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">15</div>
            <div className="text-gray-200">Teams</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">4</div>
            <div className="text-gray-200">States</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-cpl-red mb-2">500K+</div>
            <div className="text-gray-200">Annual Fans</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bebas-neue font-bold mb-4">
              Be Part of Our Story
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join the CPL family and help us create more milestones. Whether
              you're a fan, player, or community partner, you're part of our
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/teams"
                className="bg-cpl-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Join a Team
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-cpl-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeagueMilestones;
