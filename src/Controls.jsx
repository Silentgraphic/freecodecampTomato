/* eslint-disable react/prop-types */

function Controls({
    setRunning,
    setData,
    endSound
}) {
    return (
        <div>
            <button id="start_stop" onClick={() => setRunning((e) => !e)}>Start/Stop</button>
            <button id="reset" onClick={() => { setData({ session: 25, break: 5, isSorB: "Session" }); setRunning(false); endSound.current.load(); }}>Reset</button>
        </div >
    );
}

export default Controls;