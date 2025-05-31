import { ItemData } from './types';

const items = [
  {
    title: 'نوشابه',
    slug: 'soda-drink',
    description: ['کوکا', 'فانتا', 'اسپرایت', 'زیرو'],
  },
  {
    title: 'ماءالشعیر',
    slug: 'malt-beer-drink',
    description: ['لیمو', 'استوایی', 'هلو'],
  },
  {
    title: 'آب معدنی',
    slug: 'water-drink',
    description: [''],
  },
] as const satisfies ItemData<'drink'>[];

export default items;
