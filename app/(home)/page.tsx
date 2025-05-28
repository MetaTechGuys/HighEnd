import Image from 'next/image';
import catering from '@/public/mock-images/catering.jpg';
import readTable from '@/public/mock-images/red-table.jpg';
import { Button, Text } from '@/atoms';
import { Slider } from '@/components';
import mockSlides from '@/mock-data/slides';

export default function Home() {
  return (
    <div className="bg-accent grid h-full auto-rows-fr grid-cols-4">
      <div className="relative col-span-3 row-span-4 text-white">
        <Image src={readTable} alt="catering" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <Text className="font-serif text-5xl">Handcrafted</Text>
          <Text as="h2" className="text-8xl">
            Burgers & Fries{' '}
          </Text>
          <Text className="font-serif text-5xl leading-28">since 1986</Text>
          <Button
            outline
            className="animate-pulse px-8 py-4 text-2xl font-black uppercase hover:animate-none"
          >
            Order now
          </Button>
        </div>
      </div>
      <div className="row-span-3">
        <Slider slides={mockSlides} />
      </div>
      <div className="row-span-1">
        <Image src={catering} alt="catering" className="size-full object-fill" />
      </div>
    </div>
  );
}
