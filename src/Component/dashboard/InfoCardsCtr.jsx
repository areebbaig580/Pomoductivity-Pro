import React from 'react'
import InfoCard from './InfoCard'
import { Clock, Flame, CalendarDays } from 'lucide-react'
import TodayFocus from './TodayFocus';
import WeekTime from './WeekTime';
import Streak from './Streak';


const InfoCardsCtr = () => {
    let today = TodayFocus();
    let week = WeekTime();
    let streak = Streak();
    
    return (
        <div className='h-fit w-full md:w-5/10 mt-5 flex gap-2 md:pl-2'>
            <InfoCard label={'Today'} icon={<Clock className='text-text-purple' />} time={today} />
            <InfoCard label={'Week'} icon={<CalendarDays className='text-text-purple' />} time={week} />
            <InfoCard label={'Streak'} icon={<Flame className='text-text-purple' />} time={streak} />
        </div>
    )
}

export default InfoCardsCtr
