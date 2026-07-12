import React from 'react'

const NotificationSet = ({ notifyMode, setNotifyMode, notifyValue, setNotifyValue }) => {
    return (
        <div className='h-fit w-full md:w-5/10 mb-10'>
            <div className='px-2 flex justify-between mt-4'>
                <div>Reminder</div>
                <div>

                    <select value={notifyMode} onChange={(e) => setNotifyMode(e.target.value)} className='mr-2 py-1 px-1 bg-text text-secondary-main rounded-sm'>
                        <option value="every">Every</option>
                        <option value="last">Last</option>
                    </select>
                    <input type="number"
                        value={notifyValue} onChange={(e) => {
                            const val = Number(e.target.value);
                            if (!isNaN(val)) setNotifyValue(val);
                        }}
                        min={1}
                        className='w-15 pl-2 py-1 bg-text text-secondary-main rounded-sm'
                    />
                </div>
            </div>
            <div className='pl-2 flex justify-between mt-8 '>
                <div >Alarm Sound</div>


                <select name="" id="" className='mr-2 py-1 px-2 bg-text text-secondary-main rounded-sm w-[100px]'>
                    <option value="">Birds</option>
                    <option value="">Kitchen</option>
                    <option value="">Sono</option>
                </select>


            </div>

        </div>
    )
}

export default NotificationSet
