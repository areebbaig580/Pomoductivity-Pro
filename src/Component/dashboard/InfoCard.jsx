import React from 'react'

const InfoCard = ({label , icon , time}) => {
   
    return (
        <div className='h-fit w-[28vw] md:w-[10vw] md:px-4 pb-2 bg-secondary-main rounded-lg px-2 py-2'>
            <div className='flex w-full justify-between mb-3'>
                <div >{icon}</div>
                <div className='text-lg'>{time}</div>
            </div>
            <div className='w-full flex justify-end text-sm'>{label}</div>
        </div>
    )
}

export default InfoCard
