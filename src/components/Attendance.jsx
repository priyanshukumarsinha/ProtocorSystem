import React from 'react'

const Attendance = () => {
  const time = ['9:00-10:00', '10:00-11:00', '11:15-12:15', '12:15-1:15', '2:00-3:00', '3:00-4:00', '4:00-5:00']
  const semStartDate = new Date('2024-04-15');

  const att = [
    {
      date : new Date('2024-04-15'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-16'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-17'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-18'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-19'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-20'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-21'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-22'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-23'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-24'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-25'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-26'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-27'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-28'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-29'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-04-30'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-01'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-02'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-03'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-04'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-05'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-06'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-07'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-08'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-09'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-10'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-11'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-12'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-13'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-14'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-15'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-16'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-17'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-18'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-19'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-20'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-21'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-22'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-23'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-24'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-25'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-26'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-27'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-28'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-29'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-30'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-05-31'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-01'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-02'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-03'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-04'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-05'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-06'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-07'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-08'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-09'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-10'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-11'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-12'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-13'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-14'),
      attendance : [true, true, true, true, true, true, true]
    },
    {
      date : new Date('2024-06-15'),
      attendance : [false, null, null, null, null, null, null]
    },
  ]

  const attendance = [
    {
      subject : "Maths",
      daysAttended : 10,
      totalDays : 15
    },
    {
      subject : "Physics",
      daysAttended : 12,
      totalDays : 15
    },
    {
      subject : "Chemistry",
      daysAttended : 13,
      totalDays : 15
    },
    {
      subject : "Biology",
      daysAttended : 14,
      totalDays : 15
    },
    {
      subject : "English",
      daysAttended : 15,
      totalDays : 15
    },
    {
      subject : "History",
      daysAttended : 10,
      totalDays : 15
    },
    {
      subject : "Geography",
      daysAttended : 12,
      totalDays : 15
    },
  ]
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>ATTENDANCE</h2>
      </div>
      <div className='p-5'>
          <select name="" id="" className='text-xs w-full border p-3 focus:outline-none' onChange={(e)=>{console.log(e.target.value)}}>
            <option value="">Select Semester</option>
            <option value="1">Sem 1</option>
            <option value="2">Sem 2</option>
            <option value="3">Sem 3</option>
            <option value="4" selected>Sem 4</option>
          </select>
      </div>
      <div className='p-5 w-full text-xs'>
        <table className='text-center border border-collapse w-full'>
          <thead className='border border-collapse'>
            <tr>
              <th className='border border-collapse p-2 text-sm'>
                Subject
              </th>
              <th className='border border-collapse p-2 text-sm'>
                Total
              </th>
              <th className='border border-collapse p-2 text-sm'>
                Present
              </th>
              <th className='border border-collapse p-2 text-sm'>
                Attendance
              </th>
            </tr>
          </thead>
          <tbody>
            {
              attendance.map((subject) => {
                return (
                  <tr 
                  key={subject.subject}
                  className='border border-collapse'>
                    <td className='border border-collapse p-2 font-medium'>
                      {subject.subject}
                    </td>
                    <td className='border border-collapse p-2'>
                      {subject.totalDays}
                    </td>
                    <td className='border border-collapse p-2'>
                      {subject.daysAttended}
                    </td>
                    <td className={`border border-collapse p-2 ${subject.daysAttended/subject.totalDays>0.75 ? 'text-green-600' : 'text-red-600'}`}>
                      {((subject.daysAttended/subject.totalDays)*100).toFixed(2)}%
                    </td>
                  </tr>
                )
              })
            }
                  <tr className='border border-collapse font-bold'>
                    <td className='border border-collapse p-2'>
                      Total
                    </td>
                    <td className='border border-collapse p-2'>
                      {attendance.map((subject) => subject.totalDays).reduce((a,b) => a+b)}
                    </td>
                    <td className='border border-collapse p-2'>
                      {attendance.map((subject) => subject.daysAttended).reduce((a,b) => a+b)}
                    </td>
                    <td className={`border border-collapse p-2 ${(attendance.map((subject) => subject.daysAttended).reduce((a,b) => a+b)/attendance.map((subject) => subject.totalDays).reduce((a,b) => a+b))>0.75 ? 'text-green-600' : 'text-red-600'}`}>
                      {((attendance.map((subject) => subject.daysAttended).reduce((a,b) => a+b)/attendance.map((subject) => subject.totalDays).reduce((a,b) => a+b))*100).toFixed(2)}%
                    </td>
                  </tr>
          </tbody>
        </table>
      </div>
      <div className='w-full p-5 text-xs'>
        <table className='w-full'>
          <thead>
            <tr className='border border-collapse'>
              <th className='border border-collapse p-2'>
                Date/Time
              </th>
              {
                time.map((time) => {
                  return (
                    <th 
                    className='border border-collapse p-2'
                    key={time}>
                      {time}
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              att.map((day) => {
                return (
                  <tr className='border border-collapse' key={day.date}>
                    <td className='border border-collapse p-2 text-center'>
                      {day.date.toLocaleDateString()}
                    </td>
                    {
                      day.attendance.map((status) => {
                        return (
                          <td 
                          className={`border border-collapse p-2 font-bold ${status == null ? 'bg-yellow-100 text-yellow-400' : (status ? 'bg-green-100 text-green-400' : 'bg-red-100 text-red-400')} text-center`}
                          key={status}>
                            {status == null ? 'PN' :( status ? 'P' : 'A')}
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
    </div>
  )
}

export default Attendance