'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.8,
          delay,
          bounce: 0.3
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: {
          type: "spring",
          duration: 0.4,
          bounce: 0.3
        }
      }}
      className="h-full relative"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      />
      {children}
    </motion.div>
  );
} 