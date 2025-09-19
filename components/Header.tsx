"use client";

"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);

  const teams = [
    { name: "Asheville Turkeys", slug: "asheville-turkeys" },
    { name: "Columbia Blowfish", slug: "columbia-blowfish" },
    { name: "Forest City Owls", slug: "forest-city-owls" },
    { name: "Greenville Drive", slug: "greenville-drive" },
    { name: "High Point-Thomasville HiToms", slug: "hi-toms" },
    { name: "Macon Bacon", slug: "macon-bacon" },
    { name: "Martinsville Mustangs", slug: "martinsville-mustangs" },
    { name: "Peninsula Pilots", slug: "peninsula-pilots" },
    { name: "Petersburg Generals", slug: "petersburg-generals" },
    { name: "Savannah Bananas", slug: "savannah-bananas" },
    { name: "Tri-City Chili Peppers", slug: "tri-city-chili-peppers" },
    { name: "Wilson Tobs", slug: "wilson-tobs" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cpl-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CPL</span>
              </div>
              <span className="font-bebas-neue font-bold text-xl cpl-primary hidden sm:block">
                Coastal Plain League
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsTeamsOpen(true)}
                onMouseLeave={() => setIsTeamsOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-cpl-navy transition-colors"
              >
                <span>Teams</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isTeamsOpen && (
                <div
                  onMouseEnter={() => setIsTeamsOpen(true)}
                  onMouseLeave={() => setIsTeamsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                >
                  <div className="py-2">
                    {teams.map((team) => (
                      <Link
                        key={team.slug}
                        href={`/teams/${team.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-cpl-light-gray hover:text-cpl-navy transition-colors"
                      >
                        {team.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/schedule"
              className="text-gray-700 hover:text-cpl-navy transition-colors"
            >
              Schedule
            </Link>
            <Link
              href="/standings"
              className="text-gray-700 hover:text-cpl-primary transition-colors"
            >
              Standings
            </Link>
            <Link
              href="/stats"
              className="text-gray-700 hover:text-cpl-primary transition-colors"
            >
              Stats
            </Link>
            <Link
              href="/news"
              className="text-gray-700 hover:text-cpl-primary transition-colors"
            >
              News
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-cpl-primary transition-colors"
            >
              Shop
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-cpl-primary transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <Link
                href="/teams"
                className="block px-3 py-2 text-gray-700 hover:text-cpl-primary"
              >
                Teams
              </Link>
              <Link
                href="/schedule"
                className="block px-3 py-2 text-gray-700 hover:text-cpl-primary"
              >
                Schedule
              </Link>
              <Link
                href="/standings"
                className="block px-3 py-2 text-gray-700 hover:text-cpl-primary"
              >
                Standings
              </Link>
              <Link
                href="/stats"
                className="block px-3 py-2 text-gray-700 hover:text-cpl-primary"
              >
                Stats
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 text-gray-700 hover:text-cpl-primary"
              >
                News
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-cpl-primary"
              >
                Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
