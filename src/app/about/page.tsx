import CircularProgress from '@/components/CircularProgress';

export default function AboutPage() {
  const travelStats = [
    { label: 'Average travel distance for Indigenous people', distance: '500+ km' },
    { label: 'Average travel distance for Inuit people', distance: '1500+ km' },
  ];

  const mentalHealthStats = [
    { label: 'First Nations needing mental health care', percentage: 47 },
    { label: 'Cases with partially met or unmet needs', percentage: 75 },
  ];

  const discriminationStats = [
    { label: 'Health concerns minimized', percentage: 67 },
    { label: 'Cultural protocols not respected', percentage: 21 },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding the Crisis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indigenous peoples in Canada continue to face significant health disparities compared to non-Indigenous populations, 
            made worse by limited access to quality healthcare and systemic barriers.
          </p>
        </div>

        {/* Key Issues Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Access Barriers</h2>
            <div className="space-y-6">
              {travelStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{stat.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mental Health Crisis</h2>
            <div className="grid grid-cols-2 gap-8">
              {mentalHealthStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <CircularProgress percentage={stat.percentage} size={100} color="#4F46E5" />
                  <p className="mt-4 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discrimination Stats */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Healthcare Discrimination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {discriminationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <CircularProgress percentage={stat.percentage} size={120} color="#4F46E5" />
                <p className="mt-4 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="prose prose-lg mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Systemic Impact</h2>
          <p className="text-gray-600 mb-4">
            The effects of colonization and historical trauma have lasting impacts on Indigenous communities, 
            contributing to poorer health outcomes and shorter lifespans. For instance, Inuit males have a life 
            expectancy of around 70 years, compared to the Canadian average of 80 years.
          </p>
          <p className="text-gray-600 mb-4">
            Indigenous communities face higher rates of chronic conditions, mental health issues, and infectious 
            diseases, largely due to historical and systemic factors, including colonialism and systemic discrimination.
          </p>
          <p className="text-gray-600">
            The suicide rate among Inuit people is over 11 times the rate of other Canadian citizens, with Nunavut 
            having one of the highest suicide rates in the world since 1999. Approximately 27% of all deaths in the 
            region have been a result of suicide.
          </p>
        </div>
      </div>
    </div>
  );
} 