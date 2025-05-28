import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lilita_One, Noto_Serif } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/jsx-tools';

const notoSerif = Noto_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const bold = Lilita_One({
  variable: '--font-bold',
  weight: '400',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Highend | Online food',
  description: 'Awesoem food in Awesome Resturant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          bold.variable,
          notoSerif.variable,
          `min-h-screen overflow-x-hidden antialiased`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
