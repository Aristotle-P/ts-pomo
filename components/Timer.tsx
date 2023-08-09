type TimerProps = {
    work: number,
    shortBreak: number,
    longBreak: number
}
export default function Timer({work, shortBreak, longBreak}: TimerProps) {
    return (
        <div>
            {work}
        </div>
    )
}
