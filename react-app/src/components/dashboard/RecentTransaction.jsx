import React from 'react'
import { transactions } from '../../data/transactions'

export default function RecentTransaction() {
  return (
    <div className="col-span-12 bg-white overflow-hidden rounded-lg border border-gray-200">
      <div className="px-8 py-4 flex items-center justify-between border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Transaction History</h3>
        <a href="#" className="text-sm text-violet-500 hover:underline">See all</a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <TableHead />
          <tbody className="divide-y divide-gray-100">
            {transactions.map((txn) => (
              <TableRow key={txn.id} {...txn} />
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
      <td className="px-6 py-4"><a href='#' className=' cursor-pointer text-green-600 font-medium hover:text-orange-400 hover:underline'>Full details</a></td>
    </tr>
  )
}
