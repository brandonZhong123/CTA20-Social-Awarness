'use client';

import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.05 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden relative ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2 relative"
          variants={child}
        >
          {word}
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          />
        </motion.span>
      ))}
    </motion.div>
  );
} 