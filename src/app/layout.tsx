import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Layout from '@/components/Layout';
import { spectral } from './fonts';

export const metadata: Metadata = {
  title: 'Bharadwaj P',
  description: 'Personal portfolio website of Bharadwaj P',
  metadataBase: new URL('https://bharadwaj-portfolio.vercel.app'),
  openGraph: {
    title: 'Bharadwaj P',
    description: 'Personal portfolio website of Bharadwaj P',
    url: 'https://bharadwaj-portfolio.vercel.app',
    siteName: 'Bharadwaj P',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharadwaj P',
    description: 'Personal portfolio website of Bharadwaj P',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spectral.variable} font-serif`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          themes={['light', 'dark']}
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
