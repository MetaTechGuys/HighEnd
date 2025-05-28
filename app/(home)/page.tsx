import { Button } from '@/atoms';
import { Slider } from '@/components';
import mockSlides from '@/mock-data/slides';
import chefImage from '@/public/assets/chef.png';
import heroImage from '@/public/assets/hero-image.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-accent h-full auto-rows-auto grid-cols-4 md:grid">
      <div className="relative col-span-3 row-span-4 aspect-square text-white md:aspect-auto">
        <Image src={heroImage} alt="catering" className="absolute inset-0 size-full object-cover" />
        <div className="absolute bottom-7 flex w-full justify-center">
          <Button
            outline
            className="mt-1/2 animate-pulse px-8 py-4 text-2xl font-black uppercase hover:animate-none"
          >
            Order now
          </Button>
        </div>
      </div>
      <div className="row-span-3 hidden md:block">
        <Image src={chefImage} alt="catering" className="w-full object-cover" />
      </div>
      <div className="row-span-1">
        <Slider slides={mockSlides} />
      </div>
    </div>
  );
}
