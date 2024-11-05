import { useState } from "react";
import Buttons from "./Buttons";
import Timer from "./Timer";

function App() {
  const [sesionLength, setSession] = useState(25);
  const [breakLength, setBreak] = useState(5);
  const [isRunning, setRunning] = useState(false);
  const [sOrB, setSOrB] = useState("Session");

  return (
    <div id="clock">
      <button onClick={() => setRunning(!isRunning)}>Test</button>
      <br />

      <Buttons
        sesionLength={sesionLength}
        setSession={setSession}
        breakLength={breakLength}
        setBreak={setBreak}
        isRunning={isRunning}
      />

      <Timer
        sesionLength={sesionLength}
        breakLength={breakLength}
        sOrB={sOrB}
        setSOrB={setSOrB}
        isRunning={isRunning}
      />
    </div>
  );
}

export default App;
