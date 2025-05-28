'use client';
import { Button } from '@/atoms';
import { MenuBar } from '@/components';
import mockMenus from '@/mock-data/nav-menu';
import logo from '@/public/logo/logo.png';
import { cn } from '@/utils/jsx-tools';
import { useSpring, animated, easings } from '@react-spring/web';
import Image from 'next/image';

interface NavbarProps {
  wide?: true;
}

export default function Navbar({ wide }: NavbarProps) {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      easing: easings.easeInOutBounce,
    },
  });
  return (
    <nav className="sticky top-0 z-10 border-gray-400/25 bg-white py-2 shadow">
      <div className={cn('mx-auto flex items-center justify-between', wide ? 'px-2' : 'container')}>
        <animated.div style={spring}>
          <Image width={100} src={logo} alt="highend" />
        </animated.div>
        <span className="sr-only">highend</span>
        <MenuBar items={mockMenus} />
        <div>&nbsp;</div>
        <div className="flex gap-4">
          <Button outline>Gift Cards</Button>
          <Button>Order Now</Button>
        </div>
      </div>
    </nav>
  );
}
