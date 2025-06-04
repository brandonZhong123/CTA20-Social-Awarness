import React from 'react';

export default function ResourcesPage() {
  const reports = [
    {
      title: "Healthcare Access Survey 2024",
      description: "Recent survey findings on healthcare access for Indigenous, Métis, and Inuit people living off-reserve, highlighting disparities and challenges in accessing care.",
      link: "#"
    },
    {
      title: "Mental Health and Indigenous Communities",
      description: "Research showing 47% of First Nations people living off-reserve require mental health care, with factors including colonial policies and intergenerational trauma.",
      link: "#"
    },
    {
      title: "Healthcare Jurisdictions Analysis",
      description: "Analysis of Canada's 15 separate healthcare systems and their impact on Indigenous healthcare access and delivery.",
      link: "#"
    }
  ];

  const legalFramework = [
    {
      name: "United Nations Declaration on the Rights of Indigenous Peoples",
      description: "International standards providing a framework for Indigenous well-being and reconciliation.",
      link: "#"
    },
    {
      name: "International Covenant on Economic, Social and Cultural Rights",
      description: "Binding international treaty emphasizing comprehensive commitment to health and well-being.",
      link: "#"
    },
    {
      name: "Indigenous and Tribal Peoples Convention",
      description: "International treaty addressing the rights of Indigenous and tribal peoples in healthcare and other areas.",
      link: "#"
    }
  ];

  const statistics = [
    {
      stat: "500+ km",
      description: "Distance many Indigenous people must travel for healthcare services"
    },
    {
      stat: "1500+ km",
      description: "Average travel distance for Inuit people seeking healthcare"
    },
    {
      stat: "11x higher",
      description: "Suicide rate among Inuit people compared to other Canadians"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-4">Resources</h1>
        <p className="text-lg text-body max-w-3xl mx-auto mb-12">
          Access research, legal frameworks, and resources related to Indigenous healthcare access and rights in Canada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {statistics.map((item, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{item.stat}</div>
              <p className="text-body">{item.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mb-6">Latest Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reports.map((report, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-2">{report.title}</h3>
              <p className="text-body mb-4">{report.description}</p>
              <a href={report.link} className="text-indigo-600 hover:text-indigo-500">
                Read more →
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-black mb-6">Legal Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalFramework.map((framework, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-2">{framework.name}</h3>
              <p className="text-body mb-4">{framework.description}</p>
              <a href={framework.link} className="text-indigo-600 hover:text-indigo-500">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 