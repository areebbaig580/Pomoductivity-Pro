import FocusChart from '@/Component/dashboard/FocusChart'
import Head from '@/Component/dashboard/Head'
import Heading from '@/Component/dashboard/Heading'
import InfoCardsCtr from '@/Component/dashboard/InfoCardsCtr'
import WeekFocus from '@/Component/dashboard/WeekFocus'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const[active , setActive] = useState('week');
 
  return (
    <div className=' h-full w-full flex items-center bg-bg px-2 flex-col pb-5'>
      <Head />
      <InfoCardsCtr />
      <Heading label={'Focus Chart'} setActive={setActive} active = {active}/>
      <FocusChart active = {active}/>
    </div>
  )
}

export default Dashboard
