import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase.config'

const StudentLogin = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if(response) console.log(response.user);
      else console.log('No response');
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Student Login</h1>
        <form className='flex flex-col w-3/4 mt-10'>
          <input 
          onChange={(e) => {setEmail(e.target.value)}}
          value={email}
          type='emali' placeholder='Email' className='p-2 my-2 border-2 border-gray-300 rounded-lg' />
          <input 
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          type='password' placeholder='Password' className='p-2 my-2 border-2 border-gray-300 rounded-lg' />
          <button 
          onClick={(e)=> {handleLogin(e)}}
          className='bg-blue-500 text-white p-2 rounded-lg'>Login</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default StudentLogin