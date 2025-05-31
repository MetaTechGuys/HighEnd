import { ItemData } from './types';

const items = [
  {
    title: 'سیب زمینی ویژه',
    slug: 'special-belgian-chips',
    description: ['سیب زمینی سرخ شده', 'ژامبون', 'پنیر', 'قارچ', 'فلفل دلمه'],
  },
  {
    title: 'سیب زمینی کلاسیک',
    slug: 'classic-belgian-chips',
    description: ['سیب زمینی سرخ شده', 'ادویه مخصوص', 'نمک'],
  },
  {
    title: 'سیب زمینی با دیپ',
    slug: 'deep-belgian-chips',
    description: ['سیب زمینی سرخ شده', 'دیپ مخصوص'],
  },
  {
    title: 'سیب زمینی با سس آلفردو',
    slug: 'alfredo-belgian-chips',
    description: ['سیب زمینی سرخ شده', 'سس آلفردو'],
  },
] as const satisfies ItemData<'belgian-chips'>[];

export default items;
