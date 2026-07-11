import React from 'react'

const HeadingComp = ({label}) => {
  return (
    <div className='h-fit w-full md:w-5/10  py-3 px-2 font-bold text-lg md:text-lg rounded-lg mt-2 text-heading1 border-b-1 border-b-secondary '>{label}</div>
  )
}

export default HeadingComp
