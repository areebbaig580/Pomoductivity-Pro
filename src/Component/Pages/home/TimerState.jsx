import React, { useEffect, useState } from 'react'

const TimerState = ({ setTimerstate }) => {
    const [active, setActive] = useState('focus');

    const duration = JSON.parse(localStorage.getItem('pomodoro')) || { focus: 25, shortBreak: 5, longBreak: 15 };

    const modes = [
        { id: 'focus', label: 'Focus', duration: duration.focus * 60},
        { id: 'short', label: 'Short Break', duration: duration.shortBreak * 60 },
        { id: 'long', label: 'Long Break', duration: duration.longBreak * 60 },
    ];
    return (
        <div className='flex h-fit w-full justify-evenly px-2 py-2 text-xl font-semibold gap-1'>
            {modes.map(mode => (
                <div
                    key={mode.id}
                    className={`h-fit w-fit px-2 py-2 rounded-xl cursor-pointer 
                        ${active === mode.id ? 'bg-active' : ''}`}
                    onClick={() => {
                        setActive(mode.id);
                        setTimerstate(mode.duration);
                    }}
                >
                    {mode.label}
                </div>
            ))}
        </div>
    )
}

export default TimerState
