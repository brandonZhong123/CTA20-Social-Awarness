'use client'

import MPContactForm from '@/components/MPContactForm'

export default function TakeActionPage() {
  const handleMPContactSubmit = async (data: {
    name: string
    email: string
    postalCode: string
    message: string
  }) => {
    // This would be replaced with actual API call to handle form submission
    console.log('Form submitted:', data)
    // TODO: Implement form submission handling
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Take Action Now</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your voice matters in the fight for equitable healthcare access. Join our campaign
            to support Call to Action 20 and help create positive change for Indigenous communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Your MP</h2>
            <MPContactForm onSubmit={handleMPContactSubmit} />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Sign the Petition</h2>
              <p className="text-gray-600 mb-6">
                Add your name to our petition calling on the federal government to implement
                Call to Action 20 and address healthcare disparities facing Indigenous peoples.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="petition-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="petition-name"
                    name="petition-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="petition-email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="petition-email"
                    name="petition-email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                >
                  Sign Petition
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Current Signatures: 15,487
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Spread the Word</h2>
              <p className="text-gray-600 mb-6">
                Help raise awareness by sharing our campaign on social media and within your community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Share on Twitter
                </button>
                <button className="flex items-center justify-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">
                  Share on Facebook
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Get Involved Locally</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600">✓</div>
                  <div>
                    <h3 className="font-medium">Join Local Events</h3>
                    <p className="text-gray-600">Participate in community meetings and awareness events.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600">✓</div>
                  <div>
                    <h3 className="font-medium">Volunteer</h3>
                    <p className="text-gray-600">Help organize events and support our campaign activities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600">✓</div>
                  <div>
                    <h3 className="font-medium">Share Your Story</h3>
                    <p className="text-gray-600">Add your voice to our collection of healthcare experiences.</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-indigo-100 text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-200 transition-colors">
                Find Local Opportunities
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Campaign Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">15,487</div>
              <p className="text-gray-700">Petition Signatures</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">2,345</div>
              <p className="text-gray-700">MP Letters Sent</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">127</div>
              <p className="text-gray-700">Local Events</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">45,000+</div>
              <p className="text-gray-700">Social Shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 