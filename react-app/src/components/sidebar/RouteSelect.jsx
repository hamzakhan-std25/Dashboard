import React from 'react'
import {FiDollarSign, FiHome, FiLink, FiPaperclip, FiUser } from 'react-icons/fi'
export default function RouteSelect() {
  return (
    <div className=' space-y-1'>
        <Route icon={<FiHome/>} selected={true} title={'Dashboard'}/>
        <Route icon={<FiUser/>} selected={false} title={'Team'}/>
        <Route icon={<FiPaperclip/>} selected={false} title={'Invoices'}/>
        <Route icon={<FiLink/>} selected={false} title={'Integrations'}/>
        <Route icon={<FiDollarSign/>} selected={false} title={'Finance'}/>
    </div>
  )
}


const Route =({selected, icon, title})=>{
    return(
        <button className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${selected ?  "bg-white text-stone-950 shadow" : " hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"  }`}>
            {icon}
           <span>{title}</span>
        </button>
    )
}