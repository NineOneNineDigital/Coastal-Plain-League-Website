import { Copyright, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Coastal Plain League",
  description:
    "Terms of use and intellectual property information for the Coastal Plain League website.",
  openGraph: {
    title: "Terms of Use - Coastal Plain League",
    description:
      "Terms of use and intellectual property information for the Coastal Plain League website.",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-cpl-primary to-cpl-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bebas-neue font-bold text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Intellectual property and trademark information for the Coastal
            Plain League.
          </p>
          <div className="mt-6 text-sm text-gray-300">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intellectual Property */}
        <section>
          <div className="flex items-center mb-6">
            <Copyright className="w-6 h-6 text-cpl-navy mr-3" />
            <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
              Intellectual Property Rights
            </h2>
          </div>

          <div className="bg-cpl-light-gray rounded-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              CPL, and any team nicknames and logos used on or in connection
              with the site, are trademarks, copyrighted designs and other forms
              of intellectual property of the Coastal Plain League, LLC. All
              Minor League Baseball trademarks are used with permission and
              under license. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
