import React from 'react'

const HeadingComp = ({ label }) => {
  return (
    <div className='h-fit w-full md:w-5/10 mt-2 py-2 flex justify-between'>
      <div className='h-fit w-fit text-text bg-secondary-main px-4 py-2 text-md md:text-lg rounded-xl flex gap-2'>{label}</div>
    </div>
  )
}

export default HeadingComp
