import type { Metadata } from 'next';
import { DM_Sans, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SUVIMA - Supporting Understanding Via Information for Medical Awareness',
    template: '%s | SUVIMA',
  },
  description:
    'Evidence-based, neurodiversity-affirming information about neurodevelopmental and pediatric conditions for parents, young people, and healthcare professionals.',
  keywords: [
    'autism',
    'ADHD',
    'epilepsy',
    'neurodevelopmental',
    'pediatric',
    'health information',
    'parenting',
    'child development',
  ],
  authors: [{ name: 'SUVIMA' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://suvima.org',
    siteName: 'SUVIMA',
    title: 'SUVIMA - Supporting Understanding Via Information for Medical Awareness',
    description:
      'Evidence-based health information for neurodevelopmental and pediatric conditions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUVIMA',
    description:
      'Evidence-based health information for neurodevelopmental and pediatric conditions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${crimsonPro.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
