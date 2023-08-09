"use client" 
import Timer from "./Timer"
import Button from "./Button"
import { useState } from "react"

export const Card = () => {
    const [work, setWork] = useState<number>(25)
    const [shortBreak, setShortBreak] = useState<number>(5)
    const [longBreak, setLongBreak] = useState<number>(20)

    function startTimer(time: number) {
        console.log("clicked");
        while (time < 0) {
            time -1;
            setTimeout(() => {
                setWork(time);
            }, 1000);
            console.log(time)
        }
    }
    return (
        <div>
            <Timer work={work} shortBreak={shortBreak} longBreak={longBreak} />
            <Button startTimer={startTimer} />
        </div>
    )
}
