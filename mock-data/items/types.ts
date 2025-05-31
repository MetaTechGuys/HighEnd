import { StaticImageData } from 'next/image';
import { Category } from '../categories';

type ItemSize = '1p' | '2p';

export interface ItemData<C extends Category> {
  slug: `${string}-${C}`;
  title: string;
  image?: StaticImageData;
  description?: string[];
  special?: true;
  size?: ItemSize;
}
