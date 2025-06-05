'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface StoryCardProps {
  name: string;
  community?: string;
  location: string;
  image?: string;
  story: string;
  date: string;
}

export default function StoryCard({
  name,
  community,
  location,
  image,
  story,
  date
}: StoryCardProps) {
  // Custom object-position for each image to ensure faces are visible
  const getImagePosition = (imageName: string) => {
    switch (imageName) {
      case '/brian-sinclair.png':
        return 'object-[center_25%]';
      case '/joyce_echaquan.png':
        return 'object-[center_35%]';
      case '/november-kelly.png':
        return 'object-[center_30%]';
      default:
        return 'object-center';
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <motion.div
        className="absolute inset-0 bg-gray-500 opacity-0"
        whileHover={{ opacity: 0.02 }}
        transition={{ duration: 0.2 }}
      />
      <div className="md:grid md:grid-cols-[320px,1fr]">
        {image && (
          <motion.div 
            className="relative h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-[400px] md:h-full w-full relative">
              <Image
                src={image}
                alt={`${name}'s story`}
                fill
                className={`object-cover ${image ? getImagePosition(image) : 'object-center'}`}
                sizes="(max-width: 768px) 100vw, 320px"
                priority
              />
            </div>
          </motion.div>
        )}
        <div className="p-8 flex-grow">
          <motion.div 
            className="flex items-start justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-gray-900 mb-2"
                whileHover={{ scale: 1.02, color: "#374151" }}
                transition={{ duration: 0.2 }}
              >
                {name}
              </motion.h3>
              {community && (
                <motion.p 
                  className="text-gray-600 text-base mb-1"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {community}
                </motion.p>
              )}
              <motion.p 
                className="text-gray-500 text-base"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {location}
              </motion.p>
            </div>
            <motion.span 
              className="text-gray-500 text-sm bg-gray-50 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.1, backgroundColor: "#F3F4F6", color: "#111827" }}
              transition={{ duration: 0.2 }}
            >
              {date}
            </motion.span>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {story}
          </motion.p>
          
          <motion.div 
            className="mt-6 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <motion.button
              className="bg-indigo-50 text-indigo-600 px-6 py-2 rounded-full text-sm font-medium flex items-center hover:bg-indigo-100"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Read full story
              <motion.svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 