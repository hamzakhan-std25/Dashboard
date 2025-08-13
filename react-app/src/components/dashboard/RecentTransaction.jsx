import React from 'react'


export default function RecentTransaction() {
    return (
        <div className=' col-span-12 overflow-hidden rounded border border-stone-300'>
            <div className='ml-4 px-8 py-4 flex items-center justify-between gap-1.5 '>
                <h3 className='font-medium'>Transaction History</h3>
                <button className=' text-sm text-violet-500 hover:underline'>See all</button>
            </div>
            <table>
                <TableHead/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
                <TableRow/>

            </table>

        </div>
    )
}



const TableHead=()=>{
    return(
        <thead>

        </thead>
    )
}

const TableRow=()=>{
    return(
        <tr>

        </tr>
    )
}