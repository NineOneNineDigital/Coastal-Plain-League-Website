"use client";

import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="bg-gradient-to-r from-cpl-navy to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bebas-neue font-bold text-cpl-navy mb-4">
              Welcome to the CPL Family!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for subscribing! You'll receive our latest news, game
              updates, and exclusive offers.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-cpl-navy hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-cpl-navy to-blue-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bebas-neue font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get the latest CPL news, game updates, and exclusive offers
            delivered to your inbox
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-navy focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-cpl-navy hover:bg-blue-900 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            {error && (
              <div className="mt-4 flex items-center text-red-600">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}
          </form>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cpl-red rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Weekly Updates
              </h3>
              <p className="text-sm text-gray-600">
                Get the latest scores, standings, and league news every week
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cpl-red rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Exclusive Offers
              </h3>
              <p className="text-sm text-gray-600">
                Special discounts on tickets, merchandise, and events
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cpl-red rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Game Reminders
              </h3>
              <p className="text-sm text-gray-600">
                Never miss a game with personalized reminders
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.{" "}
              <a href="/privacy" className="text-cpl-navy hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
