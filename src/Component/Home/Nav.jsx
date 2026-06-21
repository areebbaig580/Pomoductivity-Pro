import React from 'react'
import { SquareCheck } from 'lucide-react'
import { ChartSpline } from 'lucide-react'

const Nav = () => {
  return (
    <div className='h-fit w-full flex justify-around my-5'>
        <div className='flex gap-1 font-bold text-xl items-center'><SquareCheck />Pomoductivity</div>
        <div className='flex gap-1 text-lg items-center font-semibold'><ChartSpline />Dashboard</div>
      </div>
  )
}

export default Nav
