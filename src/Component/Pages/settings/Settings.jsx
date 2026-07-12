import { ChevronDown, ChevronUp, Heading } from 'lucide-react'
import React from 'react'
import Head from './Head'
import TimerControl from './TimerControl'
import HeadingComp from './HeadingComp'
import Themecard from './Themecard'
import ThemeCardsCtr from './ThemeCardsCtr'
import NotificationSet from './NotificationSet'

const Settings = ({ notifyMode, setNotifyMode, notifyValue, setNotifyValue }) => {
    return (
        <div className=' h-screen w-screen flex flex-col items-center px-3'>
            <Head />
            <HeadingComp label={"Timer"} />
            <TimerControl />
            <HeadingComp label={"Themes"} />
            <ThemeCardsCtr />
            <HeadingComp label={"Notification"} />
            <NotificationSet
                notifyMode={notifyMode}
                setNotifyMode={setNotifyMode}
                notifyValue={notifyValue}
                setNotifyValue={setNotifyValue} />
        </div>
    )
}

export default Settings
