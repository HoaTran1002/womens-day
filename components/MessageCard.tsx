'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRandomMessage, Message } from '@/data/messages';

function useTypingAnimation(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setIsComplete(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, isComplete };
}

async function fireConfetti() {
  const confetti = (await import('canvas-confetti')).default;

  const end = Date.now() + 2000;
  const colors = ['#ec4899', '#a855f7', '#f9a8d4', '#e879f9', '#fbcfe8', '#ffffff'];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
      shapes: ['circle', 'square'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
      shapes: ['circle', 'square'],
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();

  // Center burst
  confetti({
    particleCount: 60,
    spread: 100,
    origin: { x: 0.5, y: 0.5 },
    colors,
    gravity: 0.8,
    scalar: 1.2,
  });
}

interface MessageCardProps {
  initialMessage?: Message;
}

export default function MessageCard({ initialMessage }: MessageCardProps) {
  const [currentMessage, setCurrentMessage] = useState<Message>(
    initialMessage ?? getRandomMessage()
  );
  const [key, setKey] = useState(0);
  const { displayed, isComplete } = useTypingAnimation(currentMessage.text, 35);
  const hasShownConfetti = useRef(false);

  useEffect(() => {
    if (!hasShownConfetti.current) {
      hasShownConfetti.current = true;
      const timer = setTimeout(() => fireConfetti(), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    const next = getRandomMessage(currentMessage.id);
    setCurrentMessage(next);
    setKey((k) => k + 1);
    fireConfetti();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-2xl"
        >
          {/* Card glow */}
          <div
            className="absolute inset-0 rounded-3xl blur-xl opacity-40"
            style={{
              background: 'linear-gradient(135deg, #f9a8d4, #c084fc)',
            }}
          />

          {/* Card */}
          <div className="relative glass rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-white/60">
            {/* Decorative top */}
            <div className="flex justify-center gap-2 mb-8">
              {['🌸', '✨', '🌸'].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                  className="text-2xl"
                >
                  {e}
                </motion.span>
              ))}
            </div>

            {/* Opening quote */}
            <div
              className="font-playfair text-7xl leading-none mb-4 opacity-30"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              "
            </div>

            {/* Message text with typing animation */}
            <p className="font-playfair text-xl sm:text-2xl text-rose-800/90 leading-relaxed italic min-h-[120px] flex items-center justify-center">
              {displayed}
              {!isComplete && (
                <span className="inline-block w-0.5 h-6 bg-pink-400 ml-1 animate-pulse" />
              )}
            </p>

            {/* Closing quote */}
            <div
              className="font-playfair text-7xl leading-none mt-2 opacity-30 rotate-180"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              "
            </div>

            {/* Author */}
            {isComplete && currentMessage.author && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-inter text-sm text-pink-400 mt-6 tracking-widest uppercase"
              >
                — {currentMessage.author}
              </motion.p>
            )}

            {/* Decorative corner flowers */}
            <div className="absolute top-4 left-4 text-pink-200 text-xl opacity-50 select-none">🌸</div>
            <div className="absolute top-4 right-4 text-purple-200 text-xl opacity-50 select-none">🌺</div>
            <div className="absolute bottom-4 left-4 text-pink-200 text-xl opacity-50 select-none">🌷</div>
            <div className="absolute bottom-4 right-4 text-purple-200 text-xl opacity-50 select-none">🌼</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={handleNext}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="btn-glow flex items-center gap-3 px-8 py-4 rounded-full font-inter font-semibold text-white text-base relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f472b6, #a855f7)',
        }}
      >
        <motion.span
          animate={{ rotate: [0, 20, 0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          🎲
        </motion.span>
        Xem lời chúc khác
      </motion.button>

      {/* Card counter hint */}
      <p className="font-inter text-xs text-rose-400/60 text-center">
        Có 20 lời chúc đang chờ bạn khám phá ✨
      </p>
    </div>
  );
}
