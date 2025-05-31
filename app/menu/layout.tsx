'use client';
import { CategoryCard } from '@/components';
import { MainLayout } from '@/layouts';
import categories from '@/mock-data/categories';
import headerImage from '@/public/assets/category-header.png';
import { cn } from '@/utils/jsx-tools';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  const category = useMemo(() => {
    const slug = router.replace('/menu', '').split('/')[1];
    return categories.find((c) => c.slug == slug);
  }, [router]);

  return (
    <MainLayout>
      <div className="relative h-50 w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={category?.headerImg?.src ?? headerImage.src}
            className="bg-primary relative h-full bg-cover bg-left bg-no-repeat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, position: 'absolute' }}
            style={
              category?.headerImg?.src
                ? {
                    backgroundImage: `url(${category?.headerImg?.src}), linear-gradient(180deg,rgb(253 149 44) 0%,rgb(249 140 22) 50%, rgb(247 140 27) 100%)`,
                    backgroundPosition: 'left, right',
                    backgroundRepeat: 'no-repeat, repeat',
                    backgroundSize: 'auto 200%',
                  }
                : {
                    backgroundImage: `url(${headerImage?.src})`,
                  }
            }
          ></motion.div>
        </AnimatePresence>
        <div className="flex-center font-title absolute inset-0 container mx-auto h-full text-4xl">
          <AnimatePresence>
            {category ? (
              <motion.h1
                key={category.slug}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0, position: 'absolute' }}
                transition={{ bounce: false }}
                className={cn('w-full text-4xl uppercase', category.headerClassName)}
              >
                {category.title}
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
        animate={category ? { padding: '0', height: 0 } : { padding: '3rem 0', height: 'auto' }}
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
