import React from 'react'

const Streak = () => {
    const list = JSON.parse(localStorage.getItem('data')) || [];
    const today = new Date();
    const yesterday = new Date(Date.now() - 86400000);
    let Year = today.getFullYear();
    let Month = String(today.getMonth() + 1).padStart(2, '0');
    let Day = String(today.getDate()).padStart(2, '0');
    let yesterdayDay = String(yesterday.getDate()).padStart(2, '0');
    let dateStr = `${Year}-${Month}-${Day}`;
    let yesterdayStr = `${Year}-${Month}-${yesterdayDay}`;

    let streak = JSON.parse(localStorage.getItem('streak')) || 0;
    const lastAccess = localStorage.getItem('lastAccess');

    const hasSessionToday = list.some(l => l.date === dateStr);
    if (!hasSessionToday) return;
    if (lastAccess === dateStr) return streak;

    streak = lastAccess === yesterdayStr ? streak + 1 : 1;

    localStorage.setItem('streak', JSON.stringify(streak));
    localStorage.setItem('lastAccess', dateStr);

    return streak
}

export default Streak
