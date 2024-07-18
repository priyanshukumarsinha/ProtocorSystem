import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Result = () => {
  const [semester, setSemester] = useState(1)
  const isStudent = useSelector((state) => state.NavbarData.isStudent);
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>RESULT</h2>
        </div>
        {
          isStudent && (
            <div className='p-5'>
              <select name="" id="" className='text-xs w-full border p-3 focus:outline-none' onChange={(e)=>{console.log(e.target.value)}}>
                <option value="">Select Semester</option>
                <option value="1">Sem 1</option>
                <option value="2">Sem 2</option>
                <option value="3">Sem 3</option>
                <option value="4">Sem 4</option>
              </select>

              <div className='flex justify-end w-full gap-5 py-10 bg-gray-50 my-5 rounded p-5'>
                RESULT
              </div>

              <div className='flex justify-end w-full gap-5 py-10'>
                <button className='bg-black text-white p-4 text-xs rounded-lg'>
                  Save JPG
                </button>
                <button className='bg-black text-white p-4 text-xs rounded-lg'>
                  Save PDF
                </button>
              </div>
            </div>
          )
        }

        {
          !isStudent && (
            <div className='p-5'>
              <select name="" id="" className='text-xs w-full border p-3 focus:outline-none' onChange={(e)=>{console.log(e.target.value)}}>
                <option value="">Select Semester</option>
                <option value="1">Sem 1</option>
                <option value="2">Sem 2</option>
                <option value="3">Sem 3</option>
                <option value="4">Sem 4</option>
              </select>

              <div className='flex justify-end w-full gap-5 py-10'>
                <div className='flex gap-5 w-full justify-evenly items-center h-[150px]'>
                  <div className='bg-green-200 w-1/3 p-5 rounded-lg font-bold text-center h-full'>
                    <h2>{'Student with CGPA > 8'}</h2>
                    <div className='w-full text-center font-bold text-3xl my-5'>
                      {
                        // data
                        1000
                      }
                    </div>
                  </div>
                  <div className='bg-yellow-200 w-1/3 p-5 rounded-lg font-bold text-center h-full'>
                    <h2>{'Student with CGPA < 6 '}</h2>
                    <div className='w-full text-center font-bold text-3xl my-5'>
                      {
                        // data
                        1000
                      }
                    </div>
                  </div>
                  <div className='bg-red-200 w-1/3 p-5 rounded-lg font-bold text-center h-full'>
                    <h2>{'Student with atleast back in 1 Subject'}</h2>
                    <div className='w-full text-center font-bold text-3xl my-5'>
                      {
                        // data
                        1000
                      }
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gray-200 w-full p-5 my-5 rounded'>
                Graph
              </div>

              <div className='flex justify-end w-full gap-5 py-10'>
                {/* RESULT TABLE */}
                <table className='w-full border border-collapse text-center'>
                  <thead>
                    <tr className='border border-collapse'>
                      <th className='border border-collapse'>USN</th>
                      <th className='border border-collapse'>Name</th>
                      <th className='border border-collapse'>CGPA</th>
                      <th className='border border-collapse'>SGPA</th>
                      <th className='border border-collapse'>Backlogs <br></br> <span className='text-xs'>(Not Cleared)</span></th>
                    </tr>
                  </thead>
                      <tr>
                        <td className='border border-collapse p-3'>1DS19CS001</td>
                        <td className='border border-collapse p-3'>John Doe</td>
                        <td className={'border border-collapse p-3'}>8.5</td>
                        <td className={'border border-collapse p-3'}>9.0</td>
                        <td className='border border-collapse p-3'>0</td>
                      </tr>

                </table>
              </div>

            </div>
          )
        }
    </div>
  )
}

export default Result