'use client';

import AnimatedHeading from '@/components/AnimatedHeading';
import ExpandableCard from '@/components/ExpandableCard';
import { motion } from 'framer-motion';

const policies = [
  {
    title: "Jurisdictional Complexity",
    summary: "Understanding the complex healthcare system structure in Canada and its impact on Indigenous healthcare access.",
    fullContent: "Canada's healthcare is divided into 15 separate systems each with their own jurisdiction: one healthcare jurisdiction for each province and territory, the federally funded Non-Insured Health Benefits (NIHB) program for First Nations and Inuit, and the Métis Programs via Indigenous Services Canada. This means each hospital operates under its own jurisdiction based on the province. This leads to a more complex and disjointed system for Indigenous people as the federal government is merely responsible for funding leading to international legislation being a grey area. As a result, care and services can be inconsistent or entirely absent. For instance, while provinces and territories manage insured health services, the federal government provides supplementary services to First Nations and Inuit through the NIHB program. This dual system can cause confusion over service eligibility and responsibility, leading to delays and barriers in accessing care."
  },
  {
    title: "Current Legislative Framework",
    summary: "The current state of Indigenous healthcare legislation in Canada and its limitations.",
    fullContent: "Since the 1960s when medicare was implemented, the constitution never appeared in federal Canadian Law either in 1867 when Canada was a Dominion and in 1982, when Canada gained full independence. Instead, the healthcare constitution is merely controlled by the hospitals in the province with no mention of Indigenous people in the jurisdiction. The Canada Health Act of 1984 does not mention Indigenous peoples. The health act reaffirms the provincial jurisdiction of healthcare where the federal government is only responsible for funding. Although Canada previously developed health policies to Indigenous peoples, a formal enacted legislation for Indigenous health care was never formed. Instead, responsibilities are on reserves to Chiefs and Councils through the Indian act."
  },
  {
    title: "International Obligations",
    summary: "Canada's international commitments and obligations regarding Indigenous healthcare.",
    fullContent: "Canada is bound by legal obligations through numbered treaties between the Crown and Indigenous nations and the United Nations' 1966 International Covenant on Economic, Social and Cultural Rights (ICESCR), which is a binding international treaty. In a 2016 submission to the UN's Expert Mechanism on the Rights of Indigenous Peoples, the Maskwacis Cree emphasized Article 12(1) of the ICESCR, which provides a comprehensive commitment to health not merely the absence of disease, but the assurance of conditions necessary for well-being. In essence, it promotes a proactive and holistic approach to health. The United Nations Declaration on the Rights of Indigenous Peoples, although not directly about health, is a set of international standards rather than a binding law itself, that is meant to provide a framework for Indigenous well-being and reconciliation."
  },
  {
    title: "Current Government Initiatives",
    summary: "Ongoing federal efforts to improve Indigenous healthcare access and delivery.",
    fullContent: "The federal government is collaborating with First Nations, Inuit, and Métis partners to explore legislative and policy options tailored to the unique health needs of each group. This approach aims to respect the diversity among Indigenous peoples and is part of a broader commitment to implement the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP). The 2024-25 Departmental Plan for Indigenous Services Canada outlines a planned spending of over $6.2 billion, with significant portions allocated to health services. This includes initiatives aimed at improving access to culturally appropriate healthcare, mental health support, and long-term care for Indigenous communities. Indigenous communities are actively developing and leading health programs that address their specific needs. These programs often incorporate traditional healing practices and are designed to be culturally relevant, aiming to heal the trauma caused by residential schools and improve overall community well-being."
  },
  {
    title: "Future Policy Developments",
    summary: "Upcoming changes and developments in Indigenous healthcare policy.",
    fullContent: "The federal government is collaborating with First Nations, Inuit, and Métis partners to develop health legislation that respects the unique needs and governance structures of each group. In British Columbia, the First Nations Health Council is facilitating discussions to guide future health legislation, with ongoing engagement planned through 2027. The National Council for Reconciliation has been incorporated as an independent, Indigenous-led organization tasked with monitoring and reporting on the progress of reconciliation efforts. The federal government is preparing to provide the Council with annual reports detailing advancements in areas such as health, education, and justice. Prime Minister Mark Carney has reaffirmed the government's dedication to working in full partnership with Indigenous peoples to advance shared priorities, including health care, food security, housing, education, conservation, climate action, and emergency management."
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
            className="text-xl text-indigo-700 max-w-3xl mx-auto font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Understanding the complex framework of healthcare policies affecting Indigenous peoples in Canada.
          </motion.p>
          <motion.div
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-indigo-900/80 leading-relaxed">
              Canada's healthcare system faces significant challenges in serving Indigenous communities. The system is divided into 15 separate jurisdictions, creating a complex web of responsibilities between provincial, territorial, and federal governments. This fragmentation often results in confusion over service eligibility and creates barriers to accessing care, particularly affecting Indigenous peoples who may need to navigate multiple systems to receive comprehensive healthcare.
            </p>
          </motion.div>
        </motion.div>

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
                className="bg-gradient-to-br from-white to-indigo-50 hover:shadow-xl transition-shadow duration-300"
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
              className="bg-gradient-to-br from-white to-indigo-50 hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-indigo-100 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">
              Moving Forward
            </h3>
            <p className="text-indigo-700">
              These policies and initiatives represent ongoing efforts to address historical inequities and improve healthcare access for Indigenous peoples. Through continued collaboration and commitment to change, we work towards a more equitable and culturally appropriate healthcare system.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 