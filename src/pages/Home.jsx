import { StudentLogin, TeacherLogin, ToggleSwitch } from '../components'
import { StudentImage, TeacherImage } from '../assets/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { authService } from '../appwrite/auth.js'
import { login, logout } from '../store/AuthSlice.js'

const Home = () => {
    const isStudent = useSelector((state) => state.NavbarData.isStudent)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch() 

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
                    <div className='p-5'>
                        <ToggleSwitch />
                    </div>

                    <div className='flex w-full h-full'>
                        <div className='w-1/2  h-full flex justify-center items-center transition-all duration-200 ease-in-out relative'>
                            <img src={isStudent ? StudentImage: TeacherImage} className={`absolute transition-all duration-500 ease-in-out ${isStudent ? '-translate-x-2' : 'translate-x-full'}`} alt="" />
                            {!isStudent && <TeacherLogin />}
                        </div>
                        <div className='w-1/2  h-full p-5 flex justify-center items-center transition-all duration-200 ease-in-out'>
                            {isStudent && <StudentLogin />}
                        </div>
                    </div>
        </div>
    )
}

export default Home