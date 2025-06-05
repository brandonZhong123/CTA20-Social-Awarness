'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = '#4F46E5' // indigo-600
}: CircularProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const initialOffset = circumference;
  const finalOffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      className="relative" 
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <motion.circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />
        {/* Progress circle */}
        <motion.circle
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? finalOffset : initialOffset}
          strokeLinecap="round"
          stroke={color}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
        style={{ color }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {percentage}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
} 