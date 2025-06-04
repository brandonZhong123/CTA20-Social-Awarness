'use client'

import { useState } from 'react'

interface MPContactFormProps {
  onSubmit: (data: {
    name: string
    email: string
    postalCode: string
    message: string
  }) => void
}

export default function MPContactForm({ onSubmit }: MPContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postalCode: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [mpInfo, setMpInfo] = useState<{
    name: string
    riding: string
    email?: string
  } | null>(null)

  const handlePostalCodeLookup = async () => {
    setIsLoading(true)
    try {
      // This would be replaced with an actual API call to lookup MP information
      // For demo purposes, we're simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMpInfo({
        name: 'Jane Smith',
        riding: 'Sample Riding',
        email: 'jane.smith@parl.gc.ca'
      })
    } catch (error) {
      console.error('Error looking up MP:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'postalCode' && value.length === 6) {
      handlePostalCodeLookup()
    }
  }

  const defaultMessage = `Dear ${mpInfo?.name || '[MP Name]'},

I am writing to express my concern about the healthcare disparities facing Métis, Inuit, and off-reserve Indigenous peoples in Canada. As highlighted in Call to Action 20 of the Truth and Reconciliation Commission, there is an urgent need to address the distinct health needs of these communities.

I urge you to support policies and initiatives that will:
1. Establish measurable goals to identify and close the gaps in health outcomes
2. Ensure sustainable funding for existing and new Indigenous healing centres
3. Recognize and protect Indigenous healing practices
4. Provide cultural safety training for all healthcare professionals

As my representative in Parliament, I ask that you advocate for these changes and support legislation that will help achieve health equity for all Indigenous peoples.

Sincerely,
[Your name]`

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Your MP</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <div className="mt-1 flex gap-4">
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="A1A 1A1"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={handlePostalCodeLookup}
              disabled={formData.postalCode.length !== 6}
              className="btn btn-secondary px-4 py-2"
            >
              {isLoading ? 'Looking up...' : 'Find MP'}
            </button>
          </div>
        </div>

        {mpInfo && (
          <div className="p-4 bg-indigo-50 rounded-md">
            <h3 className="font-semibold text-indigo-900">Your MP Information</h3>
            <p className="text-indigo-700">
              {mpInfo.name} - {mpInfo.riding}
            </p>
            {mpInfo.email && (
              <p className="text-indigo-700 text-sm">{mpInfo.email}</p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={12}
            defaultValue={defaultMessage}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="btn btn-primary px-6 py-3"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
} 