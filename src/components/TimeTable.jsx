import React from 'react'
import { useSelector } from 'react-redux'
import { HOST } from '../constants'

const TimeTable = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const time = ['9:00-10:00', '10:00-11:00', '11:15-12:15', '12:15-1:15', '2:00-3:00', '3:00-4:00', '4:00-5:00']
  const user = useSelector((state) => state.auth.user)
  const proctor = user?.AppointProctor[0]?.teacherId?.id
  const [tT, setTT] = React.useState([])

  const [selectedTime, setSelectedTime] = React.useState(time[0])
  const [selectedDay, setSelectedDay] = React.useState('Monday')
  const [selectedSubject, setSelectedSubject] = React.useState('')

  React.useEffect(() => {
    const fetchTimeTable = async () => {
      try {
        const data = {
          proctorId : proctor ? proctor : user.id
        }
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        const response = await fetch(`${HOST}/api/student/get-timetable`, options)
        const result = await response.json()
        setTT(result)
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }

    fetchTimeTable();
  }, []);

  const setTimeTable = async (e) => {
    // api/proctor/set-timetable
    e.preventDefault()
    const data = {
      proctorId : proctor ? proctor : user.id,
      day : selectedDay,
      period : Array.from(time).indexOf(selectedTime),
      subject : selectedSubject
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    const response = await fetch(`${HOST}/api/proctor/set-timetable`, options)
    const result = await response.json()

    if(result.status === 'success'){
      console.log('Timetable updated successfully')
    }
    
    
  }

  const filterTT = (day) => {

    const filteredTT = tT.length>0 && tT.filter((tt) => tt.day === day)
    return filteredTT
  }

  const mondayTT = filterTT('Monday');
  const tuesdayTT = filterTT('Tuesday');
  const wednesdayTT = filterTT('Wednesday');
  const thursdayTT = filterTT('Thursday');
  const fridayTT = filterTT('Friday');
  const saturdayTT = filterTT('Saturday');


  const timeTable = [
    {
      Monday : mondayTT,
      Tuesday : tuesdayTT,
      Wednesday : wednesdayTT,
      Thursday : thursdayTT,
      Friday : fridayTT,
      Saturday : saturdayTT
    }
  ]


  // const timeTable = [
  //   {
  //     Monday : [
  //       {
  //         period : 0,
          
  //         subject: 'Mathematics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 1,
          
  //         subject: 'Physics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 2,
          
  //         subject: 'Chemistry',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 3,
          
  //         subject: 'Biology',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 4,
          
  //         subject: 'English',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 5,
          
  //         subject: 'History',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 6,
          
  //         subject: 'Geography',
  //         faculty: 'Mr. John Doe'
  //       }
  //     ],
  //     Tuesday : [
  //       {
  //         period : 0,
          
  //         subject: 'Mathematics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 1,
          
  //         subject: 'Physics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 2,
          
  //         subject: 'Chemistry',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 3,
          
  //         subject: 'Biology',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 4,
          
  //         subject: 'English',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 5,
          
  //         subject: 'History',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 6,
          
  //         subject: 'Geography',
  //         faculty: 'Mr. John Doe'
  //       }
  //     ],
  //     Wednesday : [
  //       {
  //         period : 0,
          
  //         subject: 'Mathematics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 1,
          
  //         subject: 'Physics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 2,
          
  //         subject: 'Chemistry',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 3,
          
  //         subject: 'Biology',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 4,
          
  //         subject: 'English',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 5,
          
  //         subject: 'History',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 6,
          
  //         subject: 'Geography',
  //         faculty: 'Mr. John Doe'
  //       }
  //     ],
  //     Thursday : [
  //       {
  //         period : 0,
          
  //         subject: 'Mathematics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 1,
          
  //         subject: 'Physics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 2,
          
  //         subject: 'Chemistry',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 3,
          
  //         subject: 'Biology',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 4,
          
  //         subject: 'English',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 5,
          
  //         subject: 'History',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 6,
          
  //         subject: 'Geography',
  //         faculty: 'Mr. John Doe'
  //       }
  //     ],
  //     Friday : [
  //       {
  //         period : 0,
          
  //         subject: 'Mathematics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 1,
          
  //         subject: 'Physics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 2,
          
  //         subject: 'Chemistry',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 3,
          
  //         subject: 'Biology',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 4,
          
  //         subject: 'English',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 5,
          
  //         subject: 'History',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 6,
          
  //         subject: 'Geography',
  //         faculty: 'Mr. John Doe'
  //       }
  //     ],
  //     Saturday : [
  //       {
  //         period : 0,
          
  //         subject: 'Mathematics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 1,
          
  //         subject: 'Physics',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 2,
          
  //         subject: 'Chemistry',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 3,
          
  //         subject: 'Biology',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 4,
          
  //         subject: 'English',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 5,
          
  //         subject: 'History',
  //         faculty: 'Mr. John Doe'
  //       },
  //       {
  //         period : 6,
          
  //         subject: 'Geography',
  //         faculty: 'Mr. John Doe'
  //       }
  //     ]
  //   }
  // ]


  const isStudent = useSelector((state) => state.NavbarData.isStudent)
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
    <div>
        {/* Icon */}
        <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>TIMETABLE</h2>
    </div>
    <div className='border-b w-full p-5 overflow-scroll'>
      <table className="table-auto w-full  text-center border-collapse ">
        <thead>
          <tr className='border border-collapse'>
            <th className='border border-collapse'>
              <span className='text-xs text-blue-600'>Week/Time</span>
            </th>
            {
              time && time.map((time) =>{
                return(
                  <th 
                  className='border border-collapse'
                  key={time}>
                    <span className='text-xs text-blue-600'>{time}</span>
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            weekDays && weekDays.map((day) =>{
              return(
                <tr 
                className='border border-collapse'
                key={day}>
                  <td
                  className='border border-collapse'
                  >
                    <span className='text-xs text-blue-600 font-bold'>{day.slice(0,3)}</span>
                  </td>
                  {
                    timeTable[0][day].length>0 &&
                    timeTable[0][day].map((period) =>{
                      return(
                        <td 
                        className='border border-collapse p-3 hover:bg-blue-600 hover:text-white cursor-pointer'
                        key={period}>
                          <span className='text-xs font-semibold'>{period.subject}</span>
                          <br/>
                          <span className='text-[10px] font-light'>{period.faculty}</span>
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }         
        </tbody>
      </table>
    </div>
    {
      !isStudent && (
        <div className='bg-white p-5 w-[30%] absolute left-14 h-[600px] rounded'>
        <div>
            {/* Icon */}
            <h2 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>UPDATE TIMETABLE</h2>
        </div>
        <div>
            <form className='flex flex-col gap-5 my-5'>
                <div className='flex flex-col gap-3'>
                    <label className='text-black font-semibold text-sm'>Select Day</label>
                    <select 
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className='border p-2 rounded'>
                      {
                        weekDays && weekDays.map((day) =>{
                          return(
                            <option 
                            value={day}
                            key={day}>
                              {day}
                            </option>
                          )
                        })
                      }
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-black font-semibold text-sm'>Select Period</label>
                    <select 
                    onChange={(e) => {setSelectedTime(e.target.value)}}
                    className='border p-2 rounded'>
                      {
                        time && time.map((time) =>{
                          return(
                            <option
                            value = {time}
                            key={time}>
                              {time}
                            </option>
                          )
                        })
                      }
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-black font-semibold text-sm'>Subject</label>
                    <input 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    type='text' className='border p-2 rounded' />
                </div>
                <div>
                    <button 
                    onClick={(e) => setTimeTable(e)}
                    className='bg-blue-500 text-white px-3 py-1 rounded'>Submit</button>
                </div>
            </form>
        </div>
      </div>
      )
    }
    
</div>
  )
}

export default TimeTable