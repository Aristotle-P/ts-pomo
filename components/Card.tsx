"use client" 
import Timer from "./Timer"
import Button from "./Button"
import { useEffect, useState } from "react"

export const Card = () => {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    const [onBreak, setOnBreak] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    function toggleTimer() {
        setIsPaused(prevState => !prevState);
    }

    function startBreak() {
        setMinutes(5);
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
                        return;
                    }
                    setOnBreak(false);
                    setMinutes(2);
                    setSeconds(0)
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
            <Timer  displayMins={displayMins} displaySeconds={displaySeconds}/>
            <Button toggleTimer={toggleTimer} />
        </div>
    )
}

