import React from 'react'

const AcceptTask = ({data}) => {

   
    

  return (
    <div className='flex-shrink-0 text-black min-h-[300px] w-[300px] p-5 bg-gray-600 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className=' px-3 py-1 rounded text-sm bg-red-600'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
    <p className='mt-2 text-sm  '>
        {data.description}
     </p>

    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
    </div>
    

  </div>
  )
}

export default AcceptTask
