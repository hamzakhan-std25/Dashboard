import React, { useState } from 'react'
import {FiSearch ,FiCommand} from "react-icons/fi"
import CommandMenu from './CommandMenu'


export default function Search() {
    const [open, setOpen]= useState(false);
    
  return (
    <>
    <div className='relative flex items-center px-2 mb-4 rounded bg-stone-200 py-1.5 text-sm'>
        <FiSearch className='mr-2 '/>
        <input type="text"
        onFocus={(e)=>{
          e.target.blur();
          setOpen(true)

        }}
        placeholder='Search'
        aria-label='Search'
        className='w-full bg-transparent placeholder:text-stone-400 focus:outline-none' />
        <span className='flex p-1 text-xs gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2' aria-hidden='true'>
            <FiCommand />K
        </span>
        
    </div>
    <CommandMenu open={open} setOpen={setOpen}/>

    </>
  )
}






