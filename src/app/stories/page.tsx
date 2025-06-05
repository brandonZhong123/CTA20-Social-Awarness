'use client';

import StoryCard from '@/components/StoryCard'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedHeading from '@/components/AnimatedHeading'
import { motion } from 'framer-motion'
import Link from 'next/link';

const stories = [
  {
    name: "Brian Sinclair",
    location: "Manitoba",
    story: "Brian, an off-reserve Indigenous man, tragically passed away at age 45 after waiting in the emergency room for over 34 hours. Despite having a referral from his community clinic for a treatable blocked catheter condition, he was never registered. Staff made incorrect assumptions about his status, believing he was intoxicated or homeless.",
    date: "2008",
    image: "/brian-sinclair.png",
    readMoreLink: "https://www.cbc.ca/news/canada/manitoba/winnipeg-brian-sinclair-report-1.4295996 "
  },
  {
    name: "November Kelly",
    community: "Ojibway",
    location: "OniGaming First Nation",
    story: "A 25-year-old mother who died after experiencing ongoing abdominal pain following a car accident. Despite multiple visits to hospitals in Thunder Bay and Fort Frances, her symptoms were dismissed with only prescriptions offered. Her condition worsened over four months until she collapsed during a family trip. She passed away at St. Boniface hospital from a severe infection caused by an untreated hole in her bowel.",
    date: "Recent",
    image: "/november-kelly.png",
    readMoreLink: "https://globalnews.ca/news/10170728/it-was-unnecessary-death-of-indigenous-mother-sparks-bias-concerns-in-ontario-healthcare/"
  },
  {
    name: "Joyce Echaquan",
    community: "Atikamekw",
    location: "Manawan",
    story: "Joyce, a 37-year-old mother of seven, live-streamed her final moments in a Joliette hospital where she endured racist taunts from healthcare staff while crying for help. Despite her clear distress and history of heart problems, her concerns were dismissed. She passed away after being given medication she had explicitly warned she was allergic to.",
    date: "2020",
    image: "/joyce_echaquan.png",
    readMoreLink: "https://www.cbc.ca/news/canada/montreal/joyce-echaquan-systemic-racism-quebec-government-1.6196038"
  }
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading 
            text="Stories" 
            className="text-4xl font-bold text-black mb-4"
          />
          <motion.p 
            className="text-lg text-body max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Real experiences from Indigenous peoples across Canada highlighting the importance of
            equitable healthcare access and the impact of current disparities.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <AnimatedCard key={story.name} delay={index * 0.2}>
              <StoryCard {...story} />
            </AnimatedCard>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <AnimatedHeading 
            text="Share Your Story" 
            className="text-2xl font-semibold text-black mb-4"
          />
          <motion.p 
            className="text-body mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Your experience matters. Help us advocate for change by sharing your healthcare story.
          </motion.p>
          <Link href="/share-story">
            <motion.div
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Your Story
            </motion.div>
          </Link>
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading 
            text="Why Stories Matter" 
            className="text-2xl font-semibold text-black mb-4"
          />
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Raise Awareness",
                description: "Personal stories help others understand the real impact of healthcare disparities on Indigenous communities."
              },
              {
                title: "Drive Change",
                description: "Your experiences can influence policy makers and healthcare providers to implement needed changes."
              },
              {
                title: "Build Community",
                description: "Sharing stories helps connect people with similar experiences and creates a stronger voice for change."
              }
            ].map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.2}>
                <div className="h-full p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium text-black mb-2">{item.title}</h3>
                  <p className="text-body">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 