/* eslint-disable react/prop-types */

function Controls({
    setRunning,
    setData
}) {
    return (
        <div>
            <button id="start_stop" onClick={() => setRunning((e) => !e)}>Start/Stop</button>
            <button id="reset" onClick={() => { setData({ session: 25, break: 5, isSorB: "Session" }); setRunning(false); }}>Reset</button>
        </div >
    );
}

export default Controls;