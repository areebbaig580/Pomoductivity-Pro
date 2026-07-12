import React, { useEffect, useState } from 'react'
import Timer from './timer'
import TimerState from './TimerState'
import Nav from './Nav'

const Home = ({ notifyValue, notifyMode }) => {
    const pomodoro = JSON.parse(localStorage.getItem('pomodoro')) || { focus: 25, shortBreak: 5, longBreak: 15 };
    let duration = pomodoro.focus * 60;
    const [timerState, setTimerstate] = useState(duration);
    const [label, setLabel] = useState('Focus');

    return (
        <div className='h-screen w-screen flex flex-col items-center text-text px-2'>
            <Nav />
            <div className='h-fit  w-full md:w-[50vw]  bg-secondary rounded-xl flex flex-col  items-center pb-5'>
                <TimerState setTimerstate={setTimerstate} setLabel={setLabel} />
                <Timer timerState={timerState} label={label} notifyValue={notifyValue} notifyMode={notifyMode} />
            </div>
        </div>
    )
}

export default Home
