import React from 'react'
import Head from '../Component/settings/Head'
import TimerControl from '../Component/settings/TimerControl'
import HeadingComp from '../Component/settings/HeadingComp'
import NotificationSet from '../Component/settings/NotificationSet'
import Themesett from '../Component/settings/Themesett'

const Settings = ({ notifyMode, setNotifyMode, notifyValue, setNotifyValue, setAlarm ,alarm }) => {
    return (
        <div className=' min-h-screen w-full flex flex-col items-center px-3 bg-bg'>
            <Head />
            <HeadingComp label={"Timer"} />
            <TimerControl />
            <HeadingComp label={"Themes"} />
            <Themesett />
            <HeadingComp label={"Notification"} />
            <NotificationSet
                notifyMode={notifyMode}
                setNotifyMode={setNotifyMode}
                notifyValue={notifyValue}
                setNotifyValue={setNotifyValue}
                setAlarm={setAlarm}
                alarm={alarm}
            />

        </div>
    )
}

export default Settings
