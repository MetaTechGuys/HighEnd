'use client';
import { Icon, Text } from '@/atoms';
import { animated, useInView } from '@react-spring/web';

export default function Footer() {
  const [ref, springs] = useInView(() => ({
    from: { zoom: 2, opacity: 0 },
    to: { zoom: 1, opacity: 1 },
  }));
  return (
    <footer className="dark text-foreground bg-background w-full">
      <div className="container mx-auto grid py-12 text-center sm:grid-cols-2 sm:text-start">
        <div className="flex h-32 flex-col items-center sm:h-auto">
          <animated.div ref={ref} style={springs}>
            <Text as="h1" className="mb-4 text-5xl" nowrap>
              highend Foods
            </Text>
          </animated.div>
          <div className="flex gap-8">
            <a href="#">
              <Icon name="facebook-f" />
            </a>
            <a href="#">
              <Icon name="facebook-f" />
            </a>
            <a href="#">
              <Icon name="facebook-f" />
            </a>
            <a href="#">
              <Icon name="facebook-f" />
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2">
          {new Array(4).fill(0).map((_, i) => (
            <div key={i}>
              <Text as="h2" className="" uppercase>
                Headline {i + 1}
              </Text>
              {new Array(i).fill(0).map((_, j) => (
                <a key={j} href="#" className="block">
                  <Text cap className="text-sm">
                    item {i + 1}-{j + 1}
                  </Text>
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* <div>par3</div> */}
        {/* <div>par4</div> */}
      </div>
    </footer>
  );
}
