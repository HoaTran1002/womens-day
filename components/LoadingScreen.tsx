'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #fce7f3 0%, #fdf4ff 50%, #ede9fe 100%)',
          }}
        >
          {/* Orbiting petals */}
          <div className="relative w-32 h-32 mb-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="absolute text-2xl select-none"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: -14,
                  marginLeft: -14,
                }}
                animate={{
                  rotate: [i * 60, i * 60 + 360],
                  x: [Math.cos((i * 60 * Math.PI) / 180) * 45, Math.cos(((i * 60 + 360) * Math.PI) / 180) * 45],
                  y: [Math.sin((i * 60 * Math.PI) / 180) * 45, Math.sin(((i * 60 + 360) * Math.PI) / 180) * 45],
                }}
                transition={{
                  duration: 2.5,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {['🌸', '🌺', '🌷', '🌼', '✿', '🌹'][i]}
              </motion.div>
            ))}

            {/* Center */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-4xl">💐</span>
            </motion.div>
          </div>

          {/* Text */}
          <motion.h2
            className="font-playfair text-2xl font-bold mb-2"
            style={{
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Happy Women's Day
          </motion.h2>

          <p className="font-inter text-sm text-rose-400/70">Đang chuẩn bị món quà cho bạn...</p>

          {/* Loading dots */}
          <div className="flex gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
