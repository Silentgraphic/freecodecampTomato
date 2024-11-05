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
    const [seconds, setSeconds] = useState(0);

    const convertToString = () => {
        let minsString = "";
        let secsString = seconds.toString();

        if (sOrB === "Session") minsString = sesionLength.toString();
        else if (sOrB === "Break") minsString = breakLength.toString();

        if (minsString.length === 1) minsString = "0" + minsString;
        if (secsString.length === 1) secsString = "0" + secsString;

        return `${minsString}:${secsString}`;
    };

    useEffect(() => {
        if (isRunning) {
            timer.current = setInterval(() => {
                setSeconds((e) => {
                    if (e === 0) {
                        return 59;
                    }
                    else return e - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer.current);
        }
    }, [isRunning]);

    return (
        <div id="time-left">
            <span>{sOrB}</span>
            <br />
            <span>{convertToString()}</span>
        </div>
    );
}

export default Timer;