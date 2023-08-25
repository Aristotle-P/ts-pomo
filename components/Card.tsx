"use client" 
import Timer from "./Timer"
import Button from "./Button"
import { useEffect, useState } from "react"
import Settings from "./Settings"

export const Card = () => {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    const [onBreak, setOnBreak] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [showSettings, setShowSettings] = useState(false);

    function toggleTimer() {
        Notification.requestPermission();
        setIsPaused(prevState => !prevState);
    }

    function toggleSettings() {
        setShowSettings(prevState => !prevState);
    }

    function createNotification(arg: string) {
        if (!("Notification" in window)) {
            return;
        }
        console.log("notif");
        const notif = new Notification(`Your ${arg} has finished!`);
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (isPaused) {
                return;
            }
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(prevState => prevState -1);
                    return;
                } else {
                    if (!onBreak) {
                        setOnBreak(true);
                        setMinutes(5);
                        setSeconds(0)
                        setIsPaused(true);
                        createNotification("break");
                        return;
                    }
                    setOnBreak(false);
                    setMinutes(2);
                    setSeconds(0)
                    setIsPaused(true);
                    createNotification("work");
                    return;
                }
            } 
            setSeconds(prevState => prevState -1);
        }, 50)

        return () => clearInterval(interval);
    }, [seconds, isPaused])

    const displayMins = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            {showSettings ? <Settings /> : <Timer  displayMins={displayMins} displaySeconds={displaySeconds}/>}
            <Button toggleTimer={toggleTimer} />
            <button onClick={toggleSettings}>Show Settings</button>
        </div>
    )
}

