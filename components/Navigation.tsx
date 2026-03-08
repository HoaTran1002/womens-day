'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/message', label: 'Lời Chúc' },
  { href: '/gallery', label: 'Bộ Sưu Tập' },
  { href: '/about', label: 'Về Chúng Tôi' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass border-b border-white/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl transition-transform group-hover:scale-110 duration-300">🌸</span>
              <span
                className="font-playfair font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                8/3
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link font-inter text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-pink-600'
                        : 'text-rose-700/70 hover:text-pink-500'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile nav */}
            <div className="md:hidden flex items-center gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-medium transition-colors ${
                      isActive ? 'text-pink-600' : 'text-rose-700/60'
                    }`}
                  >
                    {link.label.split(' ')[0]}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
