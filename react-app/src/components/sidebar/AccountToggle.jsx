import React from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

export default function AccountToggle() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="pb-4 mt-2 mb-4 border-b border-stone-300 ">
            <button className="flex p-0.5 hover:bg-stone-200 rounded
             transition-colors relative gap-2 w-full items-center" aria-expanded={isOpen} aria-controls="account-menu" onClick={() => setIsOpen((v) => !v)}>
                <img src="https://api.dicebear.com/9.x/notionists/svg" alt="User avatar"
                    className='rounded shadow size-8 shrink-0 bg-violet-500' />
                <div className='text-start '>
                    <span className='block text-sm font-semibold'>
                        Tom Is Loading
                    </span>
                    <span className='block text-xs text-stone-500'>
                        tom@hover.dev
                    </span>
                </div>
                {isOpen ? (
                    <FiChevronUp className='absolute right-2 top-1/2 -translate-y-1/2 text-xs'/>
                ) : (
                    <FiChevronDown className='absolute right-2 top-1/2 -translate-y-1/2 text-xs'/>
                )}




            </button>
        </div>
    )
}
