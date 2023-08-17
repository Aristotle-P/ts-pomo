type TimerProps = {
    displayMins: string | number,
    displaySeconds: string | number
}

export default function Timer({displayMins, displaySeconds}: TimerProps) {
    return (
        <div>
            {displayMins}:{displaySeconds}
        </div>
    )
}
