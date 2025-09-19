"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    id: 1,
    title: "Championship Series Begins Tonight",
    subtitle: "Two powerhouse teams battle for the CPL title",
    image: "/images/josh-hemsley-e-f17L4EBBc-unsplash.jpg",
    video:
      "https://player.vimeo.com/external/123456789.hd.mp4?s=abcdef&profile_id=174",
    ctaText: "Watch Live",
    ctaLink: "/live",
    type: "game",
    overlay: "rgba(0, 26, 51, 0.7)",
  },
  {
    id: 2,
    title: "Player of the Week: Jake Morrison",
    subtitle: "Macon Bacon pitcher dominates with 15 strikeouts",
    image: "/images/josh-hemsley-ehGY57IZoKc-unsplash.jpg",
    video:
      "https://player.vimeo.com/external/123456790.hd.mp4?s=abcdef&profile_id=174",
    ctaText: "Read Story",
    ctaLink: "/news/player-of-week-jake-morrison",
    type: "news",
    overlay: "rgba(200, 16, 46, 0.7)",
  },
  {
    id: 3,
    title: "All-Star Game Weekend",
    subtitle: "The best players showcase their talents July 15-16",
    image: "/images/keith-johnston-PenZT_IMrV8-unsplash.jpg",
    video:
      "https://player.vimeo.com/external/123456791.hd.mp4?s=abcdef&profile_id=174",
    ctaText: "Get Tickets",
    ctaLink: "/tickets/all-star",
    type: "event",
    overlay: "rgba(34, 178, 76, 0.7)",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Increased to 6 seconds for better video viewing
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <div className="relative h-full">
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              style={{ opacity: isVideoLoaded ? 1 : 0 }}
            >
              <source src={slide.video} type="video/mp4" />
            </video>

            {/* Fallback Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-opacity duration-500 ${
                isVideoLoaded ? "opacity-0" : "opacity-100"
              }`}
              priority={index === 0}
            />

            {/* Dynamic Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${slide.overlay} 0%, rgba(0, 0, 0, 0.6) 100%)`,
              }}
            />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div
                    className={`transform transition-all duration-700 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <h1 className="text-5xl lg:text-6xl font-bebas-neue font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                  </div>
                  <div
                    className={`transform transition-all duration-700 delay-200 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div
                    className={`transform transition-all duration-700 delay-400 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={slide.ctaLink}
                        className="btn-primary group hover:scale-105 transition-transform duration-200"
                      >
                        {slide.type === "game" && (
                          <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        )}
                        {slide.ctaText}
                      </Link>
                      {slide.type === "game" && (
                        <Link
                          href="/schedule"
                          className="btn-secondary group hover:scale-105 transition-transform duration-200"
                        >
                          View Schedule
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
