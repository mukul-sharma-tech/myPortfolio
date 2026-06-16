import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Mukul Sharma — System Architecture & Engineering',
  description: 'Portfolio of Mukul Sharma, specialized in modern web infrastructure.',
  keywords: 'Full Stack Developer, Software Engineer, System Architecture, UI/UX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${outfit.className} bg-background text-foreground antialiased selection:bg-primaryAccent selection:text-white overflow-x-hidden`} style={{ minHeight: '100vh' }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}