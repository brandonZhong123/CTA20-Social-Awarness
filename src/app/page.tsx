'use client';

import Link from 'next/link'
import CircularProgress from '@/components/CircularProgress'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedCard from '@/components/AnimatedCard'
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const heroRef = useRef(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayColor = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["rgba(49, 46, 129, 0.6)", "rgba(255, 255, 255, 1)"]
  );
  const textColor = useTransform(scrollYProgress, [0, 0.8], ["#ffffff", "#1e1b4b"]);
  const subtextColor = useTransform(scrollYProgress, [0, 0.8], ["rgb(199, 210, 254)", "#4338ca"]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen" ref={heroRef}>
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative w-full h-full">
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center text-red-500 bg-blue-50/50 z-10">
                Error loading image: {imageError}
              </div>
            )}
            <motion.div
              className="absolute inset-0"
              style={{ opacity }}
            >
              <Image
                src={'/healthcarehero.png'}
                alt="Healthcare Hero"
                fill
                sizes="100vw"
                quality={100}
                priority
                className="object-cover object-center"
                onError={() => {
                  console.error('Error loading image');
                  setImageError('Failed to load image');
                }}
                onLoad={() => {
                  console.log('Image loaded successfully');
                  setImageError(null);
                }}
              />
            </motion.div>
            <motion.div 
              className="absolute inset-0" 
              style={{ backgroundColor: overlayColor }}
            />
          </div>
        </motion.div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="relative z-10 lg:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: textColor }}
              >
                Equal Healthcare Access for All Indigenous Peoples
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8"
                style={{ color: subtextColor }}
              >
                Join our campaign to support Call to Action 20 and help ensure equitable healthcare access for Métis, Inuit, and off-reserve Indigenous peoples across Canada.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/take-action"
                    className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                  >
                    Take Action Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/about"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer to prevent overlap */}
      <div className="h-[15vh]"></div>

      {/* Key Statistics Section */}
      <section className="bg-white pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
            The Current Reality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                percentage: 86,
                text: "of Indigenous people living off-reserve say supporting traditional healthcare practices is very important"
              },
              {
                percentage: 67,
                text: "reported their health concerns were minimized when seeking care"
              },
              {
                percentage: 47,
                text: "of First Nations people living off-reserve need mental health care, with most needs unmet"
              }
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="text-center p-6 bg-gray-50 rounded-lg h-full">
                  <div className="flex justify-center mb-4">
                    <CircularProgress percentage={stat.percentage} color="#3B82F6" />
                  </div>
                  <p className="text-gray-600">{stat.text}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">How You Can Help</h2>
              <div className="space-y-4">
                {[
                  "Sign our petition to the federal government",
                  "Contact your local MP",
                  "Share personal stories and experiences",
                  "Support Indigenous-led healthcare initiatives"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 text-black">✓</div>
                    <p className="ml-3 text-black">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <AnimatedCard>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Take the First Step</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-600">Postal Code</label>
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join the Campaign
                  </motion.button>
                </form>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "News",
                title: "Major hospital redevelopment",
                description: "The federal government committed $1.2 billion for rebuilding the Weeneebayko Area Health Authority (WAHA) hospital on Moose Factory Island and building supporting facilities in Moosonee.",
                link: "https://www.canada.ca/en/indigenous-services-canada/news/2024/06/canada-announcing-funding-to-build-the-waha-hospital.html?utm_source=chatgpt.com"
              },
              {
                type: "Province",
                title: "Province-supported Indigenous navigators in emergency care",
                description: "Sarnia-Lambton Ontario Health Team is investing $850,000 to hire two full-time Indigenous Navigators in Bluewater Health's emergency department, along with offering mobile care services to Walpole Island First Nation. The new roles start April 1, 2025, to support culturally aware care and continuity for Indigenous patients",
                link: "https://www.sarnialambtonoht.ca/2025/03/19/sarnia-lambton-ontario-health-team-and-indigenous-partners-announce-850000-investment-to-improve-local-indigenous-healthcare/"
              },
              {
                type: "Reducation",
                title: "Indigenous-led wound-care education",
                description: "An eight-session Indigenous ECHO Canada Skin & Wound program launched in February 2025, offering virtual, culturally sensitive education to healthcare teams across Canada. It addresses chronic diabetes-related wounds with interactive case learning and mentorship. It began Feb 10 and runs through May 26, supporting Indigenous-led care in rural and remote regions",
                link: "https://hospitalnews.com/indigenous-echo-canada-skin-and-wound-care/"
              }
            ].map((update, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="bg-gray-50 rounded-lg overflow-hidden h-full">
                  <div className="p-6">
                    <span className="text-sm text-gray-600 font-semibold">{update.type}</span>
                    <h3 className="mt-2 text-xl font-semibold">{update.title}</h3>
                    <p className="mt-3 text-gray-600">{update.description}</p>
                    <motion.a 
                      href={update.link} 
                      className="mt-4 inline-block text-gray-600 hover:text-gray-900"
                      whileHover={{ x: 5 }}
                    >
                      Read more →
                    </motion.a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
