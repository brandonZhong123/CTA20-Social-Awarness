export default function ResourcesPage() {
  const resources = {
    reports: [
      {
        title: "Truth and Reconciliation Commission Call to Action 20",
        description: "Full text and context of Call to Action 20 regarding Indigenous healthcare.",
        link: "#",
        type: "PDF"
      },
      {
        title: "Indigenous Healthcare Access Report 2023",
        description: "Comprehensive analysis of healthcare disparities and recommendations.",
        link: "#",
        type: "PDF"
      },
      {
        title: "Cultural Safety in Healthcare",
        description: "Guide to implementing culturally safe healthcare practices.",
        link: "#",
        type: "PDF"
      }
    ],
    organizations: [
      {
        name: "National Aboriginal Health Organization",
        description: "Supporting Indigenous health initiatives and research across Canada.",
        website: "https://www.naho.ca"
      },
      {
        name: "Indigenous Health Alliance",
        description: "Coalition working to improve Indigenous healthcare access.",
        website: "https://www.indigenoushealthalliance.ca"
      },
      {
        name: "Métis Nation Health Council",
        description: "Advocating for Métis-specific health needs and services.",
        website: "https://www.metisnation.ca/health"
      }
    ],
    research: [
      {
        title: "Healthcare Barriers Study 2023",
        authors: "Dr. Sarah Smith, et al.",
        publication: "Canadian Journal of Indigenous Health",
        link: "#"
      },
      {
        title: "Cultural Safety Implementation Review",
        authors: "Dr. Michael Johnson, et al.",
        publication: "Health Policy Quarterly",
        link: "#"
      },
      {
        title: "Urban Indigenous Healthcare Access",
        authors: "Dr. Emily White, et al.",
        publication: "Journal of Public Health",
        link: "#"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access educational materials, research, and resources about Indigenous healthcare
            access and cultural safety in healthcare settings.
          </p>
        </div>

        {/* Key Reports Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Reports and Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.reports.map((report) => (
              <div key={report.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{report.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {report.type}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{report.description}</p>
                <a
                  href={report.link}
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  Download Report
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Organizations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Supporting Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.organizations.map((org) => (
              <div key={org.name} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{org.name}</h3>
                <p className="text-gray-600 mb-4">{org.description}</p>
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Latest Research</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {resources.research.map((paper) => (
                <div key={paper.title} className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{paper.title}</h3>
                  <p className="text-gray-600">
                    By {paper.authors} • {paper.publication}
                  </p>
                  <a
                    href={paper.link}
                    className="mt-2 inline-block text-indigo-600 hover:text-indigo-500"
                  >
                    Read Paper →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
          <div className="bg-indigo-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="font-medium text-indigo-900 mb-2">For Healthcare Providers</h3>
                <ul className="space-y-2 text-indigo-700">
                  <li>
                    <a href="#" className="hover:text-indigo-500">Cultural Safety Training</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Best Practices Guide</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Resource Toolkit</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-indigo-900 mb-2">For Patients</h3>
                <ul className="space-y-2 text-indigo-700">
                  <li>
                    <a href="#" className="hover:text-indigo-500">Know Your Rights</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Finding Care Guide</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Support Services</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-indigo-900 mb-2">For Advocates</h3>
                <ul className="space-y-2 text-indigo-700">
                  <li>
                    <a href="#" className="hover:text-indigo-500">Advocacy Toolkit</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Campaign Materials</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Policy Briefs</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-indigo-900 mb-2">For Researchers</h3>
                <ul className="space-y-2 text-indigo-700">
                  <li>
                    <a href="#" className="hover:text-indigo-500">Data Resources</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Research Guidelines</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-500">Publication Database</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 