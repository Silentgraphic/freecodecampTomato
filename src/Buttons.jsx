/* eslint-disable react/prop-types */
function Buttons({
    timeData,
    setData
}) {
    const handleClick = (operator, sOrB) => {
        if (!timeData.isRunning) {
            setData((e) => {
                let newData = { ...e };
                if (sOrB === "Break") {
                    if (timeData.break < 60 && operator === "+") newData.break++;
                    else if (timeData.break > 1 && operator === "-") newData.break--;
                } else {
                    if (timeData.session < 60 && operator === "+") newData.session++;
                    else if (timeData.session > 1 && operator === "-") newData.session--;
                }
                return newData;
            });
        }
    };

    return (
        <div id="buttons">
            <span id="break-label">Break Length: </span>
            <button id="break-increment" className="arrowsButtons" onClick={() => handleClick("+", "Break")}>
                <svg className="arrows" viewBox="0 0 16 16" ><path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z" fill="#000000"></path></svg>
            </button>
            <span id="break-length">{timeData.break}</span>
            <button id="break-decrement" className="arrowsButtons" onClick={() => handleClick("-", "Break")}>
                <svg className="arrows" viewBox="0 0 16 16"><path d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z" /></svg>
            </button>
            <br />
            <span id="session-label">Session Length: </span>
            <button id="session-increment" className="arrowsButtons" onClick={() => handleClick("+", "Sesssion")}>
                <svg className="arrows" viewBox="0 0 16 16" ><path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z" fill="#000000"></path></svg>
            </button>
            <span id="session-length">{timeData.session}</span>
            <button id="session-decrement" className="arrowsButtons" onClick={() => handleClick("-", "Session")}>
                <svg className="arrows" viewBox="0 0 16 16"><path d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z" /></svg>
            </button>
        </div>
    );
}

export default Buttons;