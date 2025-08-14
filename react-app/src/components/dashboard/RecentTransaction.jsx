import React from 'react'

const transactions = [
  { date: '2025-08-12', id: '#TXN001', customer: 'John Smith', amount: 1200, status: 'Paid', method: 'Credit Card' },
  { date: '2025-08-11', id: '#TXN002', customer: 'Alice Johnson', amount: 850, status: 'Pending', method: 'PayPal' },
  { date: '2025-08-11', id: '#TXN003', customer: 'Michael Lee', amount: 430, status: 'Failed', method: 'Bank Transfer' },
  { date: '2025-08-10', id: '#TXN004', customer: 'Sarah Wilson', amount: 3200, status: 'Paid', method: 'Credit Card' },
  { date: '2025-08-09', id: '#TXN005', customer: 'David Kim', amount: 2700, status: 'Paid', method: 'PayPal' },
  { date: '2025-08-08', id: '#TXN006', customer: 'Emily Davis', amount: 650, status: 'Pending', method: 'Credit Card' },
  { date: '2025-08-08', id: '#TXN007', customer: 'James Brown', amount: 1500, status: 'Paid', method: 'Bank Transfer' },
  { date: '2025-08-07', id: '#TXN008', customer: 'Linda Martinez', amount: 980, status: 'Failed', method: 'Credit Card' },
]

export default function RecentTransaction() {
  return (
    <div className="col-span-12 bg-white overflow-hidden rounded-lg border border-gray-200">
      <div className="px-8 py-4 flex items-center justify-between border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Transaction History</h3>
        <button className="text-sm text-violet-500 hover:underline">See all</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <TableHead />
          <tbody className="divide-y divide-gray-100">
            {transactions.map((txn, idx) => (
              <TableRow key={idx} {...txn} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const TableHead = () => {
  return (
    <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
      <tr>
        <th className="px-6 py-3">Date</th>
        <th className="px-6 py-3">Transaction ID</th>
        <th className="px-6 py-3">Customer</th>
        <th className="px-6 py-3">Amount</th>
        <th className="px-6 py-3">Status</th>
        <th className="px-6 py-3">Payment Method</th>
        <th className="px-6 py-3"></th>
      </tr>
    </thead>
  )
}

const TableRow = ({ date, id, customer, amount, status, method }) => {
  const statusColors = {
    Paid: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Failed: 'bg-red-100 text-red-800',
  }

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">{date}</td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap">{customer}</td>
      <td className="px-6 py-4 whitespace-nowrap">${amount.toLocaleString()}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{method}</td>
      <td className="px-6 py-4"><button className=' cursor-pointer text-green-600 font-medium hover:text-orange-400 hover:underline'>Full details</button></td>
    </tr>
  )
}
