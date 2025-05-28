'use client';

import { AnimatePresence, motion, useDragControls } from 'motion/react';
import { PointerEvent, useCallback, useState } from 'react';

export default function Motion1() {
  const [key, setKey] = useState(0);
  const controls = useDragControls();

  const startDrag = useCallback(
    (event: PointerEvent) => controls.start(event, { cursorProgress: { x: 0, y: 0 } }),
    [controls],
  );

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={key}
          drag
          dragControls={controls}
          dragMomentum={false}
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0, position: 'absolute' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotateZ: -5 }}
        >
          <div className="min-h-48 min-w-48 rounded-3xl shadow">
            <div className="p-8">
              <div>salam</div>
              <div onPointerDown={startDrag}>DragMe!</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className="p-4" onClick={() => setKey((k) => k + 1)}>
        Toggle
      </button>
    </>
  );
}
