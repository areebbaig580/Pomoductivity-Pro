import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import Settings from './pages/Settings'

const App = () => {
  let theme = JSON.parse(localStorage.getItem('theme'));
  document.documentElement.setAttribute('data-theme', theme)

  useEffect(() => {

    Notification.requestPermission().then(permission => {
      console.log(permission);
    });

  }, []);

  const [notifyMode, setNotifyMode] = useState('last');
  const [notifyValue, setNotifyValue] = useState(1);

  const sound = JSON.parse(localStorage.getItem('sound')) || 'alarm';
  const [alarm, setAlarm] = useState(sound);

  return (
    <div className='min-h-screen w-full bg-bg text-text'>
      <Routes>
        <Route path='/' element={<Home
          notifyValue={notifyValue}
          notifyMode={notifyMode}
          alarm={alarm}
        />}
        />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/setting' element={<Settings
          notifyMode={notifyMode}
          setNotifyMode={setNotifyMode}
          notifyValue={notifyValue}
          setNotifyValue={setNotifyValue}
          alarm={alarm}
          setAlarm={setAlarm}

        />} />

      </Routes>
    </div>
  )
}

export default App
