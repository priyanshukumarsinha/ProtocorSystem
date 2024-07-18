import React from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {
    const user = useSelector((state) => state.auth.user)
    console.log(user)
    const username = user.firstName + " " + user.lastName || "User Name"
    const usn = user.USN || "CB20XXCSXXX"
    const mobileNumber = user.phoneNumber || "1234567890"
    const fatherMobileNumber = user.fatherMobileNumber || "1234567890"
    const motherMobileNumber = user.motherMobileNumber || "1234567890"
    const email = user.email || ""
    const roll = user.rollNo || "CB20XXCSXXX"
    const sem = user.sem || "8"
    const dp = user.photoURL || "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
    const proctor = user.AppointProctor[0]?.teacherId || {firstName: "Dr. Basavaraj", lastName: "Patil"}
    const cgpa = 9.8 || 0
    const attendance = 98;
  return (
    <>
        <div className='w-1/3 h-full bg-white  m-5 shadow-lg border flex flex-col pb-10 items-center rounded-lg'>
            <div className='flex bg-blue-50 p-5 w-full'>
                <div className='w-1/2 '>
                    <img 
                    className='rounded-full w-[200px] h-[200px]'
                    src= {dp}
                    alt="" />
                </div>
                <div className='w-1/2 p-5'>
                    <h2 className='font-bold text-blue-600 pb-5'>{username.toUpperCase()}</h2>
                    <h3 className='text-[10px] mb-5 bg-blue-300 rounded-full p-2 font-semibold text-black text-center w-full'>BE - CB (Business Systems)</h3>
                    <h3 className='text-xs font-bold'>{usn}</h3>
                    <h3 className='text-xs font-medium text-gray-500 mb-5'>Semester - {sem}</h3>
                    <h3 className='text-xs text-gray-500 mb-5'>Roll No. {roll}</h3>
                </div>
            </div>
            <div className='w-full'>
                <div>
                    <h2 className='font-bold text-blue-600 px-5 py-3'>Student Details</h2>
                    <div className='flex flex-col gap-2 p-5 pt-0'>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Mobile Number : </h3>
                            <h3 className='text-xs  text-gray-500'>{mobileNumber}</h3>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Father's Mobile Number : </h3>
                            <h3 className='text-xs text-gray-500'>{fatherMobileNumber}</h3>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Mother's Mobile Number : </h3>
                            <h3 className='text-xs text-gray-500'>{motherMobileNumber}</h3>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Email : </h3>
                            <h3 className='text-xs text-blue-600 underline'>
                                <a href={`mailto: ${email}`}>{email}</a>
                            </h3>
                        </div>
                        
                    </div>
                </div>
            </div>

            
            <div className='w-full border-t'>
                <div>
                    <h2 className='font-bold text-blue-600 px-5 py-3'>Academic Details</h2>
                    <div className='flex flex-col gap-2 p-5 pt-0'>
                    <div className='flex gap-2'>
                            <h3 className='text-xs  font-medium'>Attendance : </h3>
                            <h3 className={`text-xs ${attendance>75 ? 'text-red-500' : 'text-green-500'}`}>{attendance + '%'}</h3>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Overall CGPA : </h3>
                            <h3 className='text-xs text-gray-500'>{cgpa}</h3>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Previous Semester SGPA : </h3>
                            <h3 className='text-xs text-gray-500'>1.6</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-left w-full p-5 text-sm flex gap-5 flex-col'>
                <h2 className='font-bold text-blue-600 px-5 py-3'>Appointed Proctor</h2>
                <h3 className='text-[10px] mb-5 bg-blue-300 rounded-full p-2 font-semibold text-black text-center w-auto'>{proctor.firstName + " " + proctor.lastName}</h3>

            </div>
        </div>
    </>
  )
}

export default Profile