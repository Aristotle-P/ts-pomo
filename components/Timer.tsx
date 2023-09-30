type TimerProps = {
    displayMins: string | number,
    displaySeconds: string | number
}

export default function Timer({displayMins, displaySeconds}: TimerProps) {
    return (
        <div className="flex items-center justify-center pb-40 rounded-full bg-gray-400 h-96 w-96">
            <div className="text-3xl">{displayMins}:{displaySeconds}</div>
        </div>
    )
}
