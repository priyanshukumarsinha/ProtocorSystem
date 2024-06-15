import React from 'react'

const Notification = () => {
    
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
        <div>
            {/* Icon */}
            <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>NOTIFICATION</h2>
        </div>
        <div className=''>
            <ol>
                <li className='flex justify-between items-center border-b px-5 py-3'>
                    <div>
                        <h3 className='font-bold'>Please Wear You Uniform Tommorow</h3>
                        <p className='text-xs'>Be ready with formal wear on the occassion of Mini Project Presentation on 14th Apr 2024</p>
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded'>View</button>
                    </div>
                </li>
                <li className='flex justify-between items-center border-b px-5 py-3'>
                    <div>
                        <h3 className='font-bold'>CIE-3 Timetable Update</h3>
                        <p className='text-xs'>Good Luck for your exams!!</p>
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded'>View</button>
                    </div>
                </li>                
            </ol>
        </div>
    </div>
  )
}

export default Notification