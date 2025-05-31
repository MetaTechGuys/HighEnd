import { ItemData } from './types';

const items = [
  {
    title: 'فیله سوخاري سه تیکه',
    slug: 'three-pieces-fried-chicken',
    description: ['( اسپایسی و معمولی )', 'به همراه سیب زمینی و سالاد کلم'],
  },
  {
    title: 'فیله سوخاري پنج تیکه',
    slug: 'five-pieces-fried-chicken',
    description: ['( اسپایسی و معمولی )', 'به همراه سیب زمینی و سالاد کلم'],
  },
] as const satisfies ItemData<'fried-chicken'>[];

export default items;
