import React from 'react'

const Concerns = () => {
  const concernStatus = 'Pending'
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>CONCERNS</h2>
      </div>
      <div>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>Raise a Concern</h3>
      </div>
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
          <div className='w-full flex flex-col gap-2'>
            <label htmlFor="agenda">Concern : </label>
            <textarea 
            name="" 
            id="" 
            rows="5"
            className='border p-2'
            required
            ></textarea>
          </div>
          <div className='w-full flex justify-end'>
            <button className='p-3 bg-black text-white focus:outline-none rounded-lg'>Raise Concern</button>
          </div>
        </form>
      </div>
      <div>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-y text-sm'>Raised Concerns</h3>
      </div>
      <div className='w-full p-5 text-center'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='w-1/5 border border-collapse p-2'>
                <span className='text-xs text-blue-600'>Date</span>
              </th>
              <th className='w-3/5 border border-collapse p-2'>
                <span className='text-xs text-blue-600'>Concern</span>
              </th>
              <th className='w-1/5 border border-collapse p-2'>
                <span className='text-xs text-blue-600'>Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border border-collapse'>
              <td className='border border-collapse p-2'>
                <span className='text-xs text-blue-600 font-bold'>01/01/2021</span>
              </td>
              <td className='border border-collapse p-2'>
                <span className='text-xs text-blue-600'>Concern about the syllabus</span>
              </td>
              <td className={`${concernStatus=='Resolved' ? 'text-green-400 bg-green-100' : 'bg-yellow-100 text-yellow-400'}`}>
                <span className={`text-xs font-medium`}>{concernStatus}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Concerns