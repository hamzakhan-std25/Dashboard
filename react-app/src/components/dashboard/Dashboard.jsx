import React from 'react'
import Topbar from './Topbar'
import Grid from './Grid'

export default function Dashboard() {
  return (
    <div className=' bg-white rounded-lg shadow '>
      <Topbar/>
      <Grid/>
    </div>
  )
}
