'use client';

import AnimatedHeading from '@/components/AnimatedHeading';
import ExpandableCard from '@/components/ExpandableCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Effort = {
  title: string;
  summary: string;
  fullContent: string;
  imageSrc?: string;
};

const efforts: Effort[] = [
  {
    title: "Jordan's Principle",
    summary: "A child-first principle ensuring First Nations children can access public services on the same terms as other children.",
    fullContent: "Jordan's Principle ensures all First Nations children living in Canada can gain equitable access to products, services and supports required to sustain sufficient quality of life. These services assist with a wide range of health, social and educational needs. Jordan's Principle is named in memory of Jordan River Anderson, a First Nations child from Norway House Cree Nation in Manitoba. Born with complex medical needs, Jordan spent more than two years unnecessarily in a Manitoba hospital while the Province of Manitoba and the federal government argued over who should pay for his at-home care. Jordan died in the hospital at the age of five years old, never having spent a day in his family's home.",
    imageSrc: "/jordan.png"
  },
  {
    title: "First Nations Health Authority (FNHA)",
    summary: "The first province-wide health authority of its kind in Canada, working to reform healthcare delivery for First Nations in BC.",
    fullContent: "The First Nations Health Authority (FNHA) is the first province-wide health authority of its kind in Canada. In 2013, the FNHA assumed the programs, services, and responsibilities formerly handled by Health Canada's First Nations Inuit Health Branch – Pacific Region. The FNHA works to reform the way health care is delivered to BC First Nations through direct services and collaboration with provincial partners. They are driven by the vision of embedding cultural safety and humility into health service delivery, and work to address systemic racism and discrimination in health care."
  },
  {
    title: "National Council for Reconciliation",
    summary: "Established through Bill C-29 to monitor and report on reconciliation efforts, including health-related initiatives.",
    fullContent: "The National Council for Reconciliation, established through Bill C-29, plays a crucial role in monitoring and reporting on the progress of reconciliation efforts, with a specific focus on health-related initiatives. The council ensures accountability and transparency in implementing the Truth and Reconciliation Commission's Calls to Action. Their work includes tracking improvements in Indigenous healthcare access, cultural safety in healthcare settings, and the integration of traditional healing practices. This oversight helps maintain momentum in addressing systemic barriers and promoting equitable healthcare for Indigenous peoples."
  },
  {
    title: "Health Program Development",
    summary: "Community-driven healthcare initiatives that integrate traditional healing and culturally safe practices to promote holistic Indigenous well-being.",
    fullContent: "Indigenous communities manage health initiatives that integrate traditional healing methods with contemporary strategies to meet particular needs and enhance comprehensive health results. These efforts aim to address intergenerational trauma stemming from residential schools and enhance access to culturally suitable healthcare, mental health services, and long-term care. Initiatives such as Carrier Sekani Family Services’ community training and Indigenous language revitalization efforts enhance cultural safety through the promotion of respect and understanding. Backed by more than $6.2 billion in funding from Indigenous Services Canada for 2024-25, these programs promote the health and cultural welfare of Indigenous communities",
  }
];

function OngoingEffortsPage() {
  const [imageError, setImageError] = useState<string | null>(null);
  const topEfforts = efforts.slice(0, 2);
  const bottomEfforts = efforts.slice(2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Header and Top Cards */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <AnimatedHeading 
                text="Ongoing Efforts" 
                className="text-4xl font-bold text-gray-900 mb-2"
              />
              <p className="text-lg text-gray-600">
                Current initiatives and progress in Indigenous healthcare reform
              </p>
            </div>

            {/* Top Cards */}
            {topEfforts.map((effort, index) => (
              <motion.div
                key={effort.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ExpandableCard
                  {...effort}
                  className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Right side: Image */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-[400px] rounded-lg overflow-hidden bg-blue-50">
              {imageError ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500">
                  Error loading image: {imageError}
                </div>
              ) : (
                <Image
                  src="/ongoing-efforts.png"
                  alt="Healthcare Background"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  style={{ objectPosition: 'center center' }}
                  priority
                  onError={() => {
                    console.error('Error loading ongoing-efforts.png');
                    setImageError('Failed to load image');
                  }}
                  onLoad={() => {
                    console.log('ongoing-efforts.png loaded successfully');
                    setImageError(null);
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {bottomEfforts.map((effort, index) => (
            <motion.div
              key={effort.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 2) * 0.1 }}
            >
              <ExpandableCard
                {...effort}
                className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              />  
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OngoingEffortsPage; 