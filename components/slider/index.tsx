'use client';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cn } from '@/utils/jsx-tools';

const modules = [Pagination, Navigation, Autoplay];

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
      modules={modules}
      className={cn(className, 'size-full')}
      autoplay={true}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className="size-full!" key={i}>
          <Image className="size-full object-cover" src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
