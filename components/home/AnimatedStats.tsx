"use client";

import { Target, TrendingUp, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  icon: React.ComponentType<any>;
  label: string;
  description: string;
  color: string;
}

const AnimatedStat = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  icon: Icon,
  label,
  description,
  color,
}: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(
      `stat-${label.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(value * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div
        className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      <div className="text-4xl font-bold text-cpl-navy mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>

      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const AnimatedStats = () => {
  const stats = [
    {
      value: 1750,
      suffix: "+",
      icon: Trophy,
      label: "Alumni Drafted",
      description: "Players selected in MLB Draft",
      color: "bg-yellow-500",
    },
    {
      value: 500000,
      suffix: "+",
      icon: Users,
      label: "Annual Attendance",
      description: "Fans across all venues",
      color: "bg-blue-500",
    },
    {
      value: 28,
      icon: Target,
      label: "Seasons",
      description: "Years of premier baseball",
      color: "bg-green-500",
    },
    {
      value: 15,
      icon: TrendingUp,
      label: "Teams",
      description: "Across 4 states",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-cpl-light-gray to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold text-cpl-navy mb-4">
            League Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that showcase the Coastal Plain League's growth and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <AnimatedStat {...stat} />
            </div>
          ))}
        </div>

        {/* Additional animated elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Live stats updated in real-time
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
