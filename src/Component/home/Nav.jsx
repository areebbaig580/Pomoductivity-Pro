import React from 'react'
import { Settings, SquareCheck} from 'lucide-react'
import { ChartSpline } from 'lucide-react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-fit w-full flex justify-around my-3'>
      <div className='flex gap-1 font-bold text-xl text-logo items-center'><SquareCheck />Pomoductivity</div>
      <div className='flex gap-5'>

        <Link className='h-fit w-fit px-2 py-2 bg-secondary-white hover:bg-secondary-hover rounded-2xl flex gap-1 text-sm items-center font-semibold' to='/dashboard'><ChartSpline size={18} />
          <div className='hidden md:block'>Dashboard</div></Link>
        <Link className='h-fit w-fit px-2 py-2 bg-secondary-white hover:bg-secondary-hover rounded-2xl flex gap-1 text-sm items-center font-semibold' to='/setting'><Settings size={18} />
          <div className='hidden md:block'>Settings</div></Link>
      </div>
    </div>
  )
}

export default Nav
