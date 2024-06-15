import React from 'react'
import { useSelector } from 'react-redux'

const Mentoring = () => {
  const isStudent = useSelector((state) => state.NavbarData.isStudent)
  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>MENTORING</h2>
      </div>
      
      {!isStudent && (
        <>
                <div>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>Schedule Meeting</h3>
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
              <th className='w-3/5 border border-collapse'>
                <span className='text-xs text-blue-600'>Agenda</span>
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td className='border border-collapse p-2'>
                <span className='text-xs'>12/12/2021</span>
              </td>
              <td className='border border-collapse'>
                <span className='text-xs'>12:00</span>
              </td>
              <td className='border border-collapse'>
                <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-5'>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-y text-sm'>Previous Meeting</h3>
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
              <th className='w-3/5 border border-collapse'>
                <span className='text-xs text-blue-600'>Agenda</span>
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr>
              <td className='border border-collapse p-2'>
                <span className='text-xs'>12/12/2021</span>
              </td>
              <td className='border border-collapse'>
                <span className='text-xs'>12:00</span>
              </td>
              <td className='border border-collapse'>
                <span className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Mentoring