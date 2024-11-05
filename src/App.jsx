import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [sesionLength, setSession] = useState(25);
  const [breakLength, setBreak] = useState(5);

  return (
    <div id="clock">
      <Buttons
        sesionLength={sesionLength}
        setSession={setSession}
        breakLength={breakLength}
        setBreak={setBreak}
      />
    </div>
  );
}

export default App;
