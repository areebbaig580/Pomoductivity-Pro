import React from 'react'
import Themecard from './Themecard'

const ThemeCardsCtr = () => {
  return (
    <div className='h-fit w-full flex flex-wrap gap-3 pl-2'>
      <Themecard
        name=''
        bg='#8A75E6'
      />
      <Themecard
        name='aesthetic'
        bg='#202127'
      />
      <Themecard
        name='white'
        bg='#6C757D'
      />
      <Themecard
        name='red'
        bg='#ff8fa3'
      />


    </div>
  )
}

export default ThemeCardsCtr
