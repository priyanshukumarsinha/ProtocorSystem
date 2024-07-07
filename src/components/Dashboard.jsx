import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    const [showAddNotification, setShowAddNotification] = React.useState(false)
    const isStudent = useSelector((state) => state.NavbarData.isStudent)

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
        {
            !isStudent && (
                <div className='w-full p-5'>
            <button 
            onClick={() => setShowAddNotification(!showAddNotification)}
            className='bg-blue-500 text-white px-3 py-1 rounded'>Add Notification</button>
            {
                showAddNotification && (
                    <div className='w-full p-5 bg-gray-100 rounded-lg my-5'>
                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-black font-semibold'>Title</label>
                        <input type='text' className='border p-2 rounded' />
                    </div>
                    <div className='flex flex-col gap-3 font-semibold'>
                        <label className='text-black'>Description</label>
                        <textarea className='border p-2 rounded' />
                    </div>
                    <div className='flex gap-5'>
                        {/* File Upload */}
                        <label className='text-black font-semibold'>Upload File</label>
                        <input type='file' />
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded'>Submit</button>
                    </div>
                </form>
            </div>
                )
            }
        </div>
            )
        }
    </div>
  )
}

export default Notification