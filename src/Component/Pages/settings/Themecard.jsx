import React from 'react'

const Themecard = ({ name, from, to }) => {
    return (
        <div className='h-fit w-fit px-1 py-1 bg-white  mt-2.5 rounded-2xl'>
            
            <div className='h-[8vh] w-[18vw] lg:h-[12vh] lg:w-[10vw] cursor-pointer rounded-2xl'
                style={{
                   backgroundColor: from
                }}
                onClick={() => { document.documentElement.setAttribute('data-theme', name)
                    localStorage.setItem('theme', JSON.stringify(name));
                 }} />
        </div>
        


    )
}

export default Themecard
