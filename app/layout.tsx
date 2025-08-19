import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Nenrin Dashboard - Your Digital Companion',
  description: 'A calm, nature-inspired dashboard that nudges users to use WhatsApp for productivity and personal organization.',
  keywords: 'productivity, dashboard, whatsapp, nature, minimal, task management',
  authors: [{ name: 'MiniMax Agent' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1A4A35',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-nenrin-mist to-[#F2F6F4] text-nenrin-ink antialiased">
        {children}
      </body>
    </html>
  );
}
