import { ItemData } from './types';

const items = [
  {
    title: 'برگر کلاسیک',
    slug: 'classic-burger',
    description: ['برگر گوشت', 'کاهو', 'گوجه', 'خیارشور', 'سس مخصوص'],
  },
  {
    title: 'چیز برگر',
    slug: 'cheese-burger',
    description: ['برگر گوشت', 'پنیر', 'کاهو', 'گوجه', 'خیارشور', 'سس مخصوص'],
  },
  {
    title: 'دبل برگر',
    slug: 'double-burger',
    description: ['دو عدد برگر گوشت', 'کاهو', 'گوجه', 'خیارشور', 'سس مخصوص'],
  },
  {
    title: 'قارچ برگر',
    slug: 'mashroom-burger',
    description: ['برگر گوشت', 'قارچ', 'گوجه', 'خیارشور', 'کاهو', 'سس مخصوص'],
  },
  {
    title: 'چیکن برگر',
    slug: 'chicken-burger',
    description: ['برگر مرغ', 'کاهو', 'گوجه', 'خیارشور', 'سس مخصوص'],
  },
  {
    title: 'HighEnd Meal',
    slug: 'highend-meal-burger',
    description: ['ساندویچ برگر.سیب زمینی . سالاد کلم . نوشابه'],
  },
] as const satisfies ItemData<'burger'>[];

export default items;
