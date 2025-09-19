import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Coastal Plain League',
  description: 'Get in touch with the Coastal Plain League. Find contact information, frequently asked questions, and submit inquiries.',
  openGraph: {
    title: 'Contact Us - Coastal Plain League',
    description: 'Get in touch with the Coastal Plain League. Find contact information, frequently asked questions, and submit inquiries.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}