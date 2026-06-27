import React, { useState } from 'react'
import Timer from './timer'
import TimerState from './TimerState'
import Nav from './Nav'

const Home = () => {
    const [timerState, setTimerstate] = useState(25 * 60);

    return (
        <div className='h-screen w-screen flex flex-col items-center text-white px-2'>
            <Nav />
            <div className='h-[80vh]  w-full md:w-[65vw] md:h-[65vh] bg-secondary rounded-xl flex flex-col items-center'>
                <TimerState setTimerstate={setTimerstate} />
                <Timer timerState={timerState} />
            </div>
        </div>
    )
}

export default Home
