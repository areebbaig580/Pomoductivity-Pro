const WeekFocus = () => {
  const list = JSON.parse(localStorage.getItem('data')) || [];
  let today = new Date();
  let day = today.getDay();
  let daysFromMonday = day === 0 ? 6 : day - 1;
  let monday = new Date(today);

  monday.setDate(today.getDate() - daysFromMonday);

  let weekData = [0, 0, 0, 0, 0, 0, 0]

  for (let i = 0; i < 7; i++) {
    let time = 0;
    let currDate = new Date();
    currDate.setDate(monday.getDate() + i);
    
    let Year = currDate.getFullYear();
    let Month = String(currDate.getMonth() + 1).padStart(2, '0');
    let Day = String(currDate.getDate()).padStart(2, '0');

    let dateStr = `${Year}-${Month}-${Day}`;


    let dateFilter = list.filter(l => l.date === dateStr);

    dateFilter.forEach(l => {
      time += l.duration / 60;
    });

    weekData[i] = time;
  }

  return weekData
}

export default WeekFocus
