import { ItemData } from './types';

const items = [
  {
    title: 'رست بیف',
    slug: 'roast-beef-sandwich',
    description: ['مغز ران گوساله', 'پنیر', 'سس آلفردو', 'کاهو', 'پیاز جعفري', 'گوجه', 'خیارشور'],
  },
  {
    title: 'سوسیس بلونز تند',
    slug: 'spicy-sausage-blounts-sandwich',
    description: ['کوکتل دودي با سس مخصوص', '% ژامبون تنوري گوشت 90'],
  },
  {
    title: 'فیله مرغ',
    slug: 'chicken-fillet-sandwich',
    description: ['فیله مرغ', 'کاهو', 'گوجه', 'خیار شور', 'سس مخصوص'],
  },
  {
    title: 'ژامبون تنوري مرغ',
    slug: 'chicken-oven-ham-sandwich',
    description: ['', 'گوجه', 'کاهو', '% ژامبون مرغ تنوري 90 خیارشور', 'سس مخصوص'],
  },
  {
    title: 'هات داگ با قارچ و پنیر',
    slug: 'hot-dog-mushrooms-n-cheese-sandwich',
    description: ['هات داگ', 'قارچ و پنیر', 'سس مخصوص', 'گوجه', 'کاهو', 'خیارشور'],
  },
  {
    title: 'ژامبون سرد گوشت',
    slug: 'cold-meat-ham-sandwich',
    description: ['', 'گوجه', 'کاهو', 'خیارشور', '% ژامبون گوشت 90 سس مخصوص'],
  },
  {
    title: 'ژامبون سرد مرغ',
    slug: 'cold-chicken-ham-sandwich',
    description: ['', 'گوجه', 'کاهو', 'خیارشور', '% ژامبون مرغ 90 سس مخصوص'],
  },
  {
    title: 'ژامبون تنوري گوشت',
    slug: 'oven-roasted-ham-sandwich',
    description: ['', 'گوجه', 'کاهو', '% ژامبون تنوري گوشت 90 خیارشور', 'سس مخصوص'],
  },
] as const satisfies ItemData<'sandwich'>[];

export default items;
