'use client';

import { motion } from 'framer-motion';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            className="text-6xl mb-4 block"
          >
            🖼️
          </motion.div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-rose-800/90">Bộ Sưu Tập</span>{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Hoa Tươi
            </span>
          </h1>

          <p className="font-inter text-rose-600/70 max-w-lg mx-auto leading-relaxed">
            Như muôn ngàn bông hoa đẹp — mỗi người phụ nữ đều có vẻ đẹp và sức mạnh riêng của mình.
            Di chuột vào để khám phá từng ô nhé.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-sm">✿</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
        </motion.div>

        {/* Gallery */}
        <GalleryGrid />

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center glass-pink rounded-2xl p-6 max-w-lg mx-auto"
        >
          <p className="font-playfair italic text-rose-700/80 text-lg">
            "Mỗi bông hoa đều có lý do để nở."
          </p>
          <p className="font-inter text-xs text-rose-400/60 mt-2 tracking-widest uppercase">
            — Vẻ đẹp của phụ nữ
          </p>
        </motion.div>
      </div>
    </div>
  );
}
