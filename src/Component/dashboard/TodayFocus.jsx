
const TodayFocus = () => {
    const list = JSON.parse(localStorage.getItem('data')) || [];
    const date = new Date();
    let Year = date.getFullYear();
    let Month = String(date.getMonth() + 1).padStart(2, '0');
    let Day = String(date.getDate()).padStart(2, '0');

    let dateStr = `${Year}-${Month}-${Day}`;
    let time = 0;
    let dateFilter = list.filter(l => l.date === dateStr)
    dateFilter.forEach(l => {
        time += l.duration;
    });
    let mins = String(Math.floor(time / 60));

    return `${mins} min`
}


export default TodayFocus
