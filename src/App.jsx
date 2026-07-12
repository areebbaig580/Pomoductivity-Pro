import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import Settings from './pages/Settings'

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
    <div className='min-h-screen w-full bg-bg text-text'>
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
