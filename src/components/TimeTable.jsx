import React from 'react'

const TimeTable = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const time = ['9:00-10:00', '10:00-11:00', '11:15-12:15', '12:15-1:15', '2:00-3:00', '3:00-4:00', '4:00-5:00']
  const timeTable = [
    {
      Monday : [
        {
          period : 0,
          
          subject: 'Mathematics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 1,
          
          subject: 'Physics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 2,
          
          subject: 'Chemistry',
          faculty: 'Mr. John Doe'
        },
        {
          period : 3,
          
          subject: 'Biology',
          faculty: 'Mr. John Doe'
        },
        {
          period : 4,
          
          subject: 'English',
          faculty: 'Mr. John Doe'
        },
        {
          period : 5,
          
          subject: 'History',
          faculty: 'Mr. John Doe'
        },
        {
          period : 6,
          
          subject: 'Geography',
          faculty: 'Mr. John Doe'
        }
      ],
      Tuesday : [
        {
          period : 0,
          
          subject: 'Mathematics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 1,
          
          subject: 'Physics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 2,
          
          subject: 'Chemistry',
          faculty: 'Mr. John Doe'
        },
        {
          period : 3,
          
          subject: 'Biology',
          faculty: 'Mr. John Doe'
        },
        {
          period : 4,
          
          subject: 'English',
          faculty: 'Mr. John Doe'
        },
        {
          period : 5,
          
          subject: 'History',
          faculty: 'Mr. John Doe'
        },
        {
          period : 6,
          
          subject: 'Geography',
          faculty: 'Mr. John Doe'
        }
      ],
      Wednesday : [
        {
          period : 0,
          
          subject: 'Mathematics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 1,
          
          subject: 'Physics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 2,
          
          subject: 'Chemistry',
          faculty: 'Mr. John Doe'
        },
        {
          period : 3,
          
          subject: 'Biology',
          faculty: 'Mr. John Doe'
        },
        {
          period : 4,
          
          subject: 'English',
          faculty: 'Mr. John Doe'
        },
        {
          period : 5,
          
          subject: 'History',
          faculty: 'Mr. John Doe'
        },
        {
          period : 6,
          
          subject: 'Geography',
          faculty: 'Mr. John Doe'
        }
      ],
      Thursday : [
        {
          period : 0,
          
          subject: 'Mathematics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 1,
          
          subject: 'Physics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 2,
          
          subject: 'Chemistry',
          faculty: 'Mr. John Doe'
        },
        {
          period : 3,
          
          subject: 'Biology',
          faculty: 'Mr. John Doe'
        },
        {
          period : 4,
          
          subject: 'English',
          faculty: 'Mr. John Doe'
        },
        {
          period : 5,
          
          subject: 'History',
          faculty: 'Mr. John Doe'
        },
        {
          period : 6,
          
          subject: 'Geography',
          faculty: 'Mr. John Doe'
        }
      ],
      Friday : [
        {
          period : 0,
          
          subject: 'Mathematics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 1,
          
          subject: 'Physics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 2,
          
          subject: 'Chemistry',
          faculty: 'Mr. John Doe'
        },
        {
          period : 3,
          
          subject: 'Biology',
          faculty: 'Mr. John Doe'
        },
        {
          period : 4,
          
          subject: 'English',
          faculty: 'Mr. John Doe'
        },
        {
          period : 5,
          
          subject: 'History',
          faculty: 'Mr. John Doe'
        },
        {
          period : 6,
          
          subject: 'Geography',
          faculty: 'Mr. John Doe'
        }
      ],
      Saturday : [
        {
          period : 0,
          
          subject: 'Mathematics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 1,
          
          subject: 'Physics',
          faculty: 'Mr. John Doe'
        },
        {
          period : 2,
          
          subject: 'Chemistry',
          faculty: 'Mr. John Doe'
        },
        {
          period : 3,
          
          subject: 'Biology',
          faculty: 'Mr. John Doe'
        },
        {
          period : 4,
          
          subject: 'English',
          faculty: 'Mr. John Doe'
        },
        {
          period : 5,
          
          subject: 'History',
          faculty: 'Mr. John Doe'
        },
        {
          period : 6,
          
          subject: 'Geography',
          faculty: 'Mr. John Doe'
        }
      ]
    }
  ]
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
    <div>
        {/* Icon */}
        <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>TIMETABLE</h2>
    </div>
    <div className='border-b w-full p-5'>
      <table className="table-auto w-full text-center border-collapse ">
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
    <div>
        {/* // Notifications */}
    </div>
    
</div>
  )
}

export default TimeTable