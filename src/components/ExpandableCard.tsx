'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ExpandableCardProps {
  title: string;
  summary: string;
  fullContent: string;
  className?: string;
}

export default function ExpandableCard({ title, summary, fullContent, className = '' }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`rounded-xl shadow-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="cursor-pointer p-8"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
      >
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold text-indigo-900 mb-3">{title}</h3>
          <motion.button
            className="p-2 rounded-full hover:bg-indigo-100 flex-shrink-0"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>
        <p className="text-indigo-700/80">{summary}</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-8 pb-8"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-t border-indigo-100 pt-4 mt-2">
                <p className="text-indigo-900/80 leading-relaxed">{fullContent}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 