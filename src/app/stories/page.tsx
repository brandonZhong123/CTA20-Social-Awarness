import StoryCard from '@/components/StoryCard'

const stories = [
  {
    name: "Sarah Cardinal",
    community: "Métis",
    location: "Edmonton, AB",
    image: "/images/stories/sarah.jpg",
    story: "As a Métis woman living in an urban area, I've experienced firsthand the challenges of accessing culturally appropriate healthcare. While I'm fortunate to have a family doctor now, it took years to find one who understood and respected our traditional healing practices alongside modern medicine.",
    date: "March 15, 2024"
  },
  {
    name: "David Akuluk",
    community: "Inuit",
    location: "Ottawa, ON",
    image: "/images/stories/david.jpg",
    story: "Moving from Nunavut to Ottawa for better healthcare access was a difficult decision. While the medical facilities here are more advanced, the lack of cultural understanding and language barriers make it challenging to receive the care I need.",
    date: "March 10, 2024"
  },
  {
    name: "Emily Johnston",
    community: "First Nations",
    location: "Vancouver, BC",
    image: "/images/stories/emily.jpg",
    story: "Living off-reserve means I often fall through the cracks of healthcare coverage. I've had to advocate strongly for myself to receive the same level of care that others take for granted. We need a system that recognizes and supports all Indigenous peoples, regardless of where they live.",
    date: "March 5, 2024"
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