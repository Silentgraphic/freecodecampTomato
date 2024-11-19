import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Timer({
    isRunning,
    timeData,
    setData,
    endSound
}) {
    const timer = useRef();
    let [time, setTime] = useState([timeData.session, 0]);

    //Start timer if isRunning changes
    useEffect(() => {
        if (isRunning) {
            timer.current = setInterval(() => {
                setTime(([min, sec]) => sec > 0 ? [min, sec - 1] : [min - 1, 59]);
            }, 1000);
        } else {
            clearInterval(timer.current);
        }
    }, [isRunning]);


    useEffect(() => {
        //If time reaches zero swap to Session to break
        if (time[0] < 0 && time[1] === 59) {
            endSound.current.play();
            setData({ ...timeData, isSorB: timeData.isSorB === "Session" ? "Break" : "Session" });
        }
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
        <div id="timer">
            <span id="timer-label">{timeData.isSorB}</span>
            <br />
            <span id="time-left">{convertToString()}</span>
            <audio id="beep" ref={endSound} src="/end.mp3"></audio>
        </div>
    );
}

export default Timer;