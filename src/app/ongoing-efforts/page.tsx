'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function OngoingEffortsPage() {
  const currentEfforts = [
    {
      title: "Legislative and Policy Development",
      description: "Federal government collaboration with First Nations, Inuit, and Métis partners to develop tailored health legislation.",
      details: "Part of the broader commitment to implement the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP).",
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
        </svg>
      )
    },
    {
      title: "Jordan's Principle Implementation",
      description: "Ensuring First Nations and Inuit children receive necessary health, social, and educational services without delay.",
      details: "Addressing intergenerational impacts of residential schools through timely support programs.",
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Indigenous Services Health Funding",
      description: "Significant investment in Indigenous healthcare services and support programs.",
      details: "Part of the $6.2 billion 2024-25 Departmental Plan for Indigenous Services Canada.",
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const upcomingInitiatives = [
    {
      title: "National Council for Reconciliation Monitoring",
      description: "Implementation of health-related initiatives and TRC's Calls to Action through Bill C-29",
      timeline: "2024-2025",
      status: "Planning Phase"
    },
    {
      title: "Community-Led Health Programs",
      description: "Supporting Indigenous communities in developing and leading their own health programs",
      timeline: "2024-2026",
      status: "Initial Consultation"
    },
    {
      title: "Traditional Healing Integration",
      description: "Incorporating traditional healing practices into community wellness programs",
      timeline: "2024-2025",
      status: "Program Development"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ongoing Efforts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current initiatives and future plans to improve healthcare access and quality for Indigenous peoples, 
            with a focus on culturally appropriate care and community-led solutions.
          </p>
        </AnimatedSection>

        {/* Current Efforts Section */}
        <AnimatedSection className="mb-16" delay={0.2}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentEfforts.map((effort, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    {effort.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{effort.title}</h3>
                <p className="text-gray-600 mb-4">{effort.description}</p>
                <div className="bg-white rounded-lg p-4 border border-indigo-100">
                  <p className="text-sm text-indigo-600">{effort.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Focus Areas */}
        <AnimatedSection className="mb-16 bg-indigo-50 rounded-lg p-8" delay={0.4}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Focus Areas</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              The federal government is working closely with Indigenous partners to create healthcare solutions 
              that respect and incorporate the unique needs of each community. This collaborative approach 
              ensures that healthcare initiatives are culturally appropriate and effective.
            </p>
            <p className="mb-4">
              A significant portion of the $6.2 billion 2024-25 Departmental Plan is dedicated to improving:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access to culturally appropriate healthcare</li>
              <li>Mental health support services</li>
              <li>Long-term care for Indigenous communities</li>
              <li>Support for traditional healing practices</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Upcoming Initiatives Section */}
        <AnimatedSection className="bg-white rounded-lg p-8 shadow-sm" delay={0.6}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute transform rotate-45 bg-indigo-600 text-white text-xs font-semibold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                    {initiative.status}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="ml-3 text-sm text-indigo-600 font-medium">{initiative.timeline}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="mt-16 text-center" delay={0.8}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support These Initiatives</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            These initiatives represent a crucial step toward reconciliation and improved healthcare access. 
            Your support helps ensure these programs reach those who need them most.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/take-action"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Get Involved
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
} 