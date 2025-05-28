'use client';
import { Button, Text } from '@/atoms';
import { MenuBar } from '@/components';
import mockMenus from '@/mock-data/nav-menu';
import logo from '@/public/logo/logo.png';
import { cn } from '@/utils/jsx-tools';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { BurgerMenuIcon } from './BurgerIcon';
import Link from 'next/link';

interface NavbarProps {
  wide?: true;
}

export default function Navbar({ wide }: NavbarProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-gray-400/25 bg-white py-2 shadow">
      <div
        className={cn(
          'mx-auto flex items-center justify-between px-4',
          wide ? '' : 'container sm:px-0',
        )}
      >
        <motion.button
          className={cn('relative z-10 flex size-8 sm:hidden', isOpen ? 'opened' : '')}
          animate={
            isOpen
              ? { top: 10, left: 10, color: 'white', scale: 1.5 }
              : { top: 0, left: 0, color: 'black', scale: 1 }
          }
          onClick={() => {
            setOpen((open) => !open);
          }}
          id="menu-burget-btn"
        >
          <BurgerMenuIcon className="size-full" />
        </motion.button>
        <Link href="/">
          <motion.div
            className="relative z-20 size-16 scale-150"
            animate={
              isOpen
                ? { opacity: 1, translateY: 40, scale: 2 }
                : { opacity: 1, translateY: 0, scale: 1 }
            }
          >
            <Image src={logo} alt="highend" className="w-full! sm:translate-x-4 md:translate-x-0" />
            <span className="sr-only">highend</span>
          </motion.div>
        </Link>
        <MenuBar items={mockMenus} className="hidden sm:flex" />
        <div className="flex w-8 gap-4 sm:w-auto" dir="rtl">
          <Button outline className="hidden sm:block">
            Gift Cards
          </Button>
          <Button className="text-nowrap">
            Order<span className="hidden sm:inline"> Now</span>
          </Button>
        </div>
        <motion.div
          className="bg-accent fixed start-0 top-0 w-full overflow-hidden text-white"
          initial={{ height: 0 }}
          animate={isOpen ? { height: '100vh' } : { height: 0 }}
        >
          <div className="flex h-full flex-col gap-8 p-8 pt-48">
            {/* <Text as="h1" uppercase className="text-center text-4xl">
              high end
            </Text> */}
            {mockMenus.map((m, i) => (
              <div key={i} className="relative text-center">
                <Link href={m.href ?? '#'} className="w-full">
                  <Text bold cap>
                    {m.label}
                  </Text>
                </Link>
              </div>
            ))}
            <div className="mt-auto flex justify-between">
              <Button className="w-2/5 border-0" outline>
                Gift Cards
              </Button>
              <Button className="w-2/5">Order Now</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
