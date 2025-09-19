import { Database, Eye, Lock, Mail, Shield, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Coastal Plain League",
  description:
    "Learn how the Coastal Plain League protects your privacy and handles your personal data.",
  openGraph: {
    title: "Privacy Policy - Coastal Plain League",
    description:
      "Learn how the Coastal Plain League protects your privacy and handles your personal data.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-cpl-primary to-cpl-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bebas-neue font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and
            protect your personal information.
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
        {/* Introduction */}
        <div className="bg-cpl-navy text-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bebas-neue font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-lg">
            Our website address is:{" "}
            <a
              href="https://www.coastalplain.com"
              className="text-cpl-red hover:text-red-300 underline"
            >
              www.coastalplain.com
            </a>
          </p>
        </div>

        <div className="space-y-8">
          {/* Data Collection */}
          <section>
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-cpl-navy mr-3" />
              <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
                What Personal Data We Collect and Why We Collect It
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-cpl-light-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cpl-navy mb-4">
                  Comments
                </h3>
                <p className="text-gray-700 mb-4">
                  When visitors leave comments on the site we collect the data
                  shown in the comments form, and also the visitor's IP address
                  and browser user agent string to help spam detection.
                </p>
                <p className="text-gray-700">
                  An anonymized string created from your email address (also
                  called a hash) may be provided to the Gravatar service to see
                  if you are using it. The Gravatar service privacy policy is
                  available here:{" "}
                  <a
                    href="https://automattic.com/privacy/"
                    className="text-cpl-red hover:text-red-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://automattic.com/privacy/
                  </a>
                  . After approval of your comment, your profile picture is
                  visible to the public in the context of your comment.
                </p>
              </div>

              <div className="bg-cpl-light-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cpl-navy mb-4">
                  Media
                </h3>
                <p className="text-gray-700">
                  If you upload images to the website, you should avoid
                  uploading images with embedded location data (EXIF GPS)
                  included. Visitors to the website can download and extract any
                  location data from images on the website.
                </p>
              </div>

              <div className="bg-cpl-light-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cpl-navy mb-4">
                  Contact Forms
                </h3>
                <p className="text-gray-700">
                  When you submit a contact form, we collect your name, email
                  address, and message content to respond to your inquiry. This
                  information is used solely for communication purposes and is
                  not shared with third parties.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-cpl-navy mr-3" />
              <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
                Cookies
              </h2>
            </div>

            <div className="bg-cpl-light-gray rounded-lg p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  If you leave a comment on our site you may opt-in to saving
                  your name, email address and website in cookies. These are for
                  your convenience so that you do not have to fill in your
                  details again when you leave another comment. These cookies
                  will last for one year.
                </p>
                <p className="text-gray-700">
                  If you visit our login page, we will set a temporary cookie to
                  determine if your browser accepts cookies. This cookie
                  contains no personal data and is discarded when you close your
                  browser.
                </p>
                <p className="text-gray-700">
                  When you log in, we will also set up several cookies to save
                  your login information and your screen display choices. Login
                  cookies last for two days, and screen options cookies last for
                  a year. If you select "Remember Me", your login will persist
                  for two weeks. If you log out of your account, the login
                  cookies will be removed.
                </p>
                <p className="text-gray-700">
                  If you edit or publish an article, an additional cookie will
                  be saved in your browser. This cookie includes no personal
                  data and simply indicates the post ID of the article you just
                  edited. It expires after 1 day.
                </p>
              </div>
            </div>
          </section>

          {/* Embedded Content */}
          <section>
            <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6">
              Embedded Content from Other Websites
            </h2>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <p className="text-gray-700">
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </p>
              <p className="text-gray-700 mt-4">
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </p>
            </div>
          </section>

          {/* Analytics */}
          <section>
            <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6">
              Analytics
            </h2>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <p className="text-gray-700">
                We use analytics tools to understand how visitors interact with
                our website. This helps us improve our content and user
                experience. Analytics data is collected anonymously and does not
                include personal identifying information.
              </p>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-cpl-navy mr-3" />
              <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
                Who We Share Your Data With
              </h2>
            </div>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <p className="text-gray-700">
                If you request a password reset, your IP address will be
                included in the reset email.
              </p>
              <p className="text-gray-700 mt-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this privacy policy.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6">
              How Long We Retain Your Data
            </h2>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  If you leave a comment, the comment and its metadata are
                  retained indefinitely. This is so we can recognize and approve
                  any follow-up comments automatically instead of holding them
                  in a moderation queue.
                </p>
                <p className="text-gray-700">
                  For users that register on our website (if any), we also store
                  the personal information they provide in their user profile.
                  All users can see, edit, or delete their personal information
                  at any time (except they cannot change their username).
                  Website administrators can also see and edit that information.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6">
              What Rights You Have Over Your Data
            </h2>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <p className="text-gray-700">
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-cpl-navy mr-3" />
              <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
                How We Protect Your Data
              </h2>
            </div>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <p className="text-gray-700">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. This includes encryption, secure
                servers, and regular security audits.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-cpl-navy mr-3" />
              <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy">
                Your Contact Information
              </h2>
            </div>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@coastalplain.com"
                    className="text-cpl-red hover:text-red-700 underline"
                  >
                    privacy@coastalplain.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Coastal Plain League, 123 Baseball
                  Way, Savannah, GA 31401
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-bebas-neue font-bold text-cpl-navy mb-6">
              Additional Information
            </h2>
            <div className="bg-cpl-light-gray rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-cpl-navy mb-2">
                    Data Breach Procedures
                  </h3>
                  <p className="text-gray-700">
                    In the event of a data breach, we will notify affected users
                    within 72 hours and take immediate steps to secure the
                    system and prevent further unauthorized access.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cpl-navy mb-2">
                    Third-Party Data Sources
                  </h3>
                  <p className="text-gray-700">
                    We may receive data from third-party services such as
                    analytics providers, social media platforms, and payment
                    processors. These services have their own privacy policies
                    that govern how they handle your data.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cpl-navy mb-2">
                    Automated Decision Making
                  </h3>
                  <p className="text-gray-700">
                    We do not use automated decision-making or profiling with
                    user data that produces legal effects or significantly
                    affects individuals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cpl-navy mb-2">
                    Industry Regulatory Disclosure
                  </h3>
                  <p className="text-gray-700">
                    As a sports organization, we comply with all applicable
                    privacy laws and regulations, including GDPR, CCPA, and
                    other relevant data protection legislation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="bg-gray-100 rounded-lg p-6 text-center mt-12">
            <p className="text-sm text-gray-600">
              This privacy policy is effective as of{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              and may be updated from time to time. We will notify you of any
              material changes by posting the new privacy policy on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
