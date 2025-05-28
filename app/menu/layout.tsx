'use client';
import { CategoryCard } from '@/components';
import { MainLayout } from '@/layouts';
import categories from '@/mock-data/categories';
import headerImage from '@/public/assets/category-header.png';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  const slug = useMemo(() => {
    return router.replace('/menu', '').split('/')[1];
  }, [router]);

  return (
    <MainLayout>
      <div className="relative h-48 w-full">
        <Image src={headerImage} alt="high end menu" className="absolute size-full object-cover" />
        <div className="flex-center font-title absolute inset-0 h-48 w-full text-4xl">
          <AnimatePresence>
            {slug ? (
              <motion.h1
                key={slug}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0, position: 'absolute' }}
                transition={{ bounce: false }}
                className="uppercase"
              >
                {slug}
              </motion.h1>
            ) : (
              <motion.h1
                key="menu"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0, position: 'absolute' }}
                transition={{ bounce: false }}
                className="uppercase"
              >
                menu
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className="container mx-auto flex flex-col flex-wrap justify-center gap-y-8 overflow-hidden py-12 sm:flex-row"
        initial={{ padding: '3rem 0', height: 'auto' }}
        animate={slug ? { padding: '0', height: 0 } : { padding: '3rem 0', height: 'auto' }}
      >
        {categories.map((cat) => (
          <Link
            href={`/menu/${cat.slug}`}
            key={cat.slug}
            className="flex-center sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <CategoryCard value={cat} />
          </Link>
        ))}
      </motion.div>
      {children}
    </MainLayout>
  );
}
