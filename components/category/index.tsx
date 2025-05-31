import { Text } from '@/atoms';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

export interface CategoryData {
  title: string;
  slug: string;
  image: StaticImageData;
}

interface CategoryCardProps {
  value: CategoryData;
}

export function CategoryCard({ value }: CategoryCardProps) {
  return (
    <motion.div className="flex-center" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ y: 0 }}>
      <div className="mb-4 size-24">
        <Image src={value.image} alt={value.title} className="w-full" />
      </div>
      <Text uppercase className="font-title block text-center transition delay-200">
        {value.title}
      </Text>
    </motion.div>
  );
}
