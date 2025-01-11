import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 text-black min-h-[300px] w-[300px] p-5 bg-red-500 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className=' px-3 py-1 rounded text-sm bg-red-600'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
    <p className='mt-2 text-sm  '>{data.description} </p>
    <div className='mt-2 '>
            <button className='bg-red-600 text-xsm rounded w-full p-1'>Failed</button>
        </div>
  </div>
  )
}

export default FailedTask
