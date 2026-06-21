import React, { useEffect, useState } from 'react'
import { SquareCheck } from 'lucide-react'
import { ChartSpline } from 'lucide-react'
import Timer from './Component/Home/timer'
import TimerState from './Component/Home/TimerState'
import Nav from './Component/Home/Nav'

const App = () => {
  const [timerState, setTimerstate] = useState(25 * 60);

  return (
    <div className='h-screen w-screen bg-black flex flex-col items-center text-white'>
      <Nav />
      <div className='h-[70vh] w-[65vw] bg-[#1b1a1ab7] rounded-xl flex  items-center'>
        <TimerState setTimerstate={setTimerstate} />
        <Timer timerState={timerState} />
      </div>
    </div>
  )
}

export default App
