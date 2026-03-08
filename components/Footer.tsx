'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          <span className="text-xl">🌸</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-playfair font-bold text-xl" style={{
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Happy Women's Day 🌸
            </Link>
            <p className="font-inter text-xs text-rose-500/60 mt-1">
              Ngày Quốc Tế Phụ Nữ · 8 Tháng 3 · {currentYear}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {[
              { href: '/', label: 'Trang Chủ' },
              { href: '/message', label: 'Lời Chúc' },
              { href: '/gallery', label: 'Bộ Sưu Tập' },
              { href: '/about', label: 'Về Chúng Tôi' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-xs text-rose-600/60 hover:text-pink-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Made with love */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="font-inter text-sm text-rose-600/70 flex items-center gap-1"
          >
            Made with <span className="text-red-400 text-base">❤️</span> for all women
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
