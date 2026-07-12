import { ChevronDown, ChevronUp } from 'lucide-react'

const TimerControlcard = ({label, value, onIncrement , onDecrement , onChange}) => {

    
    return (
        <div className='h-fit w-[28vw] md:w-[10vw] md:px-4 pb-2 bg-secondary-main rounded-2xl'>

            <div className='pl-2.5 py-2 text-sm md:text-lg font-semibold'>{label}</div>

            <div className='flex items-center mt-5'>

                <input type="number" className='input border-none outline-none px-2 text-xl md:text-2xl w-7/10' value={value} onChange={onChange} />
                <div className='flex flex-col justify-center '>
                    <ChevronUp onClick={onIncrement} className='cursor-pointer ' size={20}  /><ChevronDown onClick={onDecrement} className='cursor-pointer text-xl' size={20}/>
                </div>

            </div>

        </div>
    )
}

export default TimerControlcard
