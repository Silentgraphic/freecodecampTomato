import { useRef, useState } from "react";
import Buttons from "./Buttons";
import Timer from "./Timer";
import Controls from "./Controls";

function App() {
  const [isRunning, setRunning] = useState(false);
  const [timeData, setData] = useState({ session: 25, break: 5, isSorB: "Session" });
  const endSound = useRef("EndSound");

  return (
    <div id="clock">
      <Buttons
        isRunning={isRunning}
        timeData={timeData}
        setData={setData}
      />

      <Timer
        isRunning={isRunning}
        timeData={timeData}
        setData={setData}
        endSound={endSound}
      />

      <Controls
        setRunning={setRunning}
        setData={setData}
        endSound={endSound}
      />
    </div>
  );
}

export default App;
