import burger from '@/public/assets/categories/food.png';
import burgerHeader from '@/public/assets/categories/burger-header.png';
import pizza from '@/public/assets/categories/pizza.png';
import sandwich from '@/public/assets/categories/sandwich.png';
import salad from '@/public/assets/categories/salad.png';
import pasta from '@/public/assets/categories/spaghetti.png';
import belgian from '@/public/assets/categories/french-fries.png';
import fried from '@/public/assets/categories/fried-chicken.png';
import drinks from '@/public/assets/categories/soda.png';

import { StaticImageData } from 'next/image';

export interface CategoryData {
  title: string;
  slug: string;
  icon: StaticImageData;
  headerImg?: StaticImageData;
  headerClassName?: string;
}

const categories = [
  {
    title: 'burger',
    slug: 'burger',
    icon: burger,
    headerImg: burgerHeader,
    headerClassName: 'text-center md:w-2/3 md:ms-auto',
  },
  { title: 'pizza', slug: 'pizza', icon: pizza, headerClassName: 'text-center' },
  { title: 'sandwich', slug: 'sandwich', icon: sandwich, headerClassName: 'text-center' },
  { title: 'salad', slug: 'salad', icon: salad, headerClassName: 'text-center' },
  { title: 'pasta', slug: 'pasta', icon: pasta, headerClassName: 'text-center' },
  { title: 'belgian chips', slug: 'belgian-chips', icon: belgian, headerClassName: 'text-center' },
  { title: 'fried chicken', slug: 'fried-chicken', icon: fried, headerClassName: 'text-center' },
  { title: 'drinks', slug: 'drink', icon: drinks, headerClassName: 'text-center' },
] as const satisfies CategoryData[];

export type Category = (typeof categories)[number]['slug'];

export default categories as CategoryData[];
