import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Notification from './components/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full'>
      <Header/>
      </div>
      <div className='w-full px-10 flex h-full'>
        <Profile />
        <Notification />
      </div>

    </>
  )
}

export default App
