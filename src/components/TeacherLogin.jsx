import React, { useEffect, useState } from 'react'
import { HOST } from '../constants.js'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/AuthSlice.js'


const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
        role: 'TEACHER'
      }

      const options = {
        method: 'POST',
        credentials : 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      const response = await fetch(`${HOST}/api/proctor/login`, options);

      if(!response.ok) throw new Error('Error in login');

      
      const result = await response.json();

      console.log(result);
      localStorage.setItem('user', JSON.stringify(result));

      dispatch(login(result))

      navigate('/teacher');

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Teacher Login</h1>
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

export default TeacherLogin