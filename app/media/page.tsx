import {
  Award,
  Calendar,
  Camera,
  Download,
  FileText,
  Image as ImageIcon,
  Mail,
  Newspaper,
  Phone,
  Users,
  Video,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Center - Coastal Plain League",
  description:
    "Media resources, press releases, photos, videos, and contact information for journalists covering the Coastal Plain League.",
  openGraph: {
    title: "Media Center - Coastal Plain League",
    description:
      "Media resources, press releases, photos, videos, and contact information for journalists covering the Coastal Plain League.",
  },
};

const pressReleases = [
  {
    id: 1,
    title: "Coastal Plain League Announces 2024 Championship Series Matchup",
    date: "2024-07-21",
    excerpt:
      "The Savannah Bananas and Wilson Tobs will face off in the 2024 CPL Championship Series beginning July 25th.",
    downloadUrl: "/media/press-releases/2024-championship-series.pdf",
    category: "Championship",
  },
  {
    id: 2,
    title: "Jake Morrison Named 2024 CPL Pitcher of the Year",
    date: "2024-07-20",
    excerpt:
      "Macon Bacon ace Jake Morrison earns top pitching honor after dominant season with 1.89 ERA and 89 strikeouts.",
    downloadUrl: "/media/press-releases/pitcher-of-year-2024.pdf",
    category: "Awards",
  },
  {
    id: 3,
    title: "CPL Sets New Attendance Record for 2024 Season",
    date: "2024-07-19",
    excerpt:
      "League surpasses 500,000 fans for the sixth consecutive season, highlighting growing popularity of summer collegiate baseball.",
    downloadUrl: "/media/press-releases/attendance-record-2024.pdf",
    category: "League News",
  },
  {
    id: 4,
    title: "2024 CPL All-Star Game Showcases Top Talent",
    date: "2024-07-15",
    excerpt:
      "Annual showcase features 50 of the league's best players, with several expected to be selected in upcoming MLB Draft.",
    downloadUrl: "/media/press-releases/all-star-game-2024.pdf",
    category: "All-Star Game",
  },
];

const mediaAssets = [
  {
    type: "photos",
    title: "High-Resolution Photos",
    description: "Action shots, team photos, and stadium images",
    count: "250+ images",
    icon: Camera,
    downloadUrl: "/media/photos/cpl-photo-gallery.zip",
  },
  {
    type: "videos",
    title: "Video Highlights",
    description: "Game highlights, interviews, and promotional content",
    count: "50+ videos",
    icon: Video,
    downloadUrl: "/media/videos/cpl-video-package.zip",
  },
  {
    type: "logos",
    title: "Logos & Graphics",
    description: "League and team logos in various formats",
    count: "100+ files",
    icon: ImageIcon,
    downloadUrl: "/media/logos/cpl-brand-package.zip",
  },
  {
    type: "stats",
    title: "Statistics Package",
    description: "Current season stats, records, and historical data",
    count: "Updated daily",
    icon: FileText,
    downloadUrl: "/media/stats/cpl-stats-package.pdf",
  },
];

const mediaContacts = [
  {
    name: "Sarah Mitchell",
    title: "Director of Communications",
    email: "smitchell@coastalplain.com",
    phone: "(919) 555-0124",
    specialties: [
      "Press releases",
      "League announcements",
      "General inquiries",
    ],
  },
  {
    name: "Mike Rodriguez",
    title: "Media Relations Manager",
    email: "mrodriguez@coastalplain.com",
    phone: "(919) 555-0125",
    specialties: ["Player interviews", "Game coverage", "Statistics"],
  },
  {
    name: "Jennifer Adams",
    title: "Digital Content Coordinator",
    email: "jadams@coastalplain.com",
    phone: "(919) 555-0126",
    specialties: ["Social media", "Digital assets", "Video content"],
  },
];

const upcomingEvents = [
  {
    date: "2024-07-25",
    event: "Championship Series Game 1",
    location: "Savannah, GA",
    time: "7:00 PM EST",
    mediaOpportunities: [
      "Pre-game interviews",
      "Post-game press conference",
      "Photo opportunities",
    ],
  },
  {
    date: "2024-07-27",
    event: "Championship Series Game 2",
    location: "Wilson, NC",
    time: "7:00 PM EST",
    mediaOpportunities: [
      "Manager availability",
      "Player interviews",
      "Championship ceremony",
    ],
  },
  {
    date: "2024-08-15",
    event: "CPL Awards Banquet",
    location: "Raleigh, NC",
    time: "6:00 PM EST",
    mediaOpportunities: [
      "Award presentations",
      "Player/coach interviews",
      "Season recap",
    ],
  },
];

