import React, { useEffect, useRef, useState } from 'react'

const Timer = ({ timerState }) => {
  const [remainingSec, setRemainingSec] = useState(timerState);
  const [isRunning, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setRemainingSec(timerState);
  }, [timerState]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setRemainingSec(prev => {

        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }

        return prev - 1;
      })
    }, 1000);

    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  let mins = String(Math.floor(remainingSec / 60)).padStart(2, 0);
  let sec = String(Math.floor(remainingSec % 60)).padStart(2, 0);

  return (
    <div className='flex flex-col w-full h-fit items-center md:h-fit'>

      <div className='text-[35vw] md:text-[12vw] text-text-purple'>{mins}:{sec}</div>
      <button className='h-fit w-fit text-[8vw] md:text-[2vw] bg-text-purple px-10 py-2 rounded-2xl cursor-pointer'
        onClick={() =>
          setRunning(r => !r)}>
        {isRunning ? 'Pause' : 'Start'}</button>
    </div>
  )
}

export default Timer
