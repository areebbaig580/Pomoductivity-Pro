import React, { useState } from 'react'

const TimerState = ({ setTimerstate }) => {
    const [active, setActive] = useState('focus');
    const modes = [
        { id: 'focus', label: 'Focus', duration: 25 * 60 },
        { id: 'short', label: 'Short Break', duration: 5 * 60 },
        { id: 'long', label: 'Long Break', duration: 10 * 60 },
    ];
    return (
        <div className='flex flex-col h-full justify-evenly px-2 text-xl font-semibold'>
            {modes.map(mode => (
                <div
                    key={mode.id}
                    className={`h-fit w-fit px-4 py-2 rounded-xl cursor-pointer ml-5 
                        ${active === mode.id ? 'bg-[#383838b7]' : ''}`}
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
