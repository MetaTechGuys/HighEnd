import { cn } from '@/utils/jsx-tools';
import type { Metadata } from 'next';
import { Geist, Noto_Serif, Wendy_One } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const bold = Wendy_One({
  variable: '--font-bold',
  weight: '400',
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
          bold.variable,
          notoSerif.variable,
          `bg-background min-h-screen overflow-x-hidden antialiased`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
