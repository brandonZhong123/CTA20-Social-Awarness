'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function NextStepsPage() {
  const initiatives = [
    {
      title: "Co-Development of Distinctions-Based Indigenous Health Legislation",
      description: "Federal government collaboration with First Nations, Inuit, and Métis partners to develop health legislation that respects unique needs and governance structures.",
      details: "In British Columbia, the First Nations Health Council is facilitating discussions to guide future health legislation, with ongoing engagement planned through 2027.",
      link: "engage.fnhc.ca",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Implementation of the Indigenous Justice Strategy",
      description: "A comprehensive plan for reforming the justice system in partnership with Indigenous communities.",
      details: "$87 million allocated over five years to support programs including the Indigenous Justice Program and Indigenous Courtwork Program.",
      link: "justice.gc.ca",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Establishment of the National Council for Reconciliation",
      description: "An independent, Indigenous-led organization monitoring reconciliation progress.",
      details: "The Council will receive annual reports on advancements in health, education, and justice as stipulated in the National Council for Reconciliation Act.",
      link: "rcaanc-cirnac.gc.ca",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const additionalInitiatives = [
    {
      title: "Bill S-2: Addressing Indian Act Inequities",
      description: "Legislation to rectify registration and band membership provisions, potentially benefiting 3,500 individuals.",
      timeline: "Introduced May 2025"
    },
    {
      title: "Indigenous Loan Guarantee Program Expansion",
      description: "Doubling program from $5 billion to $10 billion to enable greater Indigenous participation in major projects.",
      timeline: "Implementation ongoing"
    },
    {
      title: "Shared Priorities Advancement",
      description: "Partnership focus on healthcare, food security, housing, education, conservation, and climate action.",
      timeline: "Long-term commitment"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Next Steps in Reconciliation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key initiatives and commitments to improve Indigenous healthcare access and advance reconciliation across Canada.
          </p>
        </AnimatedSection>

        {/* Major Initiatives */}
        <AnimatedSection className="mb-16" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    {initiative.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="bg-white rounded-lg p-4 border border-indigo-100 mb-4">
                  <p className="text-sm text-gray-600">{initiative.details}</p>
                </div>
                <motion.a
                  href={`https://${initiative.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Initiatives */}
        <AnimatedSection className="bg-indigo-50 rounded-lg p-8 mb-16" delay={0.4}>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-sm text-indigo-600 font-medium">{initiative.timeline}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center" delay={0.6}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support These Initiatives</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your involvement can help ensure these commitments translate into meaningful change for Indigenous communities across Canada.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/take-action"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Get Involved Now
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
} 