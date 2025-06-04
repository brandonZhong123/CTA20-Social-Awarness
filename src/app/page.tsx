import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 lg:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Equal Healthcare Access for All Indigenous Peoples
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-200">
              Join our campaign to support Call to Action 20 and help ensure equitable healthcare access for Métis, Inuit, and off-reserve Indigenous peoples across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/take-action"
                className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
              >
                Take Action Now
              </Link>
              <Link
                href="/learn-more"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-full opacity-10">
          {/* Background pattern or image can be added here */}
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Current Reality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">47%</div>
              <p className="text-body">of off-reserve Indigenous peoples report difficulty accessing healthcare services</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3.5x</div>
              <p className="text-body">higher rate of chronic health conditions compared to non-Indigenous populations</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">60%</div>
              <p className="text-body">report experiencing discrimination in healthcare settings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How You Can Help</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-black">✓</div>
                  <p className="ml-3 text-black">Sign our petition to the federal government</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-black">✓</div>
                  <p className="ml-3 text-black">Contact your local MP</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-black">✓</div>
                  <p className="ml-3 text-black">Share personal stories and experiences</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-black">✓</div>
                  <p className="ml-3 text-black">Support Indigenous-led healthcare initiatives</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Take the First Step</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-body">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-body">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="postal-code" className="block text-sm font-medium text-body">Postal Code</label>
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  Join the Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">News</span>
                <h3 className="mt-2 text-xl font-semibold">New Healthcare Policy Proposal</h3>
                <p className="mt-3 text-body">Recent developments in federal policy addressing Indigenous healthcare access...</p>
                <a href="/news/1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">Read more →</a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">Community</span>
                <h3 className="mt-2 text-xl font-semibold">Community Consultation Results</h3>
                <p className="mt-3 text-body">Findings from our recent community consultations on healthcare needs...</p>
                <a href="/news/2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">Read more →</a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">Success Story</span>
                <h3 className="mt-2 text-xl font-semibold">Local Initiative Makes Impact</h3>
                <p className="mt-3 text-body">How one community's healthcare program is making a difference...</p>
                <a href="/news/3" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">Read more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
