'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Link from 'next/link';

const features = [
  {
    icon: '💌',
    title: 'Lời Chúc Yêu Thương',
    desc: '20 lời chúc được chắt lọc từ trái tim, dành riêng cho những người phụ nữ đặc biệt.',
    href: '/message',
    color: 'from-rose-50 to-pink-100',
    accent: '#ec4899',
  },
  {
    icon: '🖼️',
    title: 'Bộ Sưu Tập Hoa',
    desc: 'Những hình ảnh tươi đẹp và rực rỡ, thể hiện vẻ đẹp đa dạng của phụ nữ.',
    href: '/gallery',
    color: 'from-purple-50 to-fuchsia-100',
    accent: '#a855f7',
  },
  {
    icon: '🌟',
    title: 'Lời Tri Ân',
    desc: 'Sự tri ân sâu sắc gửi đến những người phụ nữ đã làm cuộc đời này đẹp hơn.',
    href: '/about',
    color: 'from-pink-50 to-rose-100',
    accent: '#f43f5e',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Features section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-rose-800/90 mb-4">
              Dành Riêng Cho Bạn
            </h2>
            <p className="font-inter text-rose-600/70 max-w-lg mx-auto">
              Ba phần đặc biệt được tạo ra với tất cả tình yêu thương
            </p>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #ec4899, #a855f7)' }} />
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link href={feature.href}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative bg-gradient-to-br ${feature.color} rounded-3xl p-8 text-center cursor-pointer border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: `0 0 40px ${feature.accent}22`,
                        background: `radial-gradient(circle at center, ${feature.accent}0a 0%, transparent 70%)`,
                      }}
                    />

                    <motion.div
                      className="text-5xl mb-4 block relative z-10"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    >
                      {feature.icon}
                    </motion.div>

                    <h3 className="font-playfair text-xl font-semibold text-rose-800/90 mb-3 relative z-10">
                      {feature.title}
                    </h3>

                    <p className="font-inter text-sm text-rose-600/70 leading-relaxed relative z-10">
                      {feature.desc}
                    </p>

                    <div
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium relative z-10 transition-all duration-300 group-hover:gap-2"
                      style={{ color: feature.accent }}
                    >
                      Khám phá ngay
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <div className="glass rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-3xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(249,168,212,0.3), rgba(192,132,252,0.3))',
              }}
            />

            <div className="relative z-10">
              <span className="font-playfair text-8xl text-pink-300/50 leading-none block">"</span>

              <blockquote className="font-playfair text-2xl sm:text-3xl italic text-rose-800/90 leading-relaxed -mt-6 mb-6">
                Phụ nữ là kiệt tác của tạo hóa — không phải vì sự hoàn hảo, mà vì sức mạnh phi thường ẩn sau nụ cười dịu dàng.
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
                <span className="font-inter text-sm text-pink-400 tracking-widest uppercase">Gửi đến bạn</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
