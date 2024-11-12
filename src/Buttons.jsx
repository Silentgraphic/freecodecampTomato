/* eslint-disable react/prop-types */
function Buttons({
    sesionLength,
    breakLength,
    setSession,
    setBreak,
    isRunning
}) {
    const handleBreakClick = (operator) => {
        if (!isRunning) {
            if (breakLength < 60 && operator === "+") setBreak((e) => e + 1);
            else if (breakLength > 1 && operator === "-") setBreak((e) => e - 1);
        }
    };

    const handleSessionClick = (operator) => {
        if (!isRunning) {
            if (sesionLength < 60 && operator === "+") setSession((e) => e + 1);
            else if (sesionLength > 1 && operator === "-") setSession((e) => e - 1);
        }
    };

    return (
        <div id="buttons">
            <span id="break-label">Break Length: </span>
            <button id="break-increment" className="arrowsButtons" onClick={() => handleBreakClick("+")}>
                <svg className="arrows" viewBox="0 0 16 16" ><path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z" fill="#000000"></path></svg>
            </button>
            <span id="break-length">{breakLength}</span>
            <button id="break-decrement" className="arrowsButtons" onClick={() => handleBreakClick("-")}>
                <svg className="arrows" viewBox="0 0 16 16"><path d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z" /></svg>
            </button>
            <br />
            <span id="session-label">Session Length: </span>
            <button id="session-increment" className="arrowsButtons" onClick={() => handleSessionClick("+")}>
                <svg className="arrows" viewBox="0 0 16 16" ><path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z" fill="#000000"></path></svg>
            </button>
            <span id="session-length">{sesionLength}</span>
            <button id="session-decrement" className="arrowsButtons" onClick={() => handleSessionClick("-")}>
                <svg className="arrows" viewBox="0 0 16 16"><path d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z" /></svg>
            </button>
        </div>
    );
}

export default Buttons;