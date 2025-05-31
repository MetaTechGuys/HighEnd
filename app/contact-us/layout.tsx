'use client';
import { MainLayout } from '@/layouts';
import headerImage from '@/public/assets/category-header.png';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <div className="relative h-48 w-full">
        <Image src={headerImage} alt="high end menu" className="absolute size-full object-cover" />
        <div className="flex-center font-title absolute inset-0 h-48 w-full text-4xl">
          <AnimatePresence>
            <motion.h1
              key="menu"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, position: 'absolute' }}
              transition={{ bounce: false }}
              className="uppercase"
            >
              Contact Us
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
      {children}
    </MainLayout>
  );
}
