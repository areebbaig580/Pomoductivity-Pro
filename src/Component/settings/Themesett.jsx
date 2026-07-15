import React from 'react'
import ThemeCardsCtr from './ThemeCardsCtr'
import { SwitchDemo } from './Switch'


const Themesett = () => {
    return (
        <div className='w-full md:w-5/10 h-fit mt-4'>
            <ThemeCardsCtr />
            {/* <div className='flex w-full px-2 justify-between mt-8'>
                <div className='text-sm md:text-[1rem]'>Dark mode when running</div>
                <div><SwitchDemo/></div>
            </div> */}
        </div>
    )
}

export default Themesett
