import React from 'react'

const Exam = () => {
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
        <div>
            {/* Icon */}
            <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>EXAMS</h2>
        </div>
        <div className='w-full p-5'>
           <table className='w-full text-center'>
            <tr>
              <th className='border border-collapse p-3'>Exam Name</th>
              <th className='border border-collapse p-3'>Subject</th>
              <th className='border border-collapse p-3'>Date</th>
              <th className='border border-collapse p-3'>Time</th>
              <th className='border border-collapse p-3'>Duration</th>
              <th className='border border-collapse p-3'>Schedule</th>
            </tr>
            <tr>
              <td className='border border-collapse p-3'>Mid Semester</td>
              <td className='border border-collapse p-3'>Maths</td>
              <td className='border border-collapse p-3'>12/10/2021</td>
              <td className='border border-collapse p-3'>10:00 AM</td>
              <td className='border border-collapse p-3'>2 hours</td>
              <td className='border border-collapse p-3'><a href='#' className='text-blue-500'>Download</a></td>
            </tr>
            <tr>
              <td className='border border-collapse p-3'>End Semester</td>
              <td className='border border-collapse p-3'>Science</td>
              <td className='border border-collapse p-3'>20/10/2021</td>
              <td className='border border-collapse p-3'>11:00 AM</td>
              <td className='border border-collapse p-3'>3 hours</td>
              <td className='border border-collapse p-3'><a href='#' className='text-blue-500'>Download</a></td>
            </tr>
            <tr>
              <td className='border border-collapse p-3'>Weekly Test</td>
              <td className='border border-collapse p-3'>English</td>
              <td className='border border-collapse p-3'>15/10/2021</td>
              <td className='border border-collapse p-3'>9:00 AM</td>
              <td className='border border-collapse p-3'>1 hour</td>
              <td className='border border-collapse p-3'><a href='#' className='text-blue-500'>Download</a></td>
            </tr>
           </table>
        </div>
        <div className='bg-white p-5 w-[30%] absolute left-14 h-[600px] rounded'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>ADD EXAM</h2>
      </div>
      <div>
      <form className='w-full p-5 '>
                    <div className='flex flex-col gap-5'>
                        <input type='text' placeholder='Exam Name' className='border p-2' />
                        <input type='text' placeholder='Subject' className='border p-2' />
                        <input type='date' placeholder='Date' className='border p-2' />
                        <input type='time' placeholder='Time' className='border p-2' />
                        <input type='text' placeholder='Duration' className='border p-2' />
                        <button className='bg-blue-500 text-white px-3 py-1 rounded'>Add Exam</button>
                    </div>
                </form>
      </div>
    </div>
    </div>
  )
}

export default Exam