'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  bg: string;
  span?: 'wide' | 'tall' | 'normal';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    emoji: '🌸',
    title: 'Hoa Anh Đào',
    subtitle: 'Biểu tượng của vẻ đẹp và sự tinh tế',
    bg: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
    span: 'wide',
  },
  {
    id: 2,
    emoji: '🌺',
    title: 'Hoa Đỏ Rực',
    subtitle: 'Mạnh mẽ và đam mê',
    bg: 'linear-gradient(135deg, #fee2e2 0%, #fca5a5 100%)',
  },
  {
    id: 3,
    emoji: '🦋',
    title: 'Cánh Bướm',
    subtitle: 'Tự do và biến đổi',
    bg: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)',
  },
  {
    id: 4,
    emoji: '🌷',
    title: 'Hoa Tulip',
    subtitle: 'Yêu thương hoàn hảo',
    bg: 'linear-gradient(135deg, #fdf4ff 0%, #e879f9 40%, #c084fc 100%)',
    span: 'tall',
  },
  {
    id: 5,
    emoji: '✨',
    title: 'Ánh Sao',
    subtitle: 'Tỏa sáng mỗi ngày',
    bg: 'linear-gradient(135deg, #fefce8 0%, #fde047 50%, #f59e0b 100%)',
  },
  {
    id: 6,
    emoji: '🌹',
    title: 'Hoa Hồng',
    subtitle: 'Tình yêu vĩnh cửu',
    bg: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 50%, #ec4899 100%)',
  },
  {
    id: 7,
    emoji: '💜',
    title: 'Tình Yêu',
    subtitle: 'Chân thành và sâu sắc',
    bg: 'linear-gradient(135deg, #f3e8ff 0%, #d8b4fe 100%)',
    span: 'wide',
  },
  {
    id: 8,
    emoji: '🌼',
    title: 'Hoa Cúc',
    subtitle: 'Thuần khiết và trong sáng',
    bg: 'linear-gradient(135deg, #ecfdf5 0%, #86efac 50%, #22c55e 100%)',
  },
  {
    id: 9,
    emoji: '🎀',
    title: 'Ruy Băng',
    subtitle: 'Duyên dáng và tinh tế',
    bg: 'linear-gradient(135deg, #fdf2f8 0%, #f0abfc 100%)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function GalleryGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
    >
      {galleryItems.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className={`relative rounded-2xl sm:rounded-3xl overflow-hidden card-lift cursor-pointer group
            ${item.span === 'wide' ? 'col-span-2' : ''}
            ${item.span === 'tall' ? 'row-span-2' : ''}
          `}
          style={{ minHeight: item.span === 'tall' ? 280 : 140 }}
          onHoverStart={() => setHoveredId(item.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          {/* Background */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{ background: item.bg }}
          />

          {/* Shimmer on hover */}
          {hoveredId === item.id && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center p-5 text-center">
            <motion.div
              animate={hoveredId === item.id ? {
                scale: [1, 1.2, 1.1],
                rotate: [0, -10, 10, 0],
              } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className={item.span === 'tall' ? 'text-6xl mb-3' : 'text-4xl mb-2'}
            >
              {item.emoji}
            </motion.div>

            <motion.h3
              className="font-playfair font-semibold text-rose-800/90 leading-tight"
              style={{ fontSize: item.span === 'tall' ? '1.25rem' : '0.95rem' }}
            >
              {item.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={hoveredId === item.id
                ? { opacity: 1, height: 'auto' }
                : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.3 }}
              className="font-inter text-xs text-rose-600/70 mt-1 overflow-hidden"
            >
              {item.subtitle}
            </motion.p>
          </div>

          {/* Border glow on hover */}
          <motion.div
            animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
            className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 0 2px rgba(236, 72, 153, 0.3)',
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
