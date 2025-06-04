'use client'

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const healthcareData = {
  accessBarriers: {
    labels: ['Transportation', 'Cultural Barriers', 'Language Barriers', 'Wait Times', 'Discrimination'],
    datasets: [{
      label: 'Percentage Reporting Barriers',
      data: [45, 62, 38, 55, 60],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
    }]
  },
  healthOutcomes: {
    labels: ['General Population', 'Off-Reserve Indigenous', 'Métis', 'Inuit'],
    datasets: [{
      label: 'Life Expectancy (Years)',
      data: [82, 73, 75, 71],
      backgroundColor: [
        'rgba(156, 163, 175, 0.8)',
        'rgba(99, 102, 241, 0.8)',
        'rgba(67, 56, 202, 0.8)',
        'rgba(55, 48, 163, 0.8)',
      ],
    }]
  },
  trends: {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Healthcare Access Score',
      data: [65, 68, 63, 70, 72],
      borderColor: 'rgba(99, 102, 241, 1)',
      tension: 0.4,
      fill: false
    }]
  }
}

export default function HealthcareStats() {
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const pieChartRef = useRef<HTMLCanvasElement>(null)
  const lineChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: healthcareData.accessBarriers,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Healthcare Access Barriers'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Percentage (%)'
                }
              }
            }
          }
        })
      }
    }

    if (pieChartRef.current) {
      const ctx = pieChartRef.current.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: healthcareData.healthOutcomes,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Life Expectancy Comparison'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 90,
                title: {
                  display: true,
                  text: 'Age (Years)'
                }
              }
            }
          }
        })
      }
    }

    if (lineChartRef.current) {
      const ctx = lineChartRef.current.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: healthcareData.trends,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Healthcare Access Trend'
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Access Score'
                }
              }
            }
          }
        })
      }
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Healthcare Statistics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <canvas ref={barChartRef}></canvas>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <canvas ref={pieChartRef}></canvas>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <canvas ref={lineChartRef}></canvas>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Key Finding 1</h3>
          <p className="text-indigo-700">
            60% of Indigenous peoples report experiencing discrimination in healthcare settings, creating significant barriers to access.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Key Finding 2</h3>
          <p className="text-indigo-700">
            Life expectancy gaps between Indigenous and non-Indigenous populations range from 7 to 11 years.
          </p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Key Finding 3</h3>
          <p className="text-indigo-700">
            Recent improvements in healthcare access scores show positive trends, but significant gaps remain.
          </p>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Data sources: Statistics Canada, Indigenous Health Survey 2022, and regional health authorities.</p>
        <p>Note: Some data points are approximated for demonstration purposes.</p>
      </div>
    </div>
  )
} 