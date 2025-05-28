'use client';
import Image, { StaticImageData } from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cn } from '@/utils/jsx-tools';

export interface SlideData {
  title: string;
  image: StaticImageData;
}

interface SliderProps {
  slides: SlideData[];
  className?: string;
}

export function Slider({
  slides,

  className,
}: SliderProps) {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      className={cn(className, 'size-full')}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className="size-full!" key={i}>
          <Image className="size-full object-cover" src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
