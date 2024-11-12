import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Timer({
    sesionLength,
    breakLength,
    sOrB,
    setSOrB,
    isRunning
}) {
    const timer = useRef();
    let [time, setTime] = useState([sesionLength, 0]);

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
        if (time[0] === 0 && time[1] === 0) setSOrB(sOrB === "Session" ? "Break" : "Session");
    }, [time]);

    useEffect(() => {
        //Check if session or break and set time appropriately 
        setTime(sOrB === "Session" ? [sesionLength, 0] : [breakLength, 0]);
    }, [sOrB, isRunning]);


    const convertToString = () => {
        let minsString = time[0].toString();
        let secsString = time[1].toString();

        if (minsString.length === 1) minsString = "0" + minsString;
        if (secsString.length === 1) secsString = "0" + secsString;

        return `${minsString}:${secsString}`;
    };

    return (
        <div id="time-left">
            <span>{sOrB}</span>
            <br />
            <span>{convertToString()}</span>
        </div>
    );
}

export default Timer;