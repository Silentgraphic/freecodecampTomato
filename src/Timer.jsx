import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Timer({
    isRunning,
    timeData,
    setData
}) {
    const timer = useRef();
    let [time, setTime] = useState([timeData.session, 0]);

    useEffect(() => {
        if (isRunning) {
            timer.current = setInterval(() => {
                setTime(([min, sec]) => sec === 0 ? [min - 1, 59] : [min, sec - 1]);
            }, 1000);
        } else {
            clearInterval(timer.current);
        }
    }, [isRunning]);


    useEffect(() => {
        //If time reaches zero swap to Session to break
        if (time[0] === 0 && time[1] === 0) setData((e) => { return { ...e, isSorB: e.isSorB === "Session" ? "Break" : "Session" }; });
    }, [time]);

    useEffect(() => {
        //Check if session or break and set time appropriately 
        setTime(timeData.isSorB === "Session" ? [timeData.session, 0] : [timeData.break, 0]);
    }, [timeData]);


    const convertToString = () => {

        let minsString = time[0].toString();
        let secsString = time[1].toString();

        if (minsString.length === 1) minsString = "0" + minsString;
        if (secsString.length === 1) secsString = "0" + secsString;

        return `${minsString}:${secsString}`;
    };

    return (
        <div id="time-left">
            <span id="timer-label">{timeData.isSorB}</span>
            <br />
            <span id="time-left">{convertToString()}</span>
        </div>
    );
}

export default Timer;