"use client" 
import Timer from "./Timer"
import Button from "./Button"
import { useEffect, useState } from "react"

export const Card = () => {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    function toggleTimer() {
        setIsPaused(prevState => !prevState);
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
                    setIsPaused(prevState => !prevState);
                    return;
                }
            } 
            setSeconds(prevState => prevState -1);
        }, 1000)

        return () => clearInterval(interval);
    }, [seconds, isPaused])

    const displayMins = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            <div>
                {displayMins}:{displaySeconds}
            </div>
            <Button toggleTimer={toggleTimer} />
        </div>
    )
}

