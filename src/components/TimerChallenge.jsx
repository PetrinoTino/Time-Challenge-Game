import { useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
  const [timerStarted,useTimerStarted]=useState(false);
  
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

       setTimerStarted(true);
  }
function handleStop(){
  
}
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p> You Lost!</p>}
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timerStarted ? 'Stop' : 'Start'}</button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
{    timerStarted ?     'Time is Running...' :   'Timer is not rrunging'}
        </p>
    </section>
  );
}
