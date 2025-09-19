import {
  Award,
  Building2,
  Coffee,
  Handshake,
  Shield,
  Star,
  Target,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsors & Partners - Coastal Plain League",
  description:
    "Meet our valued sponsors and partners who support the Coastal Plain League and help make premier summer collegiate baseball possible.",
  openGraph: {
    title: "Sponsors & Partners - Coastal Plain League",
    description:
      "Meet our valued sponsors and partners who support the Coastal Plain League and help make premier summer collegiate baseball possible.",
  },
};

const titleSponsors = [
  {
    name: "Atlantic Bank & Trust",
    logo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
    description: "Official Banking Partner of the Coastal Plain League",
    website: "https://atlanticbank.com",
    tier: "Title Sponsor",
    partnership: "Since 2019",
  },
  {
    name: "Carolina Sports Network",
    logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    description: "Official Broadcasting Partner",
    website: "https://carolinasports.tv",
    tier: "Media Partner",
    partnership: "Since 2020",
  },
];

const premiumSponsors = [
  {
    name: "Southern Auto Group",
    logo: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    description: "Official Automotive Partner",
    icon: Truck,
    category: "Automotive",
  },
  {
    name: "PowerTech Energy Solutions",
    logo: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    description: "Official Energy Partner",
    icon: Zap,
    category: "Energy",
  },
  {
    name: "Coastal Insurance Group",
    logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
    description: "Official Insurance Partner",
    icon: Shield,
    category: "Insurance",
  },
  {
    name: "Blue Ridge Construction",
    logo: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    description: "Official Construction Partner",
    icon: Building2,
    category: "Construction",
  },
];

const supportingSponsors = [
  {
    name: "Mountain View Coffee Co.",
    logo: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    description: "Official Coffee Partner",
    icon: Coffee,
    category: "Food & Beverage",
  },
  {
    name: "Southeastern Medical Center",
    logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    description: "Official Healthcare Partner",
    icon: Shield,
    category: "Healthcare",
  },
  {
    name: "Atlantic Sporting Goods",
    logo: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg",
    description: "Official Equipment Partner",
    icon: Target,
    category: "Sports Equipment",
  },
  {
    name: "Carolina Tech Solutions",
    logo: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    description: "Official Technology Partner",
    icon: Zap,
    category: "Technology",
  },
  {
    name: "Piedmont Real Estate",
    logo: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
    description: "Official Real Estate Partner",
    icon: Building2,
    category: "Real Estate",
  },
  {
    name: "Coastal Logistics",
    logo: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
    description: "Official Shipping Partner",
    icon: Truck,
    category: "Logistics",
  },
];

const partnershipBenefits = [
  {
    icon: Users,
    title: "Brand Exposure",
    description:
      "Reach over 500,000 fans annually across 15 markets in 4 states",
  },
  {
    icon: Target,
    title: "Targeted Marketing",
    description:
      "Connect with families, college students, and baseball enthusiasts",
  },
  {
    icon: Handshake,
    title: "Community Impact",
    description:
      "Support youth development and community engagement initiatives",
  },
  {
    icon: Award,
    title: "Premium Benefits",
    description:
      "VIP experiences, hospitality opportunities, and exclusive access",
  },
];

const sponsorshipTiers = [
  {
    name: "Title Sponsor",
    price: "$50,000+",
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "League naming rights",
      "Logo on all marketing materials",
      "VIP hospitality at All-Star Game",
      "Championship series presenting rights",
      "Year-round promotional opportunities",
    ],
  },
  {
    name: "Premium Partner",
    price: "$25,000 - $49,999",
    color: "from-gray-400 to-gray-600",
    benefits: [
      "Category exclusivity",
      "Stadium signage at all venues",
      "Digital marketing integration",
      "Player meet & greet opportunities",
      "Season ticket packages",
    ],
  },
  {
    name: "Supporting Partner",
    price: "$10,000 - $24,999",
    color: "from-orange-400 to-orange-600",
    benefits: [
      "Website logo placement",
      "Social media recognition",
      "Game day announcements",
      "Promotional nights",
      "Networking events access",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              Sponsors & Partners
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Meet the valued partners who support the Coastal Plain League and
              help make premier summer collegiate baseball possible
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <Handshake className="w-4 h-4" />
                <span>Strategic Partnerships</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Sponsors */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4 flex items-center justify-center">
              <Star className="w-10 h-10 mr-4 text-yellow-500" />
              Title Sponsors
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our premier partners who provide foundational support for the
              league
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {titleSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-white rounded-lg shadow-xl overflow-hidden card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {sponsor.tier}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold cpl-navy mb-3">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {sponsor.partnership}
                    </span>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cpl-secondary hover:text-green-700 font-semibold transition-colors"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Partners */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4 flex items-center justify-center">
              <Award className="w-10 h-10 mr-4 text-gray-500" />
              Premium Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Strategic partners providing category-exclusive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-white rounded-lg shadow-lg p-6 card-hover"
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <sponsor.icon className="w-6 h-6 text-cpl-secondary mr-2" />
                  <span className="text-sm text-gray-500 font-medium">
                    {sponsor.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold cpl-navy mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-gray-600 text-sm">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supporting Partners */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4 flex items-center justify-center">
              <Handshake className="w-10 h-10 mr-4 text-orange-500" />
              Supporting Partners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Valued partners contributing to the success of CPL baseball
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-white rounded-lg shadow-lg p-6 card-hover"
              >
                <div className="relative h-24 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <sponsor.icon className="w-5 h-5 text-cpl-secondary mr-2" />
                  <span className="text-xs text-gray-500 font-medium">
                    {sponsor.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold cpl-navy mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-gray-600 text-sm">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the benefits of partnering with the premier summer
              collegiate baseball league
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-cpl-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold cpl-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas-neue font-bold cpl-navy mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the partnership level that best fits your organization's
              goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className={`h-4 bg-gradient-to-r ${tier.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold cpl-navy mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold cpl-secondary mb-6">
                    {tier.price}
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-cpl-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-cpl-primary to-cpl-secondary rounded-lg p-12 text-white text-center">
            <h2 className="text-4xl font-bebas-neue font-bold mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join our family of partners and help support the next generation
              of baseball talent while growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                <Handshake className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a
                href="mailto:sponsors@coastalplain.com"
                className="bg-white text-cpl-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Partnership Inquiry
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>
                For sponsorship inquiries:{" "}
                <strong>sponsors@coastalplain.com</strong> | (919) 555-0123
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
