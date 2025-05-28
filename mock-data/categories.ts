import { CategoryData } from '@/components/category';

import burger from '@/public/assets/categories/food.png';
import pizza from '@/public/assets/categories/pizza.png';
import sandwich from '@/public/assets/categories/sandwich.png';
import salad from '@/public/assets/categories/salad.png';
import pasta from '@/public/assets/categories/spaghetti.png';
import belgian from '@/public/assets/categories/french-fries.png';
import fried from '@/public/assets/categories/fried-chicken.png';
import drinks from '@/public/assets/categories/soda.png';

export default [
  { title: 'burger', slug: 'burger', image: burger },
  { title: 'pizza', slug: 'pizza', image: pizza },
  { title: 'sandwich', slug: 'sandwich', image: sandwich },
  { title: 'salad', slug: 'salad', image: salad },
  { title: 'pasta', slug: 'pasta', image: pasta },
  { title: 'belgian chips', slug: 'belgian-chips', image: belgian },
  { title: 'fried chicken', slug: 'fried-chicken', image: fried },
  { title: 'drinks', slug: 'drinks', image: drinks },
] satisfies CategoryData[];
