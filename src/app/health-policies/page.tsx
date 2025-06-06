'use client';

import AnimatedHeading from '@/components/AnimatedHeading';
import ExpandableCard from '@/components/ExpandableCard';
import { motion } from 'framer-motion';

const policies = [
  {
    title: "Indigenous Healthcare Rights",
    summary: "Constitutional and treaty rights that guarantee access to healthcare services for Indigenous peoples in Canada.",
    fullContent: "Indigenous peoples in Canada have specific healthcare rights protected under Section 35 of the Constitution Act, 1982, and various treaties. These rights include access to non-insured health benefits (NIHB) program, which covers prescription drugs, dental care, vision care, medical supplies and equipment, mental health counselling, and medical transportation. The federal government has a fiduciary responsibility to ensure these services are provided in a way that respects Indigenous cultural practices and traditions. Recent court decisions have further reinforced these rights and the government's obligations to provide equitable healthcare access."
  },
  {
    title: "Truth and Reconciliation Commission's Health Calls to Action",
    summary: "Specific recommendations for addressing Indigenous health inequities and improving healthcare access.",
    fullContent: "The Truth and Reconciliation Commission's Calls to Action include several health-related recommendations (Calls 18-24). These calls demand the recognition of Indigenous healing practices, increased Indigenous healthcare professionals, cultural competency training for healthcare workers, and measurable goals for closing gaps in health outcomes. They specifically call for sustainable funding for Indigenous healing centers and the integration of Indigenous healing practices when requested by Indigenous patients. The calls also emphasize the importance of addressing the distinct health needs of Métis, Inuit, and off-reserve Aboriginal peoples."
  },
  {
    title: "Cultural Safety and Humility Framework",
    summary: "Guidelines for healthcare providers to deliver culturally safe and respectful care to Indigenous patients.",
    fullContent: "The Cultural Safety and Humility Framework is a comprehensive approach to healthcare delivery that aims to create an environment free of racism and discrimination. It requires healthcare providers to examine their own biases, understand the historical context of Indigenous health inequities, and adapt their practices to respect Indigenous cultural values and traditions. The framework emphasizes the importance of Indigenous leadership in healthcare decision-making and the need for ongoing education and training for healthcare providers. Key elements include relationship-building, recognition of Indigenous knowledge systems, and commitment to continuous learning and improvement."
  },
  {
    title: "Indigenous Health Legislation",
    summary: "Federal and provincial laws governing Indigenous healthcare rights and service delivery.",
    fullContent: "Recent legislative developments include the United Nations Declaration on the Rights of Indigenous Peoples Act (UNDRIP) and its implications for healthcare. This legislation requires governments to consult and cooperate with Indigenous peoples in developing and implementing health policies and programs. It also recognizes Indigenous peoples' right to maintain their traditional medicines and health practices. Provincial legislation varies but generally includes requirements for cultural safety training, Indigenous representation in health authorities, and protection against discrimination in healthcare settings."
  },
  {
    title: "Healthcare Funding Policies",
    summary: "Policies governing the allocation and distribution of healthcare resources to Indigenous communities.",
    fullContent: "Healthcare funding for Indigenous communities involves complex arrangements between federal, provincial, and Indigenous governments. The Non-Insured Health Benefits (NIHB) Program provides coverage for a range of health services not covered by provincial/territorial health insurance. Recent policy changes have focused on increasing flexibility in funding arrangements, allowing Indigenous communities more control over healthcare spending. This includes the implementation of block funding agreements and the creation of Indigenous-led health authorities. The policies also address specific challenges such as medical transportation in remote communities and access to specialized services."
  }
];

export default function HealthPoliciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading 
            text="Health Policies" 
            className="text-5xl font-bold text-indigo-900 mb-6"
          />
          <motion.p 
            className="text-xl text-indigo-700 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Key policies and legislation that shape healthcare access and delivery for Indigenous peoples in Canada.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="lg:even:translate-y-12"
            >
              <ExpandableCard
                title={policy.title}
                summary={policy.summary}
                fullContent={policy.fullContent}
                className="bg-gradient-to-br from-white to-indigo-50 hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-indigo-100 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">
              Understanding Healthcare Policies
            </h3>
            <p className="text-indigo-700">
              These policies form the foundation of Indigenous healthcare rights and services in Canada. 
              They represent ongoing efforts to address historical inequities and ensure culturally appropriate care.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 