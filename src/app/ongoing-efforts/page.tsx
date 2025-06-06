'use client';

import AnimatedHeading from '@/components/AnimatedHeading';
import ExpandableCard from '@/components/ExpandableCard';
import { motion } from 'framer-motion';

const efforts = [
  {
    title: "Jordan's Principle",
    summary: "A child-first principle ensuring First Nations children can access public services on the same terms as other children.",
    fullContent: "Jordan's Principle makes sure all First Nations children living in Canada can access the products, services and supports they need, when they need them. It can help with a wide range of health, social and educational needs. Jordan's Principle is named in memory of Jordan River Anderson, a First Nations child from Norway House Cree Nation in Manitoba. Born with complex medical needs, Jordan spent more than two years unnecessarily in hospital while the Province of Manitoba and the federal government argued over who should pay for his at-home care. Jordan died in the hospital at the age of five years old, never having spent a day in his family home."
  },
  {
    title: "First Nations Health Authority (FNHA)",
    summary: "The first province-wide health authority of its kind in Canada, working to reform healthcare delivery for First Nations in BC.",
    fullContent: "The First Nations Health Authority (FNHA) is the first province-wide health authority of its kind in Canada. In 2013, the FNHA assumed the programs, services, and responsibilities formerly handled by Health Canada's First Nations Inuit Health Branch – Pacific Region. The FNHA works to reform the way health care is delivered to BC First Nations through direct services and collaboration with provincial partners. They are driven by the vision of embedding cultural safety and humility into health service delivery, and work to address systemic racism and discrimination in health care."
  },
  {
    title: "Indigenous Health Action Plan",
    summary: "A comprehensive strategy to improve health outcomes and experiences for Indigenous peoples in the healthcare system.",
    fullContent: "The Indigenous Health Action Plan represents a commitment to advance Indigenous health and wellness through concrete actions and systemic change. Key focus areas include: improving cultural safety and humility in health services, increasing Indigenous representation in healthcare professions, establishing Indigenous-led primary care centers, and developing Indigenous healing programs that integrate traditional practices with western medicine. The plan was developed in partnership with Indigenous communities, leaders, and healthcare providers to ensure it reflects Indigenous perspectives and priorities."
  },
  {
    title: "Cultural Safety Training Programs",
    summary: "Mandatory training for healthcare providers to deliver culturally safe and appropriate care to Indigenous patients.",
    fullContent: "Cultural safety training programs are being implemented across healthcare institutions to address systemic racism and discrimination. These programs help healthcare providers understand the historical context of Indigenous health inequities, recognize their own biases, and develop skills to provide culturally safe care. The training includes learning about Indigenous perspectives on health and wellness, the impacts of colonization and intergenerational trauma, and practical strategies for creating welcoming and respectful healthcare environments. Many programs are developed and delivered in partnership with Indigenous educators and knowledge keepers."
  }
];

export default function OngoingEffortsPage() {
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
            text="Ongoing Efforts" 
            className="text-4xl font-bold text-gray-900 mb-4"
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Current initiatives and policies aimed at addressing healthcare disparities 
            and improving access to quality healthcare for Indigenous peoples in Canada.
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {efforts.map((effort, index) => (
            <motion.div
              key={effort.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExpandableCard
                title={effort.title}
                summary={effort.summary}
                fullContent={effort.fullContent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 