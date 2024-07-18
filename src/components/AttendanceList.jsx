import React from 'react'

const AttendanceList = () => {
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>ATTENDANCE LIST</h2>
      </div>
      <div>
        <div className='p-5'>
          <select name="" id="" className='text-xs w-full border p-3 focus:outline-none' onChange={(e)=>{console.log(e.target.value)}}>
            <option value="">Select Semester</option>
            <option value="1">Sem 1</option>
            <option value="2">Sem 2</option>
            <option value="3">Sem 3</option>
            <option value="4">Sem 4</option>
          </select>

          <div className='flex justify-end w-full gap-5 py-10 bg-gray-50 my-5 rounded p-5'>
            <table className='w-full text-center'>
              <thead>
                <tr>
                  <th className='border border-collapse p-3'>USN</th>
                  <th className='border border-collapse p-3'>Name</th>
                  <th className='border border-collapse p-3'>Attendance %</th>
                  <th className='border border-collapse p-3'>Classes Attended</th>
                  <th className='border border-collapse p-3'>Classes Absent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-collapse p-3'>1DS19CS001</td>
                  <td className='border border-collapse p-3'>John Doe</td>
                  <td className='border border-collapse p-3'>80%</td>
                  <td className='border border-collapse p-3'>80</td>
                  <td className='border border-collapse p-3'>8</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AttendanceList