import React, { useEffect, useState } from 'react'
import Timer from './timer'
import TimerState from './TimerState'
import Nav from './Nav'

const Home = () => {
    const pomodoro = JSON.parse(localStorage.getItem('pomodoro')) || { focus: 25, shortBreak: 5, longBreak: 15 };
    let duration = pomodoro.focus * 60;
    const [timerState, setTimerstate] = useState(duration);

    return (
        <div className='h-screen w-screen flex flex-col items-center text-text px-2'>
            <Nav />
            <div className='h-fit  w-full md:w-[50vw]  bg-secondary rounded-xl flex flex-col  items-center pb-5'>
                <TimerState setTimerstate={setTimerstate} />
                <Timer timerState={timerState} />
            </div>
        </div>
    )
}

export default Home
