import React, { useState } from 'react'

const Result = () => {
  const [choice, setChoice] = useState(null);
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>RESULT</h2>
        </div>
        <div className='p-5'>
          <select name="" id="" className='text-xs w-full border p-3 focus:outline-none' onChange={(e)=>{console.log(e.target.value)}}>
            <option value="">Select Semester</option>
            <option value="1">Sem 1</option>
            <option value="2">Sem 2</option>
            <option value="3">Sem 3</option>
            <option value="4">Sem 4</option>
          </select>
          {/* <table className="table-auto w-full text-center border-collapse ">
            <thead>
              <tr className='border border-collapse'>
                <th className='border border-collapse'>
                  <span className='text-xs text-blue-600'>Week/Time</span>
                </th>
                      <th 
                      className='border border-collapse'
                      >
                        <span className='text-xs text-blue-600'></span>
                      </th>
              </tr>
            </thead>
            <tbody>
                    <tr 
                    className='border border-collapse'
                    >
                      <td
                      className='border border-collapse'
                      >
                        <span className='text-xs text-blue-600 font-bold'></span>
                      </td>
                      
                    </tr>     
            </tbody>
          </table> */}
          <div className='flex justify-end w-full gap-5 py-10'>
            <button className='bg-black text-white p-4 text-xs rounded-lg'>
              Save JPG
            </button>
            <button className='bg-black text-white p-4 text-xs rounded-lg'>
              Save PDF
            </button>
          </div>
        </div>
    </div>
  )
}

export default Result