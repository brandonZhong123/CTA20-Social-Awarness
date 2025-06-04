export default function HealthPoliciesPage() {
  const legalFrameworks = [
    {
      title: "United Nations Declaration on the Rights of Indigenous Peoples",
      description: "A set of international standards providing a framework for Indigenous well-being and reconciliation, though not directly binding law.",
      icon: "📜"
    },
    {
      title: "International Covenant on Economic, Social and Cultural Rights (ICESCR)",
      description: "A binding international treaty emphasizing comprehensive commitment to health, promoting a proactive and holistic approach to well-being.",
      icon: "⚖️"
    },
    {
      title: "Canada Health Act (1984)",
      description: "Federal legislation that notably does not mention Indigenous peoples, reaffirming provincial jurisdiction where the federal government is only responsible for funding.",
      icon: "🏛️"
    }
  ];

  const systemicIssues = [
    {
      title: "Jurisdictional Complexity",
      description: "Healthcare is divided into 15 separate systems, leading to confusion over service eligibility and responsibility.",
      impact: "Delays and barriers in accessing care"
    },
    {
      title: "Constitutional Gaps",
      description: "Since the 1960s implementation of medicare, Indigenous healthcare has never appeared in federal Canadian Law.",
      impact: "Lack of clear legal framework for Indigenous healthcare rights"
    },
    {
      title: "Administrative Barriers",
      description: "Provinces manage insured health services while federal government provides supplementary services through NIHB program.",
      impact: "Complex and disjointed system for Indigenous people"
    }
  ];

  const racismImpacts = [
    "Stress from discriminatory encounters",
    "Denial of appropriate health services",
    "Internalized stigma and discrimination",
    "Mental strain from anticipating negative treatment",
    "Chronic stress and strained social experiences"
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Policies & Systemic Barriers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the legal framework and systemic racism that affects Indigenous healthcare access in Canada.
          </p>
        </div>

        {/* Legal Frameworks Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Legal Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalFrameworks.map((framework, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-4">{framework.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.title}</h3>
                <p className="text-gray-600">{framework.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Systemic Issues Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Systemic Barriers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemicIssues.map((issue, index) => (
              <div key={index} className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                <p className="text-gray-600 mb-4">{issue.description}</p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-indigo-600 font-medium">Impact: {issue.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Systemic Racism Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Impact of Systemic Racism</h2>
          <p className="text-gray-600 mb-6">
            Systemic racism extends beyond individual acts of discrimination during medical treatment - it is embedded in the very structure of the Canadian health system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {racismImpacts.map((impact, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 