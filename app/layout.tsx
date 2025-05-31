import { cn } from '@/utils/jsx-tools';
import type { Metadata } from 'next';
import { Geist, Wendy_One } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const iranSans = localFont({
  src: [
    {
      path: '../public/fonts/Iranian-Sans.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Iranian-Sans-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-iranian-sans',
});

const sans = Geist({
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
          iranSans.variable,
          sans.variable,
          bold.variable,
          `bg-background min-h-screen overflow-x-hidden antialiased`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
