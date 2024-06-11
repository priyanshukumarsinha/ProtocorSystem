import React from 'react'

const Notification = () => {
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
        <div>
            {/* Icon */}
            <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>NOTIFICATION</h2>
        </div>
        <div className='border-b'>
            <ul className='flex gap-8 px-5 py-2'>
                <li>
                    <span className='text-xs font-semibold text-blue-600'>Notification</span>
                </li>
                <li>
                    <span className='text-xs'>Circular</span>
                </li>
                <li>
                    <span className='text-xs'>Student Announcement</span>
                </li>
            </ul>
        </div>
        <div>
            {/* // Notifications */}
        </div>
        
    </div>
  )
}

export default Notification