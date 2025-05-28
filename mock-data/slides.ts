import { SlideData } from '@/components/slider';
import slide1 from '@/public/mock-images/slide-1.jpg';
import slide2 from '@/public/mock-images/slide-2.png';
import slide3 from '@/public/mock-images/slide-3.jpg';

export default [
  { title: 'title 1', image: slide1 },
  { title: 'title 2', image: slide2 },
  { title: 'title 3', image: slide3 },
] satisfies SlideData[];
