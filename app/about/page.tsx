'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const qualities = [
  { icon: '💪', title: 'Mạnh Mẽ', desc: 'Vượt qua mọi thử thách với sức mạnh phi thường' },
  { icon: '💝', title: 'Yêu Thương', desc: 'Trái tim rộng lớn, yêu thương không giới hạn' },
  { icon: '✨', title: 'Tỏa Sáng', desc: 'Luôn chiếu sáng những ai may mắn có bạn' },
  { icon: '🧠', title: 'Thông Minh', desc: 'Trí tuệ sắc bén, sáng tạo và không ngừng học hỏi' },
  { icon: '🌺', title: 'Duyên Dáng', desc: 'Vẻ đẹp từ bên trong tỏa ra vẻ đẹp bên ngoài' },
  { icon: '🌟', title: 'Truyền Cảm Hứng', desc: 'Là nguồn động lực cho những người xung quanh' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
            className="text-7xl mb-6 block"
          >
            💐
          </motion.div>

          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-rose-800/90">Cảm Ơn Bạn</span>
            <br />
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Vì Đã Là Chính Mình
            </span>
          </h1>

          <p className="font-inter text-rose-600/70 max-w-xl mx-auto leading-relaxed text-lg">
            Nhân ngày Quốc tế Phụ nữ 8/3, chúng tôi muốn gửi lời tri ân sâu sắc nhất
            đến tất cả những người phụ nữ tuyệt vời trên thế giới này.
          </p>
        </motion.div>

        {/* Main tribute card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mb-16"
        >
          <div
            className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
            style={{ background: 'linear-gradient(135deg, #f9a8d4, #c084fc)' }}
          />
          <div className="relative glass rounded-3xl p-10 sm:p-16 text-center">
            <p className="font-playfair text-xl sm:text-2xl text-rose-800/90 leading-loose italic mb-8">
              "Bạn là người mẹ nuôi dưỡng sự sống, người chị che chở yêu thương,
              người bạn đồng hành đáng tin cậy nhất. Bạn cười để người khác mạnh mẽ,
              bạn khóc để hiểu thấu nỗi đau của người khác.{' '}
              <span
                className="not-italic font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Bạn là người phụ nữ — và điều đó khiến bạn trở nên phi thường."
              </span>
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-300" />
              <span className="font-inter text-sm text-pink-400 tracking-widest uppercase">
                Với tất cả yêu thương
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-300" />
            </div>
          </div>
        </motion.div>

        {/* Qualities grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-rose-800/90 mb-3">
            Những Điều Tuyệt Vời
          </h2>
          <p className="font-inter text-rose-600/60 text-sm">
            Chỉ là một vài trong số vô vàn phẩm chất đáng ngưỡng mộ của bạn
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16"
        >
          {qualities.map((q, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-pink rounded-2xl p-5 text-center card-lift"
            >
              <motion.div
                className="text-3xl mb-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
              >
                {q.icon}
              </motion.div>
              <h3 className="font-playfair font-semibold text-rose-800/90 mb-2">{q.title}</h3>
              <p className="font-inter text-xs text-rose-600/60 leading-relaxed">{q.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-10 mb-8">
            <div className="flex justify-center gap-2 mb-6 text-3xl">
              {['🌸', '💜', '🌺', '💕', '🌷', '✨', '🌸'].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 2 + i * 0.3, delay: i * 0.2, repeat: Infinity }}
                >
                  {e}
                </motion.span>
              ))}
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-rose-800/90 mb-4">
              Chúc Mừng Ngày 8/3! 🎉
            </h2>
            <p className="font-inter text-rose-600/70 max-w-lg mx-auto leading-relaxed mb-8">
              Hãy tự thưởng cho mình điều gì đó thật đặc biệt hôm nay.
              Bạn xứng đáng được hưởng tất cả những điều tốt đẹp nhất trong cuộc sống này.
            </p>

            <Link href="/message">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow px-8 py-4 rounded-full font-inter font-semibold text-white text-base"
                style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
              >
                💌 Xem lời chúc của bạn
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
