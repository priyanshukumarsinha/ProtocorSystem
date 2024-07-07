import React from 'react'
import { useSelector } from 'react-redux'
import { Header, Profile, Dashboard, Attendance, Concerns, Mentoring, Result, TimeTable, AttendanceList} from '../components'
import StudentList from '../components/StudentList'
import StudyMaterial from '../components/StudyMaterial'
import Exam from '../components/Exam'

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
                {activeElement === 'Attendance List' && <AttendanceList />}
                {(activeElement === 'Concerns' || activeElement === 'Student Concerns') && <Concerns />}
                {activeElement === 'Student List' && <StudentList />}
                {activeElement === 'Study Material' && <StudyMaterial />}
                {activeElement === 'Exam' && <Exam />}
            </div>
        </div>
    )
}

export default Student