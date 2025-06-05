'use client';

import Link from 'next/link'
import CircularProgress from '@/components/CircularProgress'
import { motion } from 'framer-motion'
import AnimatedCard from '@/components/AnimatedCard'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative z-10 lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Equal Healthcare Access for All Indigenous Peoples
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-200">
              Join our campaign to support Call to Action 20 and help ensure equitable healthcare access for Métis, Inuit, and off-reserve Indigenous peoples across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/take-action"
                  className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
                >
                  Take Action Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/learn-more"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-full opacity-10">
          {/* Background pattern or image can be added here */}
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Current Reality
          </motion.h2>
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
                    <CircularProgress percentage={stat.percentage} color="#4F46E5" />
                  </div>
                  <p className="text-gray-600">{stat.text}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-50">
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-600">Postal Code</label>
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
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
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest Updates
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "News",
                title: "New Healthcare Policy Proposal",
                description: "Recent developments in federal policy addressing Indigenous healthcare access...",
                link: "/news/1"
              },
              {
                type: "Community",
                title: "Community Consultation Results",
                description: "Findings from our recent community consultations on healthcare needs...",
                link: "/news/2"
              },
              {
                type: "Success Story",
                title: "Local Initiative Makes Impact",
                description: "How one community's healthcare program is making a difference...",
                link: "/news/3"
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
