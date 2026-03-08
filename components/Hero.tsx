'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: mousePos.x * 0.5,
            y: mousePos.y * 0.5,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249,168,212,0.4) 0%, rgba(216,180,254,0.2) 60%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{
            x: -mousePos.x * 0.3,
            y: -mousePos.y * 0.3,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(192,132,252,0.3) 0%, rgba(244,114,182,0.2) 60%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{
            x: mousePos.x * 0.2,
            y: mousePos.y * 0.4,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(253,244,255,0.6) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Decorative flowers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {[
          { top: '15%', left: '8%', size: '3xl', delay: 0, duration: 6 },
          { top: '25%', right: '10%', size: '2xl', delay: 1, duration: 8 },
          { bottom: '30%', left: '12%', size: '2xl', delay: 2, duration: 7 },
          { bottom: '20%', right: '15%', size: '3xl', delay: 0.5, duration: 9 },
          { top: '60%', left: '5%', size: 'xl', delay: 3, duration: 6 },
          { top: '40%', right: '6%', size: 'xl', delay: 1.5, duration: 8 },
        ].map((flower, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30"
            style={{
              top: flower.top,
              left: (flower as { left?: string }).left,
              right: (flower as { right?: string }).right,
              bottom: (flower as { bottom?: string }).bottom,
              fontSize: flower.size === '3xl' ? '2.5rem' : flower.size === '2xl' ? '2rem' : '1.5rem',
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: flower.duration,
              delay: flower.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {['🌸', '🌺', '🌷', '🌼', '✿', '🌹'][i]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
          <div className="glass-pink px-4 py-2 rounded-full flex items-center gap-2">
            <span className="text-lg">🌸</span>
            <span className="font-inter text-sm font-medium text-pink-600 tracking-wider uppercase">
              Ngày Quốc Tế Phụ Nữ · 8 Tháng 3
            </span>
            <span className="text-lg">🌸</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="block text-rose-800/90">Happy</span>
          <span
            className="block italic"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #e879f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Women's Day
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-lg sm:text-xl text-rose-700/70 max-w-xl mx-auto leading-relaxed mb-12"
        >
          Một món quà nhỏ gửi đến những người phụ nữ phi thường —
          <br />
          <em className="font-playfair text-pink-500">những bông hoa đẹp nhất cuộc đời.</em>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/message">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow relative overflow-hidden px-8 py-4 rounded-full font-inter font-semibold text-white text-base tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                🎁 Mở món quà bí mật
              </span>
              <motion.div
                className="absolute inset-0 shimmer"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.button>
          </Link>

          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="glass-pink px-8 py-4 rounded-full font-inter font-medium text-pink-600 text-base tracking-wide border border-pink-200/60 hover:border-pink-300 transition-all duration-300"
            >
              ✨ Khám phá bộ sưu tập
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="font-inter text-xs text-rose-600/60 uppercase tracking-widest">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-pink-400">
              <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
