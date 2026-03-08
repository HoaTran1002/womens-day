'use client';

import { motion } from 'framer-motion';
import MessageCard from '@/components/MessageCard';

export default function MessagePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
            className="text-6xl mb-4 block"
          >
            💌
          </motion.div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-rose-800/90">Lời Chúc</span>{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Từ Trái Tim
            </span>
          </h1>

          <p className="font-inter text-rose-600/70 max-w-md mx-auto leading-relaxed">
            Mỗi lời chúc là một bông hoa được chắt chiu từ những điều tốt đẹp nhất.
            Hãy để chúng tô điểm ngày đặc biệt của bạn.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
            <span className="text-pink-400 text-sm">✿</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
        </motion.div>

        {/* Message card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <MessageCard />
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center gap-3 text-2xl">
            {['🌸', '💜', '🌺', '💕', '🌷'].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              >
                {e}
              </motion.span>
            ))}
          </div>
          <p className="font-inter text-xs text-rose-400/50 mt-4">
            Nhấn nút để xem thêm lời chúc ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
