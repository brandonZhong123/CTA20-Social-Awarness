import StoryCard from '@/components/StoryCard'

const stories = [
  {
    name: "Brian Sinclair",
    location: "Manitoba",
    story: "Brian, an off-reserve Indigenous man, tragically passed away at age 45 after waiting in the emergency room for over 34 hours. Despite having a referral from his community clinic for a treatable blocked catheter condition, he was never registered. Staff made incorrect assumptions about his status, believing he was intoxicated or homeless.",
    date: "2008"
  },
  {
    name: "November Kelly",
    community: "Ojibway",
    location: "OniGaming First Nation",
    story: "A 25-year-old mother who died after experiencing ongoing abdominal pain following a car accident. Despite multiple visits to hospitals in Thunder Bay and Fort Frances, her symptoms were dismissed with only prescriptions offered. Her condition worsened over four months until she collapsed during a family trip. She passed away at St. Boniface hospital from a severe infection caused by an untreated hole in her bowel.",
    date: "Recent"
  },
  {
    name: "Anonymous",
    community: "Inuit",
    location: "Nunavut",
    story: "As someone living in a remote community, I have to travel over 1500 kilometers to access basic healthcare services. This distance not only creates a significant barrier to regular check-ups but also means being separated from my family and community during medical treatments.",
    date: "2024"
  }
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Our Stories</h1>
          <p className="text-lg text-body max-w-3xl mx-auto">
            Real experiences from Indigenous peoples across Canada highlighting the importance of
            equitable healthcare access and the impact of current disparities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.name} {...story} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-black mb-4">Share Your Story</h2>
          <p className="text-body mb-6">
            Your experience matters. Help us advocate for change by sharing your healthcare story.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Submit Your Story
          </button>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Why Stories Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-black mb-2">Raise Awareness</h3>
              <p className="text-body">
                Personal stories help others understand the real impact of healthcare disparities on Indigenous communities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black mb-2">Drive Change</h3>
              <p className="text-body">
                Your experiences can influence policy makers and healthcare providers to implement needed changes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black mb-2">Build Community</h3>
              <p className="text-body">
                Sharing stories helps connect people with similar experiences and creates a stronger voice for change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 