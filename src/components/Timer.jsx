import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import up from "../assets/Up.png";
import down from "../assets/down.png";
import column from "../assets/column.png";
export default function Timer(){
    const [seconds , setSeconds] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [hours , setHours] = useState(0);

return(
<div>
    <div width={"30%"} style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>
    <div>
    <CountdownCircleTimer
    isPlaying
    duration={seconds}
    colors={['#004777']}

  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
    </div>

    <div  style={{display:"flex",flexWrap:"wrap",flexDirection:"row",alignContent:"center",gap:"60px",marginLeft:"60px"}}>
        
        <div className="Hours" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"}}>
            <p>Hours</p>
            <img src={up} style={{height:"25px",width:"35px"}} onClick={()=>setHours((prev)=>prev + 1)}/>
            <p>{hours}</p>
            <img src={down} style={{height:"25px",width:"35px"}} onClick={()=>{
                if(hours > 0 ){
                    setHours((prev)=>prev-1)
                }
            }}/>
        </div>

         <img src={column} style={{height:"30px",marginTop:"63px"}} alt="column image"/>

        <div className="Minutes" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"}}>
            <p>Minutes</p>
            <img src={up} style={{height:"25px",width:"35px"}} onClick={()=>setMinutes((prev)=>prev + 1)}/>
            <p>{minutes}</p>
            <img src={down} style={{height:"25px",width:"35px"}} onClick={()=>{
                if(seconds > 0  ){
                    setMinutes((prev)=>prev-1)
                }
            }}/>
        </div>

        <img src={column} style={{height:"30px",marginTop:"63px"}} alt="column image"/>

        <div className="Seconds" style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"}}>
            <p>Second</p>
            <img src={up}  style={{height:"25px",width:"35px"}} onClick={()=>setSeconds((prev)=>prev + 1)}/>
            <p>{seconds}</p>
            <img src={down} style={{height:"25px",width:"35px"}} onClick={()=>{
                if(seconds > 0 ){
                    setSeconds((prev)=>prev-1)
                }
            }}/>
        </div>

    </div>
    </div>
    <button>Start</button>
</div>
)
}