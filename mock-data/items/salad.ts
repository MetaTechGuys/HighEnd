import { ItemData } from './types';

const items = [
  {
    title: 'سزار با مرغ گریل',
    slug: 'caesar-salad',
    description: [
      'کاهو پیچ',
      'فیله مرغ گریل',
      'نان تست',
      'زیتون/گوج هگیلاسی',
      'پنیر پارمسان/سس مخصوص',
    ],
  },
  {
    title: 'سالاد کلم',
    slug: 'cabbage-salad',
    description: ['کلم قرمز', 'هویج', 'کل مسفید', 'سس مخصوص'],
  },
] as const satisfies ItemData<'salad'>[];

export default items;
