import allItems from '@/mock-data/items';
import { PagePropsWithParams } from '@/utils/next-tools';
import ItemsClient from './client';
import Link from 'next/link';
import { Icon } from '@/atoms';

export default async function ItemsPage({ params }: PagePropsWithParams<'slug'>) {
  const { slug } = await params;
  const items = allItems.filter((item) => item.slug.endsWith(slug));
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <div className="mt-4">
        <Link href="/menu" className="font-title">
          <Icon name="arrow-back" className="me-2" />
          <span className="font-title">full menu</span>
        </Link>
      </div>
      <ItemsClient items={items} />
    </div>
  );
}
