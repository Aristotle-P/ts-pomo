export default function Button({toggleTimer}: any) {
    return (
        <div className="flex items-center justify-center">
            <button className="text-xl" onClick={toggleTimer}>Start Timer</button>
        </div>
    )
}
