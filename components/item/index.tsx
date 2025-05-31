import { Text } from '@/atoms';
import { Category } from '@/mock-data/categories';
import { ItemData } from '@/mock-data/items/types';
import { cn } from '@/utils/jsx-tools';
import { motion } from 'motion/react';
import { useMemo } from 'react';

interface CategoryCardProps {
  value: ItemData<Category>;
  className?: string;
}

export function MenuItemCard({ value, className }: CategoryCardProps) {
  const isEn = useMemo(() => {
    return /^[A-Za-z]/.test(value.title);
  }, [value]);
  console.log(isEn);

  return (
    <motion.div
      dir={isEn ? 'ltr' : 'rtl'}
      className={cn(
        className,
        'bg-primary flex items-center justify-center p-2 text-center text-black',
        isEn ? 'font-title text-xl' : 'font-farsi text-xl font-bold',
      )}
    >
      <Text>{value.title}</Text>
    </motion.div>
  );
}
