'use client';

import { Text } from '@/atoms';
import { cn } from '@/utils/jsx-tools';
import { animated, useSprings } from '@react-spring/web';

export interface NavMenuData {
  label: string;
  href?: string;
}

interface SliderProps {
  items: NavMenuData[];
  className?: string;
}

export function MenuBar({ items, className }: SliderProps) {
  const [springs] = useSprings(
    items.length,
    (index) => ({
      from: { top: -100 },
      to: { top: 0 },
      delay: index * 50,
    }),
    [items],
  );

  return (
    <div className={cn('flex gap-5', className)}>
      {springs.map((spring, i) => (
        <div className="relative" key={i}>
          <Text bold cap className="opacity-0">
            {items[i].label}
          </Text>
          <animated.a style={spring} href={items[i].href ?? '#'} className="absolute start-0">
            <Text bold cap>
              {items[i].label}
            </Text>
          </animated.a>
        </div>
      ))}
    </div>
  );
}
