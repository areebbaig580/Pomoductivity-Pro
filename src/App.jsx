import React, { useEffect, useState } from 'react'
import { SquareCheck } from 'lucide-react'
import { ChartSpline } from 'lucide-react'
import Timer from './Component/Pages/home/timer'
import TimerState from './Component/Pages/home/TimerState'
import Nav from './Component/Pages/home/Nav'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Component/Pages/dashboard/dashboard'
import Home from './Component/Pages/home/home'
import Settings from './Component/Pages/settings/Settings'

const App = () => {
  let theme = JSON.parse(localStorage.getItem('theme'));
  document.documentElement.setAttribute('data-theme', theme)

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  const [notifyMode, setNotifyMode] = useState('last');
  const [notifyValue, setNotifyValue] = useState(5);

  return (
    <div className='h-screen w-screen bg-bg text-text'>
      <Routes>
        <Route path='/' element={<Home
          notifyValue={notifyValue}
          notifyMode={notifyMode}
        />}
        />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/setting' element={<Settings
          notifyMode={notifyMode}
          setNotifyMode={setNotifyMode}
          notifyValue={notifyValue}
          setNotifyValue={setNotifyValue}

        />} />

      </Routes>
    </div>
  )
}

export default App
