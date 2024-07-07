import React from 'react'

const StudentList = () => {
  const username = 'Harsh Raj'
  const mobileNumber = 9999999999
  const email = 'harsh@dsce.edu.in'
  const cgpa = 9.8
  const attendance = 98;
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
              <th className='border border-collapse p-3'>Email</th>
              <th className='border border-collapse p-3'>Phone Number</th>
              <th className='border border-collapse p-3'>View Full Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-collapse p-3'>1DS19CS001</td>
              <td className='border border-collapse p-3'>John Doe</td>
              <td className='border border-collapse p-3'>1DS19CS001@dsce.edu.in</td>
              <td className='border border-collapse p-3'>80</td>
              <td className='border border-collapse p-3'>
                <button className='bg-blue-500 text-white p-2 rounded'>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
  <div className='bg-white p-5 w-[30%] absolute left-14 h-[600px] rounded'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>Student's Personal Details</h2>
      </div>
      <div className='my-3'>
          {/* all peronal details */}
          <div className='flex bg-blue-50 p-5 w-full'>
                <div className='w-1/2 '>
                    <img 
                    className='rounded-full w-[200px] h-[200px]'
                    src="data:image/jpeg;base64,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"
                    alt="" />
                </div>
                <div className='w-1/2 p-5'>
                    <h2 className='font-bold text-blue-600 pb-5'>{username.toUpperCase()}</h2>
                    <h3 className='text-[10px] mb-5 bg-blue-300 rounded-full p-2 font-semibold text-black text-center w-full'>BE - CB (Business Systems)</h3>
                    <h3 className='text-xs font-bold'>1DS22CB024</h3>
                    <h3 className='text-xs font-medium text-gray-500 mb-5'>Semester - 4</h3>
                    <h3 className='text-xs text-gray-500 mb-5'>Roll No. 24</h3>
                </div>
            </div>
            <div className='w-full'>
                <div>
                    <h2 className='font-bold text-blue-600 px-5 py-3'>Student Details</h2>
                    <div className='flex flex-col gap-2 p-5 pt-0'>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Father's Mobile Number : </h3>
                            <h3 className='text-xs text-gray-500'>{mobileNumber}</h3>
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs font-medium'>Mother's Mobile Number : </h3>
                            <h3 className='text-xs text-gray-500'>{mobileNumber}</h3>
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
      </div>
    </div>
</div>
    
  )
}

export default StudentList