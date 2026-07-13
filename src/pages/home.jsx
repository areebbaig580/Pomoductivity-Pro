import React, { useState } from 'react'
import Timer from '../Component/home/timer'
import TimerState from '../Component/home/TimerState'
import Nav from '../Component/home/Nav'

const Home = ({ notifyValue, notifyMode , alarm}) => {
    const pomodoro = JSON.parse(localStorage.getItem('pomodoro')) || { focus: 25, shortBreak: 5, longBreak: 15 };
    let duration = pomodoro.focus * 60;
    const [timerState, setTimerstate] = useState(duration);
    const [label, setLabel] = useState('Focus');

    return (
        <div className='h-screen w-screen flex flex-col items-center text-text px-2'>
            <Nav />
            <div className='h-fit  w-full md:w-[50vw]  bg-secondary-main rounded-xl flex flex-col  items-center pb-5'>
                <TimerState setTimerstate={setTimerstate} setLabel={setLabel} />
                <Timer timerState={timerState} label={label} notifyValue={notifyValue} notifyMode={notifyMode} alarm ={alarm} />
            </div>
        </div>
    )
}

export default Home
