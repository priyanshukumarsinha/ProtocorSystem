import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-black px-16 text-white sticky top-0'>
        <ul className='flex gap-5'>
            <li className='py-5 px-4 bg-gray-700 cursor-pointer'>
                {/* icon  */}
                Dashboard
            </li>
            <li className='py-5 px-4 cursor-pointer'>
                {/* icon  */}
                Timetable
            </li>
            <li className='py-5 px-4 cursor-pointer'>
                Result
            </li>
            <li className='py-5 px-4 cursor-pointer'>
                Attendance
            </li>
            <li className='py-5 px-4 cursor-pointer'>
                Mentoring
            </li>
            <li className='py-5 px-4 cursor-pointer'>
                Concerns
            </li>
        </ul>
    </nav>
  )
}

export default Navbar