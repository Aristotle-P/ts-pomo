export default function Button({toggleTimer}: any) {
    return (
        <div className="flex items-center justify-center">
            <button onClick={toggleTimer}>Start Timer</button>
        </div>
    )
}
