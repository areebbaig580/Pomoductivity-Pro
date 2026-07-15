import React, { useEffect, useRef, useState } from 'react'

const Timer = ({ timerState, label, notifyValue, notifyMode, alarm }) => {

  const [remainingSec, setRemainingSec] = useState(timerState);
  const [isRunning, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const notifyRef = useRef(null);
  const remainingRef = useRef(remainingSec);
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Audio(`/sounds/${alarm}.mp3`);
  }, [alarm]);
  const list = JSON.parse(localStorage.getItem('data')) || [];

  useEffect(() => {
    remainingRef.current = remainingSec;
  }, [remainingSec]);

  useEffect(() => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setRemainingSec(timerState);
  }, [timerState]);

  useEffect(() => {
    if (notifyMode === 'last' && remainingSec === notifyValue * 60 && Notification.permission === "granted") {
      new Notification(`${remainingRef.current / 60} min left!`);
    }
  }, [remainingSec, notifyMode, notifyValue]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setRemainingSec(prev => {

        if (prev <= 1) {
          clearInterval(intervalRef.current);
          soundRef.current?.play();
          
          if (Notification.permission === "granted") {

            new Notification(`${label} completed`, {
              requireInteraction: true
            });
          }

          if (label === 'Focus') {

            const dateToday = new Date();
            let Year = dateToday.getFullYear();
            let Month = String(dateToday.getMonth() + 1).padStart(2, '0');
            let Day = String(dateToday.getDate()).padStart(2, '0');
            let dateStr = `${Year}-${Month}-${Day}`;

            let session = {
              date: dateStr,
              duration: parseInt(remainingSec),
              timestamp: Date.now(),
            };

            list.push(session);

            localStorage.setItem('data', JSON.stringify(list));

          }


          return 0;
        }

        return prev - 1;
      })
    }, 1000);

    if (Notification.permission === "granted" && notifyMode === 'every') {

      notifyRef.current = setInterval(() => {
        new Notification(`${Math.round(remainingRef.current / 60)} min remaining`);
      }, notifyValue * 60 * 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(notifyRef.current);
    };

  }, [isRunning])

  let mins = String(Math.floor(remainingSec / 60)).padStart(2, '0');
  let sec = String(Math.floor(remainingSec % 60)).padStart(2, '0');

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = timerState > 0 ? remainingSec / timerState : 0;
  const offset = circumference * (progress - 1);

  return (
    <div className='flex flex-col w-full h-fit items-center md:h-fit'>

      <div className='relative w-[70vw] h-[70vw] md:w-74 md:h-74'>
        <svg className='w-full h-full -rotate-90' viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            className='stroke-text-purple'
            fill="none"
            strokeWidth="10"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            className='stroke-active'
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center text-[16vw] md:text-[6vw] lg:text-[5vw] text-text-purple'>
          {mins}:{sec}
        </div>
      </div>

      <button className='h-fit w-fit text-[8vw] md:text-[2vw] text-btn bg-text-purple px-10 py-2 rounded-2xl cursor-pointer mt-4'
        onClick={() =>
          setRunning(r => !r)}>
        {isRunning ? 'Pause' : 'Start'}</button>
    </div>
  )
}

export default Timer