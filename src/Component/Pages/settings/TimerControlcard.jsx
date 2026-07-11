import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const TimerControlcard = ({label, value, onIncrement , onDecrement , onChange}) => {

    
    return (
        <div className='h-fit w-[30vw] md:w-[16vw] md:px-4 pb-2 px-2 bg-secondary rounded-2xl'>

            <div className='px-2 py-2 text-sm md:text-xl font-semibold'>{label}</div>

            <div className='flex items-center mt-5'>

                <input type="number" className='input border-none outline-none px-2 text-2xl md:text-3xl w-7/10' value={value} onChange={onChange} />
                <div className='flex flex-col justify-center '>
                    <ChevronUp onClick={onIncrement} className='cursor-pointer ' size={20}  /><ChevronDown onClick={onDecrement} className='cursor-pointer text-xl' size={20}/>
                </div>

            </div>

        </div>
    )
}

export default TimerControlcard
