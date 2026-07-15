import React from 'react'

const Themecard = ({ name, bg}) => {
    return (
        <div className='h-fit w-fit px-1 py-1 bg-white rounded-2xl'>
            
            <div className='h-[5vh] w-[10vw] lg:h-[8vh] lg:w-[4vw] cursor-pointer rounded-2xl'
                style={{
                   backgroundColor: bg
                }}
                onClick={() => { document.documentElement.setAttribute('data-theme', name)
                    localStorage.setItem('theme', JSON.stringify(name));
                 }} />
        </div>
        


    )
}

export default Themecard
