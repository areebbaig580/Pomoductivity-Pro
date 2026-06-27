import React, { useEffect, useState } from 'react'
import {SquareCheck } from 'lucide-react'
import { ChartSpline } from 'lucide-react'
import Timer from './Component/Pages/home/timer'
import TimerState from './Component/Pages/home/TimerState'
import Nav from './Component/Pages/home/Nav'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './Component/Pages/dashboard/dashboard'
import Home from './Component/Pages/home/home'
import Settings from './Component/Pages/settings/Settings'

const App = () => {
  
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/dashboard' element= {<Dashboard/>}/>
        <Route path='/setting' element= {<Settings/>}/>
      </Routes>
    </div>
  )
}

export default App