const quickFacts = [
  { label: "Founded", value: "1997 (revived)" },
  { label: "Teams", value: "15" },
  { label: "States", value: "4 (GA, NC, SC, VA)" },
  { label: "Season Length", value: "48 games" },
  { label: "Alumni Drafted", value: "1,750+" },
  { label: "MLB Alumni", value: "185" },
  { label: "Annual Attendance", value: "500,000+" },
  { label: "Commissioner", value: "Chip Allen" },
];

export default function MediaCenterPage() {
  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              Media Center
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your source for press releases, media assets, statistics, and
              contact information for covering the Coastal Plain League
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Newspaper className="w-4 h-4" />
                <span>Press Resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4" />
                <span>Media Assets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Media Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
            <Users className="w-8 h-8 mr-3" />
            Media Contacts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaContacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold cpl-navy mb-2">
                  {contact.name}
                </h3>
                <p className="text-gray-600 mb-4">{contact.title}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cpl-secondary" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-cpl-secondary hover:text-green-700 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cpl-secondary" />
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-cpl-secondary hover:text-green-700 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Specialties:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {contact.specialties.map((specialty, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-cpl-secondary rounded-full mr-2"></div>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bebas-neue font-bold cpl-navy flex items-center">
              <Newspaper className="w-8 h-8 mr-3" />
              Recent Press Releases
            </h2>
            <Link
              href="/media/press-releases"
              className="text-cpl-secondary hover:text-green-700 font-semibold transition-colors"
            >
              View All Releases
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="bg-white rounded-lg shadow-lg p-6 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-cpl-secondary/10 text-cpl-secondary">
                    {release.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(release.date).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-lg font-bold cpl-navy mb-3 line-clamp-2">
                  {release.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {release.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href={release.downloadUrl}
                    className="inline-flex items-center text-cpl-secondary hover:text-green-700 font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Assets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
            <Camera className="w-8 h-8 mr-3" />
            Media Assets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map((asset) => (
              <div
                key={asset.type}
                className="bg-white rounded-lg shadow-lg p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-cpl-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <asset.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold cpl-navy mb-2">
                  {asset.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {asset.description}
                </p>
                <p className="text-cpl-secondary font-semibold text-sm mb-4">
                  {asset.count}
                </p>

                <a
                  href={asset.downloadUrl}
                  className="inline-flex items-center btn-primary text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Media Events */}
          <section>
            <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
              <Calendar className="w-8 h-8 mr-3" />
              Upcoming Media Events
            </h2>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold cpl-navy mb-1">
                        {event.event}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {event.location} • {event.time}
                      </p>
                    </div>
                    <span className="bg-cpl-secondary/10 text-cpl-secondary px-3 py-1 rounded-full text-sm font-semibold">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Media Opportunities:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {event.mediaOpportunities.map((opportunity, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-cpl-secondary rounded-full mr-2"></div>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Facts */}
          <section>
            <h2 className="text-3xl font-bebas-neue font-bold cpl-navy mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3" />
              Quick Facts
            </h2>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 gap-4">
                {quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-700 font-medium">
                      {fact.label}
                    </span>
                    <span className="font-bold cpl-navy">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Guidelines */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold cpl-navy mb-4">
                Media Guidelines
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Credential Requests:</strong> Submit requests 48 hours
                  in advance to media@coastalplain.com
                </p>
                <p>
                  <strong>Photo/Video Policy:</strong> Media credentials
                  required for professional equipment
                </p>
                <p>
                  <strong>Interview Requests:</strong> Contact media relations
                  24 hours prior to games
                </p>
                <p>
                  <strong>Press Box Access:</strong> Limited to credentialed
                  media only
                </p>
                <p>
                  <strong>Live Streaming:</strong> Requires prior approval from
                  league office
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-cpl-primary to-cpl-secondary rounded-lg p-12 text-white text-center">
            <h2 className="text-4xl font-bebas-neue font-bold mb-6">
              Need Additional Resources?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Our media relations team is here to help with interviews,
              additional assets, statistics, and any other resources you need
              for your coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:media@coastalplain.com" className="btn-secondary">
                <Mail className="w-5 h-5 mr-2" />
                Email Media Relations
              </a>
              <a href="tel:+19195550124" className="btn-secondary">
                <Phone className="w-5 h-5 mr-2" />
                Call Media Hotline
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>
                Media Hotline: <strong>(919) 555-0124</strong> | Email:{" "}
                <strong>media@coastalplain.com</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
