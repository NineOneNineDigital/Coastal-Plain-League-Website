import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: {
    default: "Coastal Plain League - Premier Summer College Baseball",
    template: "%s | Coastal Plain League",
  },
  description:
    "The Coastal Plain League is one of the premier summer collegiate baseball leagues in the country, featuring top college players from across the nation.",
  keywords: [
    "baseball",
    "coastal plain league",
    "summer baseball",
    "college baseball",
    "sports",
  ],
  authors: [{ name: "Coastal Plain League" }],
  creator: "Coastal Plain League",
  publisher: "Coastal Plain League",
  metadataBase: new URL("https://coastalplain.com"),
  openGraph: {
    title: "Coastal Plain League - Premier Summer College Baseball",
    description:
      "The Coastal Plain League is one of the premier summer collegiate baseball leagues in the country.",
    url: "https://coastalplain.com",
    siteName: "Coastal Plain League",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal Plain League",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Plain League - Premier Summer College Baseball",
    description:
      "The Coastal Plain League is one of the premier summer collegiate baseball leagues in the country.",
    images: ["/twitter-image.jpg"],
    creator: "@CoastalPlain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 font-inter antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
