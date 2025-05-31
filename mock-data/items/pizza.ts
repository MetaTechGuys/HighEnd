import { ItemData } from './types';

const pizzaItems = [
  {
    title: 'سیر و استیک',
    slug: 'garlic-n-steak-pizza',
    size: '2p',
    description: ['گوشت چرخ کرده', 'گوشت رست شده', 'چیکن', 'فلفل دلمه', 'قارچ', 'پنیر', 'سس مخصوص'],
  },
  {
    title: 'رست بیف',
    slug: 'roast-beef-pizza',
    size: '2p',
    description: ['گوشت راسته', 'چیکن', 'قارچ', 'سس مخصوص', 'پنیر'],
  },
  {
    title: 'چیکن آلفردو',
    slug: 'alfredo-pizza',
    size: '2p',
    description: ['مرغ مرینت شده', 'سس آلفردو', 'قارچ', 'پنیر'],
  },
  {
    title: 'مخلوط',
    slug: 'mixed-pizza',
    size: '2p',
    description: [
      'ژامبون مرغ و گوشت 90%',
      'کوکتل دودي 90%',
      'قارچ',
      'زیتون',
      'فلفل دلمه رنگی',
      'پنیر',
      'سس مخصوص',
    ],
  },
  {
    title: 'سبزیجات',
    slug: 'vegetables-pizza',
    size: '2p',
    description: ['بادمجان', 'کدو', 'هویج', 'فلفل دلمه رنگی', 'گوجه', 'قارچ', 'زیتون سیاه'],
  },
  {
    title: 'پپرونی',
    slug: 'pepperoni-pizza',
    size: '2p',
    description: ['پپرونی', 'سس مخصوص', 'پنیر', 'هالوپینو'],
  },
  {
    title: 'پپرونی',
    slug: 'pepperoni-sm-pizza',
    size: '1p',
    description: ['پپرونی', 'سس مخصوص', 'پنیر', 'هالوپینو'],
  },
  {
    title: 'مخلوط',
    slug: 'mixed-sm-pizza',
    size: '1p',
    description: [
      'ژامبون مرغ و گوشت 90%',
      'کوکتل دودي 90%',
      'قارچ',
      'زیتون',
      'فلفل دلمه رنگی',
      'پنیر',
      'سس مخصوص',
    ],
  },
] as const satisfies ItemData<'pizza'>[];

export default pizzaItems;
