import React from 'react'

const NotificationSet = () => {
    return (
        <div className='h-fit w-full md:w-5/10 '>
            <div className='px-2 flex justify-between mt-4'>
                <div>Reminder</div>
                <div>

                    <select name="" id="" className='mr-2 py-1 px-1 bg-text text-secondary rounded-sm'>
                        <option value="">Every</option>
                        <option value="">Last</option>
                    </select>
                    <input type="number" className='w-15 pl-2 py-1 bg-text text-secondary rounded-sm' />
                </div>
            </div>
            <div className='pl-2 flex justify-between mt-8 '>
                <div >Alarm Sound</div>


                <select name="" id="" className='mr-2 py-1 px-2 bg-text text-secondary rounded-sm w-[100px]'>
                    <option value="">Every</option>
                    <option value="">Last</option>
                </select>


            </div>

        </div>
    )
}

export default NotificationSet
