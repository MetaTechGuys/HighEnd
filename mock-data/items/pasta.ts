import { ItemData } from './types';

const items = [
  {
    title: 'پنه مرغ',
    slug: 'chicken-penne-pasta',
    description: ['پاستا پنه', 'مرغ مزه دار شده', 'سس آلفردو'],
  },
  {
    title: 'پنه گوشت',
    slug: 'meat-penne-pasta',
    description: ['پاستا پنه', 'گوشت گوساله رست شده', 'سس آلفردو'],
  },
] as const satisfies ItemData<'pasta'>[];

export default items;
