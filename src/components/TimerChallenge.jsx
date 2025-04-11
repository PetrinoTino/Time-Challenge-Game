import { useState,useRef } from "react";
import ResultModal from "./ResultModal.jsx";


// let timer;

export default function TimeChallenge({ title, targetTime }) {
  const timer=useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
    
      <ResultModal  ref={dialog} targetTime={targetTime} result="lost" />
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p> You Lost!</p>}
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is Running..." : "Timer is not rrunging"}
      </p>
    </section>
    </>
  );
}
