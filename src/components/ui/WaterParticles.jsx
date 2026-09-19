import React from 'react';
import { motion } from 'framer-motion';

export const WaterParticles = ({ count = 6, className = '' }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 6 + (i % 4) * 4,
    x: 10 + ((i * 18) % 85),
    y: 15 + ((i * 23) % 70),
    delay: i * 0.7,
    duration: 5 + (i % 3) * 2,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-tr from-sabol-aqua/30 to-white/60 blur-[0.5px] backdrop-blur-sm border border-white/50 shadow-glow"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [-10, -35, -10],
            x: [-5, 8, -5],
            opacity: [0.3, 0.75, 0.3],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default WaterParticles;
