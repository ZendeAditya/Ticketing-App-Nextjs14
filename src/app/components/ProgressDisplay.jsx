
const ProgressDisplay = ({ progress }) => {
    return (
        <>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </>
    )
}

export default ProgressDisplay;