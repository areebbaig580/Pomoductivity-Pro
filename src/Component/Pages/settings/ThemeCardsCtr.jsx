import React from 'react'
import Themecard from './Themecard'

const ThemeCardsCtr = () => {
  return (
    <div className='h-fit w-full md:w-5/10 flex flex-wrap gap-3 pl-2'>
      <Themecard 
      name = ''
      from = '#8A75E6'
      to = '#1e1e1f'

      />
      <Themecard 
      name = 'ocean'
      from = '#022954'
      to = '#505a74'

      />
      <Themecard 
      name = 'aesthetic'
      from = '#202127'
      to = '#f7f7f8'

      />

      <Themecard
      name = 'pink'
      from = '#eea1cd'
      to = '#fde4f2'
      />
    
    </div>
  )
}

export default ThemeCardsCtr
