import React, { useState } from 'react'

const TimerState = ({ setTimerstate }) => {
    const [active, setActive] = useState('focus');
    const modes = [
        { id: 'focus', label: 'Focus', duration: 25 * 60 },
        { id: 'short', label: 'Short Break', duration: 5 * 60 },
        { id: 'long', label: 'Long Break', duration: 10 * 60 },
    ];
    return (
        <div className='flex h-fit w-full justify-evenly px-2 py-4 text-xl font-semibold gap-1'>
            {modes.map(mode => (
                <div
                    key={mode.id}
                    className={`h-fit w-fit px-2 py-3 rounded-xl cursor-pointer ml-5 
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
