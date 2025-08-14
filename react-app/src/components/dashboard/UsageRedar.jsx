import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts'
import { FiPieChart } from 'react-icons/fi'

// Example business usage data
const data = [
  { category: 'Marketing', Q1: 120, Q2: 110, fullMark: 150 },
  { category: 'Sales', Q1: 98, Q2: 130, fullMark: 150 },
  { category: 'Development', Q1: 86, Q2: 130, fullMark: 150 },
  { category: 'Customer Support', Q1: 99, Q2: 100, fullMark: 150 },
  { category: 'Finance', Q1: 85, Q2: 90, fullMark: 150 },
  { category: 'Operations', Q1: 65, Q2: 85, fullMark: 150 },
]

export default function UsageRadar() {
  return (
    <div className="col-span-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-100 flex items-center gap-2">
        <FiPieChart className="text-purple-500" />
        <h3 className="font-semibold text-gray-800">Department Usage</h3>
      </div>

      <div className="h-72 px-4 py-3">
        <ResponsiveContainer>
          <RadarChart outerRadius={90} cx="50%" cy="50%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="category" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              tick={{ fill: '#6b7280', fontSize: 11 }}
            />
            <Radar
              name="Q1 Performance"
              dataKey="Q1"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.4}
            />
            <Radar
              name="Q2 Performance"
              dataKey="Q2"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.4}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
