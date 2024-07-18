import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { HOST } from '../constants'

const Concerns = () => {
  const [concernStatus, setConcernStatus] = useState('Pending');
  const isStudent = useSelector((state) => state.NavbarData.isStudent)

  const [subject, setSubject] = useState('')
  const [concern, setConcern] = useState('')
  const user = useSelector((state) => state.auth.user)
  console.log(user)
  const proctor = user?.AppointProctor[0]?.teacherId?.id
  const [concerns, setConcerns] = useState([])

  React.useEffect(() => {
    const data = {
      proctorId : proctor? proctor : user.id,
      studentId : proctor ? user.id : "all"
    }

    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    }

    fetch(`${HOST}/api/student/get-concerns`, options)
    .then(response => response.json())
    .then
    (
      data => setConcerns(data)
    )
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      proctorId : proctor,
      studentId : user.id,
      subject : subject,
      concern : concern
    }
    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    }
    fetch(`${HOST}/api/student/raise-concern`, options)
    .then(response => response.json())
    .then
    (
      data => {
        console.log(data)
      }
    )

  }
  

  return (
    <div className='w-2/3 bg-white  m-5 shadow-lg border flex flex-col pb-10  rounded-lg'>
      <div>
          {/* Icon */}
          <h2 className='font-bold text-blue-600 px-5 py-3 border-b'>CONCERNS</h2>
      </div>
      {isStudent && (
          <>
                  <div>
          {/* Icon */}
          <h3 className='font-bold text-blue-600 px-5 py-3 border-b text-sm'>Raise a Concern</h3>
      </div>
      <div className='p-5'>
        <form onSubmit={(e) => handleSubmit(e)} className='text-xs flex w-full flex-col gap-3'>
          <div className='w-full flex flex-col gap-2'>
            <label htmlFor="agenda">Subject : </label>
            <textarea 
            onChange={(e) => setSubject(e.target.value)}
            name="" 
            id="" 
            rows="1"
            className='border p-2'
            required
            ></textarea>
          </div>
          <div className='w-full flex flex-col gap-2'>
            <label htmlFor="agenda">Concern : </label>
            <textarea 
            onChange={(e) => setConcern(e.target.value)}
            name="" 
            id="" 
            rows="5"
            className='border p-2'
            required
            ></textarea>
          </div>
          <div className='w-full flex justify-end'>
            <button type='submit' className='p-3 bg-black text-white focus:outline-none rounded-lg'>Raise Concern</button>
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
            {
              concerns.length > 0 && concerns.map((item, index) => (
                <tr key = {index} className='border border-collapse'>
                  <td className='border border-collapse p-2'>
                    <span className='text-xs text-blue-600 font-bold'>{item.createdAt}</span>
                  </td>
                  <td className='border border-collapse p-2 text-left'>
                    <span className='text-xs text-blue-600'>{item.concern}</span> <br />
                    <span className='text-xs'>{item.concern}</span>
                    <div className='text-xs relative'>
                          <label htmlFor=""></label>
                          <input 
                          className='bg-gray-100 w-full rounded-md p-5 pr-10 focus:outline-none my-3'
                          type="text" 
                          disabled
                          placeholder='reply from the proctor'/>
                      </div>
                  </td>
                  <td className={`${concernStatus=='Resolved' ? 'text-green-400 bg-green-100' : 'bg-yellow-100 text-yellow-400'}`}>
                    <span className={`text-xs font-medium`}>{concernStatus}</span>
                  </td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
          </>
      )}
      {
        !isStudent && (
                    <div className='w-full p-5'>
                    <table className='w-full text-center'>
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
                          <td className='border border-collapse p-2 text-left'>
                            <span className='text-xs text-blue-600 '>Concern about the syllabus</span>
                            <br />
                            <span className='text-xs'>The syllabus is updated</span>
                            <div className='text-xs relative'>
                              <label htmlFor=""></label>
                              <input 
                              className='bg-gray-100 w-full rounded-md p-5 pr-10 focus:outline-none my-3'
                              type="text" 
                              {...{disabled: concernStatus==='Resolved'}}
                              placeholder='reply'/>
                              <button className={`absolute right-3 bottom-6 ${concernStatus === "Pending"? 'bg-blue-500' : 'bg-gray-200'} text-white p-2 rounded-md`}>Send</button>
                            </div>
                          </td>
                          <td className={`${concernStatus=='Resolved' ? 'text-green-400 bg-green-100' : 'bg-yellow-100 text-yellow-400'}`}>
                            <span className={`text-xs font-medium`}>{concernStatus}</span>
                            <div className='p-3 flex justify-center items-center'>
                              <button className='flex flex-col gap-1 justify-center items-center'
                              onClick={() => setConcernStatus(concernStatus==="Pending"?"Resolved": "Pending")}
                              >
                                <span className='text-xs text-blue-600 bg-blue-100 rounded-lg p-3'>Update Status</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        {
                          concerns.length > 0 && concerns.map((item, index) => (
                            <tr key = {index} className='border border-collapse'>
                              <td className='border border-collapse p-2'>
                                <span className='text-xs text-blue-600 font-bold'>{item.createdAt}</span>
                              </td>
                              <td className='border border-collapse p-2 text-left'>
                                <span className='text-xs text-blue-600'>{item.concern}</span> <br />
                                <span className='text-xs'>{item.concern}</span>
                                <div className='text-xs relative'>
                                      <label htmlFor=""></label>
                                      <input 
                                      className='bg-gray-100 w-full rounded-md p-5 pr-10 focus:outline-none my-3'
                                      type="text" 
                                      disabled
                                      placeholder='reply from the proctor'/>
                                  </div>
                              </td>
                              <td className={`${concernStatus=='Resolved' ? 'text-green-400 bg-green-100' : 'bg-yellow-100 text-yellow-400'}`}>
                                <span className={`text-xs font-medium`}>{concernStatus}</span>
                              </td>
                        </tr>
                          ))
            }
                      </tbody>
                    </table>
                  </div>
        )
      }
    </div>
  )
}

export default Concerns