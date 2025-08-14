import React from 'react'
import StatCards from './StatCards'
import ActivityGraph from './ActivityGraph'
import UsageRedar from './UsageRedar'
import RecentTransaction from './RecentTransaction'

export default function Grid() {
  return (
    <div className=' px-4 grid gap-3 grid-cols-12'>
      <StatCards/>
      <ActivityGraph/>
      <UsageRedar/>
      <RecentTransaction/>
      
    </div>
  )
}
