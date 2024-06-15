import React from 'react'
import { useSelector } from 'react-redux'
import { Header, Profile, Dashboard, Attendance, Concerns, Mentoring, Result, TimeTable } from '../components'

const Student = () => {
    const isStudent = useSelector((state) => state.NavbarData.isStudent)
    const activeElement = useSelector((state)=> state.NavbarData.activeElement)
    return (
        <div>
            <div className='w-full'>
                <Header/>
            </div>
            <div className='w-full px-10 flex h-full'>
                <Profile />
                {activeElement === 'Dashboard' && <Dashboard />}
                {activeElement === 'Timetable' && <TimeTable />}
                {activeElement === 'Result' && <Result />}
                {activeElement === 'Attendance' && <Attendance />}
                {activeElement === 'Mentoring' && <Mentoring />}
                {activeElement === 'Concerns' && <Concerns />}
            </div>
        </div>
    )
}

export default Student