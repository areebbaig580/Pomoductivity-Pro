import React, { useEffect, useState } from 'react'
import TimerControlcard from './TimerControlcard'
import { SwitchDemo } from './Switch'

const TimerControl = () => {
  const [duration, setDurations] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('pomodoro'));
      return stored || { focus: 25, shortBreak: 5, longBreak: 15 }
    }
    catch {
      return { focus: 25, shortBreak: 5, longBreak: 15 }
    }
  })

  useEffect(() => {
    localStorage.setItem('pomodoro', JSON.stringify(duration));
  }, [duration])

  return (
    <div className='flex gap-2 w-full md:w-5/10 mt-2'>


      <TimerControlcard
        label="Focus"
        value={duration.focus}
        onIncrement={() => setDurations(d => ({ ...d, focus: d.focus + 1 }))}
        onDecrement={() => setDurations(d => ({ ...d, focus: d.focus > 1 ? d.focus - 1 : d.focus }))}
        onChange={(e) => {
          const val = Number(e.target.value)
          setDurations(d => ({ ...d, focus: isNaN(val) ? 0 : val }))
        }}
      />
      <TimerControlcard
        label="Short break"
        value={duration.shortBreak}
        onIncrement={() => setDurations(d => ({ ...d, shortBreak: d.shortBreak + 1 }))}
        onDecrement={() => setDurations(d => ({ ...d, shortBreak: d.shortBreak > 1 ? d.shortBreak - 1 : d.shortBreak }))}
        onChange={(e) => {
          const val = Number(e.target.value)
          setDurations(d => ({ ...d, shortBreak: isNaN(val) ? 0 : val }))
        }}
      />
      <TimerControlcard
        label="Long break"
        value={duration.longBreak}
        onIncrement={() => setDurations(d => ({ ...d, longBreak: d.longBreak + 1 }))}
        onDecrement={() => setDurations(d => ({ ...d, longBreak: d.longBreak > 1 ? d.longBreak - 1 : d.longBreak }))}
        onChange={(e) => {
          const val = Number(e.target.value)
          setDurations(d => ({ ...d, longBreak: isNaN(val) ? 0 : val }))
        }}
      />


    </div>
  )
}

export default TimerControl
