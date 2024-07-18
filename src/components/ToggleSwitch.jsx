import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isStudentUpdate } from '../store/NavbarSlice'
import { PiStudent } from 'react-icons/pi'
import { FaChalkboardTeacher } from 'react-icons/fa'

const ToggleSwitch = () => {
    const dispatch = useDispatch();
    const isStudent = useSelector((state) => state.NavbarData.isStudent);

    const toggle = () => {
        dispatch(isStudentUpdate(!isStudent));
    }
    return (
        <div>
            <button 
            onClick={toggle}
            className='w-20 h-10 rounded-full flex items-center border border-black transition duration-300 focus:outline-none shadow'>
                <div 
                className={`w-12 h-12 bg-black text-3xl flex items-center justify-center text-white rounded-full relative transition duration-500 transform ${isStudent ? '-translate-x-2' : 'translate-x-full'} p-1`}>
                    {
                            isStudent ? 
                                (<PiStudent />):
                                (<FaChalkboardTeacher />)
                        }
                </div>
            </button>
        </div>
    )
}

export default ToggleSwitch