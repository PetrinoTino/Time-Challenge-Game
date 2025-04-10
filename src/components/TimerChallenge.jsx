import { useState } from "react";

export default function TimeChallenge({title,targetTime}){
const [timerExpired,setTimerExpired]=useState(false);


function handleStart(){
  setTimeout(() => {

    setTimerExpired(true);
  },targetTime * 1000);
}




 return (
 
 <section className="challenge">
<h2>{title}</h2>
<p className="challenge-time">
  {targetTime} Second{targetTime > 1 ? 's' : ''}  
</p>
<p>
    <button>
       Start Challange  
    </button>
</p>
<p className="">
Time is Running... / Timer is not rrunging
</p>
 </section>  ) 
}