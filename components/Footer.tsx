"use client";

import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cpl-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* League Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-cpl-navy font-bold text-sm">CPL</span>
              </div>
              <span className="font-bebas-neue font-bold text-lg">
                Coastal Plain League
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premier summer collegiate baseball league featuring top college
              players from across the nation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/coastalplainleague"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com/cplbaseball"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com/cplbaseball"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@cplbaseball"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/standings"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Standings
                </Link>
              </li>
              <li>
                <Link
                  href="/stats"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/history"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  League History
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Media Center
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news, scores, and updates delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cpl-red"
              />
              <button className="px-4 py-2 bg-cpl-red hover:bg-red-700 rounded-r-lg transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Coastal Plain League. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
