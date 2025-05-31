'use client';
import { MenuItemCard } from '@/components/item';
import { Category } from '@/mock-data/categories';
import { ItemData } from '@/mock-data/items/types';
import { AnimatePresence } from 'motion/react';

interface ItemsClientProps {
  items: ItemData<Category>[];
}

export default function ItemsClient({ items }: ItemsClientProps) {
  return (
    <div className="container mx-auto flex grid-cols-2 flex-col gap-8 py-4 sm:grid md:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence initial={false}>
        {items.map((item) => (
          <MenuItemCard key={item.slug} value={item} className="" />
        ))}
      </AnimatePresence>
    </div>
  );
}
