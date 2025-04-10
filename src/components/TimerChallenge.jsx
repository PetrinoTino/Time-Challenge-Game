export default function TimeChallenge({title,targetTime}){

 return <section className="challenge">
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
 </section>   
}