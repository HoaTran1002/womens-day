'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  emoji: string;
  swayDuration: number;
  swayDelay: number;
}

const FLOWER_EMOJIS = ['🌸', '🌺', '🌹', '🌷', '✿', '❀', '🌼', '💮'];

export default function FlowerAnimation() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 18,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
      emoji: FLOWER_EMOJIS[Math.floor(Math.random() * FLOWER_EMOJIS.length)],
      swayDuration: 3 + Math.random() * 4,
      swayDelay: Math.random() * 3,
    }));
    setPetals(generated);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute select-none"
          style={{
            left: `${petal.left}%`,
            top: '-60px',
            fontSize: `${petal.size}px`,
            opacity: 0.55,
            animation: `fall ${petal.duration}s linear ${petal.delay}s infinite, sway ${petal.swayDuration}s ease-in-out ${petal.swayDelay}s infinite alternate`,
          }}
        >
          {petal.emoji}
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-60px) rotate(0deg);
            opacity: 0.55;
          }
          10% {
            opacity: 0.55;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(110vh) rotate(540deg);
            opacity: 0;
          }
        }
        @keyframes sway {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: 60px;
          }
        }
      `}</style>
    </div>
  );
}
