import React from 'react'
import { useSelector } from 'react-redux'
import { HOST } from '../constants'

const Mentoring = () => {
  const isStudent = useSelector((state) => state.NavbarData.isStudent)
  const [meetings, setMeetings] = React.useState([])
  const user = useSelector((state) => state.auth.user)
  const proctor = user?.AppointProctor[0]?.teacherId?.id

  const [previousMeetings, setPreviousMeetings] = React.useState([])

  React.useEffect(() => {
    const data = {
      proctorId : proctor,
      studentId : user.id
    }

    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    }

    fetch(`${HOST}/api/student/get-meetings`, options)
    .then(response => response.json())
    .then
    (
      data => setMeetings(data)
    )

  }, [])


  React.useEffect(() => {
    const data = {
      proctorId : proctor,
      studentId : user.id
    }

    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    }

    fetch(`${HOST}/api/student/get-previous-meetings`, options)
    .then(response => response.json())
    .then
    (
      data => setPreviousMeetings(data)
    )

  }, [])

  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>MENTORING</h2>
      </div>
      
      

      <div className='mt-5'>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-y text-sm'>Upcoming Meeting</h3>
      </div>
      <div className='w-full p-5'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='w-1/5 border border-collapse p-2'>
                <span className='text-xs text-blue-600'>Date</span>
              </th>
              <th className='w-1/5 border border-collapse'>
                <span className='text-xs text-blue-600'>Time</span>
              </th>
              <th className='w-2/5 border border-collapse'>
                <span className='text-xs text-blue-600'>Agenda</span>
              </th>
              <th className='w-1/5 border border-collapse'>
                <span className='text-xs text-blue-600'>Link</span>
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              meetings.length > 0 && meetings.map((meeting, index) => (
                <tr key={index}>
                  <td className='border border-collapse p-2'>
                    <span className='text-xs'>{meeting.date}</span>
                  </td>
                  <td className='border border-collapse'>
                    <span className='text-xs'>{meeting.time}</span>
                  </td>
                  <td className='border border-collapse'>
                    <span className='text-xs'>{meeting.agenda}</span>
                  </td>
                  <td className='border border-collapse'>
                    <a href={meeting.link} className='text-xs text-blue-600'>{meeting.link}</a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className='mt-5'>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-y text-sm'>Previous Meeting</h3>
      </div>


      {
        !isStudent && (
          <div className='bg-white p-5 w-[30%] absolute left-14 h-[600px] rounded'>
          <div>
              {/* Icon */}
              <h2 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>SCHEDULE MEETINGS</h2>
          </div>
          <div>
          {!isStudent && (
            <>
          <div className='p-5'>
            <form action="" className='text-xs flex w-full flex-col gap-3'>
              <div>
                <label htmlFor="date">Date : </label>
                <input 
                type="date" 
                value={new Date().toISOString().split('T')[0]}
                className='border p-2' 
                required
                />
              </div>
              <div>
                <label htmlFor="time">Time : </label>
                <input
                type="time"
                className='border p-2'
                min="09:00"
                max ="16:00"
                value={"16:00"}
                required
                />
              </div>
              <div className='w-full flex flex-col gap-2'>
                <label htmlFor="agenda">Agenda : </label>
                <textarea 
                name="" 
                id="" 
                rows="5"
                className='border p-2'
                required
                ></textarea>
              </div>
              <div className='w-full flex justify-end'>
                <button className='p-3 bg-black text-white focus:outline-none rounded-lg'>Schedule</button>
              </div>
            </form>
          </div>
    
            </>
          )}
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Mentoring