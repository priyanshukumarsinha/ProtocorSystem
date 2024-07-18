import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HOST } from '../constants'

const Notification = () => {
    const [showAddNotification, setShowAddNotification] = React.useState(false)
    const isStudent = useSelector((state) => state.NavbarData.isStudent)
    const user = useSelector((state) => state.auth.user)
    const proctor = user?.AppointProctor[0]?.teacherId?.id

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')

    const [notification, setNotification] = React.useState([])

    const handleClick = (e) => {
        e.preventDefault()
        const data = {
            proctorId : user.id,
            title : title,
            message : description
        }
        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }
        fetch(`${HOST}/api/proctor/create-notification`, options)
        .then(response => response.json())
        .then
        (
            data => setNotification([...notification, data])
        )
        notif()
        
    }

    useEffect(() => {
        notif()
    }, [])


    const notif = useCallback(() => {
        const data = {
            proctorId : proctor ? proctor : user.id
        }
        const options = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }
        fetch(`${HOST}/api/student/notifications`, options)
        .then(response => response.json())
        .then
        (data => {setNotification(data)
        console.log(data)}
        )
    }, []);

  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
        <div>
            {/* Icon */}
            <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>NOTIFICATION</h2>
        </div>
        <div className=''>
            <ol>
                {
                    notification.length >0 &&
                    notification.map((item, index) => (
                        <li key={index} className='flex justify-between items-center border-b px-5 py-3'>
                            <div>
                                <h3 className='font-bold'>{item.title}</h3>
                                <p className='text-xs'>{item.message}</p>
                            </div>
                            <div>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded'>View</button>
                            </div>
                        </li>
                    ))
                }           
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
                        <input 
                        onChange={(e) => setTitle(e.target.value)}
                        type='text' className='border p-2 rounded' />
                    </div>
                    <div className='flex flex-col gap-3 font-semibold'>
                        <label className='text-black'>Description</label>
                        <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        className='border p-2 rounded' />
                    </div>
                    <div className='flex gap-5'>
                        {/* File Upload */}
                        <label className='text-black font-semibold'>Upload File</label>
                        <input type='file' />
                    </div>
                    <div>
                        <button onClick={(e) => handleClick(e)} className='bg-blue-500 text-white px-3 py-1 rounded'>Submit</button>
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