import React from 'react'

 const MonthFocus = () => {
        const list = JSON.parse(localStorage.getItem('data')) || [];
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let firstdate = new Date(year, month, 1);
        let monthName = date.toLocaleString('default', { month: 'short' });

        let monthLabel = [];
        let monthData = [];

        for (let i = 0; i < daysInMonth; i++) {
            let totSec = 0;
            let currDate = new Date(firstdate);
            currDate.setDate(firstdate.getDate() + i)
            let Year = currDate.getFullYear();
            let Month = String(currDate.getMonth() + 1).padStart(2, '0');
            let Day = String(currDate.getDate()).padStart(2, '0');

            let dateStr = `${Year}-${Month}-${Day}`;
            let today = currDate.getDate();

            let dateFilter = list.filter(l => l.date === dateStr);
            dateFilter.forEach(l => {
                totSec += l.duration
            });

            if (dateFilter.length > 0) {
                monthLabel[i] = `${today} ${monthName}`
                monthData[i] = totSec/60;
            } else {
                monthLabel[i] = `${today} ${monthName}`
                monthData[i] = 0;
            }

        }
        return [monthData , monthLabel]

    }

export default MonthFocus
