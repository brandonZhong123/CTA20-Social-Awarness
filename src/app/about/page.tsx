'use client';

import CircularProgress from '@/components/CircularProgress';
import { motion } from 'framer-motion';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedHeading from '@/components/AnimatedHeading';

export default function AboutPage() {
  const travelStats = [
    { label: 'Average travel distance for Indigenous people', distance: '500+ km' },
    { label: 'Average travel distance for Inuit people', distance: '1500+ km' },
  ];

  const mentalHealthStats = [
    { label: 'First Nations needing mental health care', percentage: 47 },
    { label: 'Cases with partially met or unmet needs', percentage: 75 },
  ];

  const discriminationStats = [
    { label: 'Indigenous people who reported their health concerns were minimized when seeking care', percentage: 67 },
    { label: 'Indigenous people reported their cultural protocols were not respected in healthcare settings', percentage: 21 },
    { label: 'Indigenous people reported experiencing discrimination from healthcare professionals', percentage: 25 }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading 
            text="Understanding the Crisis" 
            className="text-4xl font-bold text-gray-900 mb-4"
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Indigenous peoples in Canada continue to face significant health disparities compared to non-Indigenous populations, 
            made worse by limited access to quality healthcare and systemic barriers.
          </motion.p>
        </motion.div>

        {/* Key Issues Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <AnimatedCard delay={0.2}>
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Access Barriers</h2>
              <div className="space-y-6">
                {travelStats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {stat.label}
                      </motion.p>
                      <motion.p 
                        className="text-lg font-semibold text-gray-900"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.2 }}
                      >
                        {stat.distance}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.4}>
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mental Health Crisis</h2>
              <div className="grid grid-cols-2 gap-8">
                {mentalHealthStats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CircularProgress percentage={stat.percentage} size={100} color="#4F46E5" />
                    </motion.div>
                    <motion.p 
                      className="text-sm text-gray-600 text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.2 }}
                    >
                      {stat.label}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Discrimination Stats */}
        <motion.div 
          className="bg-indigo-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading 
            text="Healthcare Discrimination" 
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {discriminationStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CircularProgress percentage={stat.percentage} size={120} color="#4F46E5" />
                </motion.div>
                <motion.p 
                  className="text-gray-600 text-center max-w-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.2 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-600 italic">
              The most reported location of discrimination was in the emergency room, with women being twice as likely to face discrimination.
            </p>
          </motion.div>
        </motion.div>

        {/* Impact Section */}
        <div className="prose prose-lg mx-auto">
          <AnimatedHeading 
            text="Systemic Impact" 
            className="text-2xl font-bold text-gray-900 mb-4"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-4">
              The effects of colonization and historical trauma have lasting impacts on Indigenous communities, 
              contributing to poorer health outcomes and shorter lifespans. For instance, Inuit males have a life 
              expectancy of around 70 years, compared to the Canadian average of 80 years.
            </p>
            <p className="text-gray-600 mb-4">
              Indigenous communities face higher rates of chronic conditions, mental health issues, and infectious 
              diseases, largely due to historical and systemic factors, including colonialism and systemic discrimination.
            </p>
            <p className="text-gray-600">
              The suicide rate among Inuit people is over 11 times the rate of other Canadian citizens, with Nunavut 
              having one of the highest suicide rates in the world since 1999. Approximately 27% of all deaths in the 
              region have been a result of suicide.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 