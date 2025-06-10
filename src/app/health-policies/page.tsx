'use client';

import ExpandableCard from '@/components/ExpandableCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const policies = [
  {
    title: "Historical Context & Current Crisis",
    summary: "Canada has never developed a formal law around Indigenous health care, leading to ongoing systemic issues.",
    fullContent: "Despite recent meetings on developing Indigenous health legislation, federal Indigenous health policy has been neglected for decades. The 2004 Health Accord between the federal government and provinces/territories included a 10-Year Plan on improving Indigenous health, but it expired in 2014 and hasn't been replaced despite repeated promises. The Canadian Health Coalition called the 'lack of progress on closing the health gap for Aboriginal people' the most egregious of the 2004 Health Accord's failings. Indigenous people continue to face 'syndemic' conditions - multiple interacting and mutually aggravating epidemics, worsened by existing negative health determinants due to colonialism."
  },
  {
    title: "Jurisdictional Complexity",
    summary: "Canada's healthcare system operates under a complex jurisdictional patchwork with 15 different systems.",
    fullContent: "Canada's public health care system operates under a jurisdictional patchwork, divided between the provinces, territories, the federally-funded Non-Insured Health Benefits (NIHB) program for First Nations and Inuit, and limited Métis programs via Indigenous Services Canada. This complexity means there are effectively 15 different healthcare systems in the country. Although medicare has been a point of Canadian pride since the 1960s, health care has never appeared in the Constitution, either in 1867 or 1982. The Constitution merely delegates jurisdiction for hospitals to the provinces, with no mention of Indigenous peoples or their jurisdiction. The Canada Health Act of 1984 similarly doesn't mention Indigenous peoples, despite the emergence of constitutional Aboriginal rights just years earlier."
  },
  {
    title: "Indigenous Healthcare Activism",
    summary: "A long history of Indigenous resistance and advocacy for better healthcare, dating back to 1872.",
    fullContent: "Indigenous people have never been passive recipients of Canada's services. As early as 1872, the Peguis First Nation sent an affidavit disputing lack of health care provision promised in Treaty 1. In 1935, Chief George Dreaver took the Crown to court over medical supplies under Treaty 6's medicine chest clause. The 1999 Wuskwi Sipihk Cree Nation decision indicated that the Treaty should include full healthcare in a contemporary context. Notable activists like Jean Cuthand Goodwill, the first Native registered nurse in Saskatchewan, worked for decades to increase Native people's involvement in health care, co-founding the Canadian Indigenous Nurses Association in 1974 and developing numerous Indigenous health programs."
  },
  {
    title: "Recent Developments & Joyce's Principle",
    summary: "Current efforts to address systemic racism and improve Indigenous healthcare access.",
    fullContent: "Recent developments have been sparked by tragic events like Joyce Echaquan's death in 2020, who recorded racist treatment at a Quebec hospital. This led to Joyce's Principle, a set of proposals by the Atikamekw Nation and Manawan. In British Columbia, the 'In Plain Sight' report acknowledged systemic Indigenous-specific racism within BC's health care system. However, implementation remains a challenge. Life expectancy for First Nations in BC decreased by two and half years from 2011 to 2017, partly due to the overdose epidemic, even with a First Nations Health Authority in place. The COVID-19 pandemic has further aggravated the longer crisis in Indigenous health."
  },
  {
    title: "International Obligations & Legal Framework",
    summary: "Canada's international commitments and legal obligations regarding Indigenous healthcare.",
    fullContent: "Canada is bound by several international agreements, including the Numbered Treaties between the Crown and Indigenous Nations, and the UN's 1966 International Covenant on Economic, Social and Cultural Rights (ICESCR). The Maskwacis Cree's 2016 submission emphasized Article 12(1)'s holistic guarantee of well-being. Canada has yet to ratify the Indigenous and Tribal Peoples Convention of 1989, despite its Article 25 ensuring adequate health services for Indigenous peoples. Canada maintains it has no legal or constitutional obligations to provide health services to Indigenous people, claiming it does so only as a matter of policy or 'benevolence.' This stance contradicts Treaty rights and international obligations."
  }
];

export default function HealthPoliciesPage() {
  const [imageError, setImageError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Health Policies
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 font-medium">
                Understanding the complex history and current state of Indigenous healthcare policies in Canada
              </p>
            </div>
            <div className="md:w-1/2 relative h-[300px] rounded-lg overflow-hidden bg-blue-50">
              {imageError ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500">
                  Error loading image: {imageError}
                </div>
              ) : (
                <Image
                  src="/health1.png"
                  alt="Healthcare Background"
                  fill
                  className="object-cover object-center"
                  priority
                  onError={() => {
                    console.error('Error loading health1.png');
                    setImageError('Failed to load image');
                  }}
                  onLoad={() => {
                    console.log('health1.png loaded successfully');
                    setImageError(null);
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {policies.slice(0, -1).map((policy, index) => (
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
                className="bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          ))}
          {/* Last card centered */}
          <motion.div
            key={policies[policies.length - 1].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (policies.length - 1) * 0.1 }}
            className="lg:col-span-2 lg:w-1/2 lg:mx-auto"
          >
            <ExpandableCard
              title={policies[policies.length - 1].title}
              summary={policies[policies.length - 1].summary}
              fullContent={policies[policies.length - 1].fullContent}
              className="bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gray-100 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Moving Forward
            </h3>
            <p className="text-gray-600">
              As we move towards developing Indigenous healthcare legislation, it remains to be seen if the federal government will finally accept its responsibilities, listen to Indigenous healthcare leaders and activists, and address opportunities for change with commitment, instead of delay, negligence and court challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 