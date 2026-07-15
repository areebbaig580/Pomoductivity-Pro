import WeekFocus from './WeekFocus';

const WeekTime = () => {
    let weekData = WeekFocus();
    let time = 0;
    weekData.forEach(e => time += e)

    let mins = String(Math.floor(time));
   
    return `${mins} min`
}

export default WeekTime