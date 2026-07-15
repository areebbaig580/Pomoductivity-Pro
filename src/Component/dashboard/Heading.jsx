import React from 'react'

const Heading = ({label, setActive , active}) => {
    return (
        <div className='h-fit w-full md:w-5/10 mt-2 py-2 flex justify-between'>
            <div className='h-fit w-fit text-text bg-secondary-main px-4 py-2 text-md md:text-lg rounded-xl flex gap-2'>{label}</div>
            <div className='h-fit w-fit text-text bg-secondary-main px-2 py-2 text-sm md:text-md rounded-xl flex gap-2'>
                <select name="" id="" value={active} className='bg-secondary-main border-none outline-none cursor-pointer' 
                onChange={(e) =>{
                    setActive(e.target.value);
                }}>
                    <option value="week" >Week</option>
                    <option value="month" >Month</option>
                </select>
            </div>
        </div>
    )
}

export default Heading
