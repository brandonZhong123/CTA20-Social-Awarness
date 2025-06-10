'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

interface ExpandableCardProps {
  title: string;
  summary: string;
  fullContent: string;
  className?: string;
  imageSrc?: string;
}

function ExpandableCard({ 
  title, 
  summary, 
  fullContent, 
  className = '', 
  imageSrc 
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  console.log('ExpandableCard props:', { title, imageSrc, isExpanded });

  return (
    <motion.div
      className={`rounded-lg p-6 cursor-pointer ${className}`}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{summary}</p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {imageSrc && (
                <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={`${title} illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      console.error('Image load error:', e);
                      setImageError('Failed to load image');
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', imageSrc);
                      setImageError(null);
                    }}
                  />
                  {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center text-red-500">
                      {imageError}
                    </div>
                  )}
                </div>
              )}
              <p className="text-gray-700">{fullContent}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export type { ExpandableCardProps };
export default ExpandableCard; 