import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Mukul Sharma — Full Stack Developer & AI Engineer',
  description: 'Personal portfolio of Mukul Sharma — Full Stack Developer, AI/ML Engineer, and CS student at MAIT Delhi.',
  keywords: 'Full Stack Developer, AI ML, React, Next.js, Portfolio, MAIT Delhi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${spaceGrotesk.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}