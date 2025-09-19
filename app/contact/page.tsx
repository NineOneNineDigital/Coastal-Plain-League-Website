"use client";

import {
  ChevronDown,
  ChevronUp,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@coastalplain.com",
    description: "General inquiries and information",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "(919) 555-0123",
    description: "Monday - Friday, 9:00 AM - 5:00 PM EST",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Baseball Drive, Raleigh, NC 27601",
    description: "League headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 5:00 PM EST",
    description: "Closed weekends and holidays",
  },
];

const departments = [
  {
    name: "Media Relations",
    email: "media@coastalplain.com",
    description: "Press inquiries, interviews, and media credentials",
  },
  {
    name: "Team Operations",
    email: "operations@coastalplain.com",
    description: "Team management, scheduling, and league operations",
  },
  {
    name: "Fan Services",
    email: "fans@coastalplain.com",
    description: "Ticket information, fan events, and general questions",
  },
  {
    name: "Sponsorship",
    email: "sponsors@coastalplain.com",
    description: "Partnership opportunities and sponsorship inquiries",
  },
];

const faqs = [
  {
    question: "How can I purchase tickets for games?",
    answer:
      "Tickets can be purchased through individual team websites or at the stadium box office on game days. Each team manages their own ticketing, so visit the specific team page for ticket information and pricing.",
  },
  {
    question: "What is the Coastal Plain League season schedule?",
    answer:
      "The CPL season typically runs from early June through early August, with playoffs extending into mid-August. The regular season consists of approximately 56 games per team, followed by divisional playoffs and a championship series.",
  },
  {
    question: "How do players get selected for CPL teams?",
    answer:
      "Players are recruited by individual team coaches and management. Most players are current college students who maintain their NCAA eligibility. Teams scout players from colleges across the country, with many coming from top Division I programs.",
  },
  {
    question: "Can I volunteer with a CPL team?",
    answer:
      "Yes! Many teams rely on volunteers for various game day operations. Contact your local team directly to inquire about volunteer opportunities, which may include helping with concessions, ticket taking, or special events.",
  },
  {
    question: "How do I apply for media credentials?",
    answer:
      "Media credential requests should be submitted to our Media Relations department at media@coastalplain.com at least 48 hours before the event. Include your media outlet information, assignment details, and contact information.",
  },
  {
    question: "Are there group ticket discounts available?",
    answer:
      "Most teams offer group discounts for parties of 15 or more. Group packages often include discounted tickets and may include food options. Contact the specific team's front office for group pricing and availability.",
  },
  {
    question: "What items are prohibited at CPL stadiums?",
    answer:
      "Prohibited items vary by stadium but typically include outside food and beverages, weapons, glass containers, and professional cameras. Check with the specific venue for their complete list of prohibited items before attending.",
  },
  {
    question: "How can I become a sponsor or partner?",
    answer:
      "Sponsorship opportunities are available at both the league and individual team levels. Contact our Sponsorship department at sponsors@coastalplain.com to discuss partnership opportunities that align with your business goals.",
  },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    department: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      department: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-cpl-light-gray">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-cpl-primary via-cpl-secondary to-cpl-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bebas-neue font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with the Coastal Plain League for questions, media
              inquiries, or general information
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bebas-neue font-bold text-cpl-primary mb-8">
              Get In Touch
            </h2>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-cpl-secondary rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-cpl-primary mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-cpl-primary mb-6">
                Department Contacts
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {dept.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {dept.description}
                        </p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-cpl-secondary hover:text-green-700 font-medium text-sm transition-colors"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-cpl-primary mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent transition-colors"
                  >
                    <option value="">Select a department</option>
                    <option value="general">General Inquiry</option>
                    <option value="media">Media Relations</option>
                    <option value="operations">Team Operations</option>
                    <option value="fans">Fan Services</option>
                    <option value="sponsors">Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent transition-colors"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cpl-secondary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bebas-neue font-bold text-cpl-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about the Coastal Plain League,
              tickets, games, and more.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-cpl-light-gray transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-cpl-primary pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cpl-secondary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cpl-secondary flex-shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cpl-primary to-cpl-secondary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to
                help. Reach out to us directly and we'll get back to you as soon
                as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@coastalplain.com"
                  className="btn-secondary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
                <a href="tel:+19195550123" className="btn-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
