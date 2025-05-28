'use client';
import { cn } from '@/utils/jsx-tools';
import { AnimatePresence, motion } from 'motion/react';

const items = new Array(5).fill(0);

export default function ItemsPage() {
  return (
    <div className="container mx-auto flex flex-col gap-8 py-4">
      <AnimatePresence initial={false}>
        {items.map((_, item) => (
          <motion.div
            key={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className={cn(['flex items-center justify-between', 'rounded-xl px-4 py-1'])}
              initial={{
                opacity: 0,
                y: -8,
                scale: 0.98,
                filter: 'blur(4px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                y: 8,
                scale: 0.98,
                filter: 'blur(4px)',
              }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <div className="w-full rounded-2xl p-8 text-center shadow">item ${item}</div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
