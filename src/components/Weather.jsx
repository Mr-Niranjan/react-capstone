import { useEffect , useState } from "react" ;
import Cloud from "../assets/Weather.png";
import temperature from "../assets/Temperature.png";
import wind from "../assets/Wind.png";
import water from "../assets/Water.png";


export default function Weather(){
    const [weather , setWeather] = useState(null);

    useEffect(() => {
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=XpkrdIvu67TAUSaNlRiydomdBWnIFxLO')
        .then((data) => data.json())
        .then((data) => setWeather(data))
        .catch((error) => console.log(error))
    }, []);

    console.log(weather);
    

    return(
        <div style={{color:"white",display:"inline-flex",flexDirection:"column",alignContent:"flex-end",alignItems:"center",justifyContent:"center",flexWrap:"wrap",width:"100%"}}>

        {/* The below P tag is for the Current Time Details */}

        <p style={{textAlign:"center",width:"100%",backgroundColor:"#FF4ADE",height:"30px",fontSize:"24px",borderRadius:"19px 19px 0px 0px"}}>{weather ? weather.timelines.daily[0].time : "Loading..."}</p>   

        <div className="wholeWeather" style={{display:"inline-flex",width:"100%",height:"92%",backgroundColor:"#101744",color:"white",borderRadius:"0px  0px  19px 19px"}}>

            <div className="1st" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",padding:"15px"}}> 
            {/* the above p tag is for the Type of Weather */}
        <img src={Cloud} alt="weather image" style={{width:"45px",height:"45px"}}/>    
        <p style={{fontSize:"22px"}}>{weather ? weather.timelines.daily[0].values.temperatureAvg > 20 ? "sunny" : "winter" : "Loading..."}</p>
            </div>

            <div className="2nd" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",padding:"15px",gap:"10px"}}>
            {/* the above p tag is for the Current Temperature and Air Pressure*/}
        <p style={{fontSize:"31px"}}>{weather ?  weather.timelines.daily[0].values.temperatureAvg + "°C" : "Loading..."}</p>
        <img src={temperature} alt="weather image" style={{width:"13px",height:"25px",position:"absolute",left:"142px",bottom:"258px"}}/>
        <p style={{textAlign:"center"}}>{weather ?  weather.timelines.daily[0].values.pressureSurfaceLevelAvg + " mbar\npressure": "Loading..."}</p>
           </div>

            {/* The below tag is used for The Wind Speed and Humidity */}
            <div className="3rd" style={{display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column",padding:"15px",gap:"15px"}}>
        <img src={wind} alt="weather image" style={{width:"25px",height:"20px",position:"absolute",left:"291px"}}/>
        <p style={{textAlign:"right"}}>{weather ? weather.timelines.daily[0].values.windSpeedAvg + " km/h Wind" : "Loading..."}</p> 
        <img src={water} alt="weather image" style={{width:"13px",height:"17px",position:"absolute",left:"295px",bottom:"262px"}}/>
        <p style={{textAlign:"right"}}>{weather ? weather.timelines.daily[0].values.humidityAvg+" Humidity" : "Loading..."}</p>
            </div>
        </div>
        </div> 
    );
}


