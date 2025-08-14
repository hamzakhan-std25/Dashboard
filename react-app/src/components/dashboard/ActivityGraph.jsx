import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'

// Example business dashboard data (Monthly Revenue & Active Users)
const data = [
  { month: 'Jan', revenue: 42000, users: 1200 },
  { month: 'Feb', revenue: 38000, users: 1100 },
  { month: 'Mar', revenue: 45000, users: 1350 },
  { month: 'Apr', revenue: 47000, users: 1500 },
  { month: 'May', revenue: 52000, users: 1650 },
  { month: 'Jun', revenue: 49000, users: 1580 },
  { month: 'Jul', revenue: 56000, users: 1720 },
]

export default function ActivityGraph() {
  return (
    <div className="col-span-8 bg-white shadow-sm overflow-hidden rounded-lg border border-gray-200">
      <h3 className="px-6 py-4 flex items-center gap-2 font-semibold text-gray-800 border-b border-gray-100">
        <FiTrendingUp className="text-blue-500" />
        Business Performance
      </h3>

      <div className="h-72 px-4 py-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
            <YAxis
              tick={{ fill: '#6b7280' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Revenue']
                if (name === 'users') return [value.toLocaleString(), 'Active Users']
                return value
              }}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '6px' }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#16a34a"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
