import React from 'react'
import AccountToggle from './AccountToggle'
import Search from './Search'
import RoutSelect from './RoutSelect'
import Plan from './Plan'

export default function Sidebar() {
  return (
    <div >
        <div className='sticky overflow-y-scroll top-4 h-[calc(100vh-32px-48px)]'>
          <AccountToggle/>
          <Search/>
          <RoutSelect/>
        </div>
          <Plan/>
    </div>
  )
}
