
import UserInfo from "../components/UserInfo.jsx";
import Notes from "../components/Notes.jsx";
import Weather from "../components/Weather.jsx";
import News from "../components/News.jsx";
import Timer from "../components/Timer.jsx" ;
import { useNavigate} from "react-router-dom";


export default function Display() {
 const navigate = useNavigate();
 const handleClick = () => {
  navigate("/Browse")
 }
    return(
        <>
<div className="Whole" style={{width:"100vw",height:"100vh",backgroundColor:"black",display:"inline-flex",flexDirection:"row",color:"white",justifyContent:"center"}}>

<div className = "firstPart" style={{width:"61vw",height:"93vh",padding:"20px",gap: "20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start",alignContent:"center"}} >
<div className="userInfo" style={{width:"48%", borderRadius: "19px",height:"30vh",backgroundColor:"#5746EA"}}>
  <UserInfo/>
</div>

<div className="notes" style={{width:"45%",height:"55vh", borderRadius: "19px",backgroundColor:"#F1C75B",right:"0"}}> 
  <Notes/>
 </div>
 
<div style={{width:"48%",height:"20vh", borderRadius: "19px",backgroundColor:"#F1C75B",alignItems:"left",margin: "-141px 400px 0px 7px"}}>
  <Weather/>
</div>

<div style={{width:"97%",height:"33vh",borderRadius: "19px",backgroundColor:"#5746EA"}}>
  <Timer/>
</div>

</div>

<div style={{width:"35vw",height:"100vh",gap: "20px",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
<div style = {{width:"98vw",height:"90vh",gap: "30px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",margin:"10px" }}>
    <News/>

    </div>
<button onClick={handleClick} style={{position: "absolute",bottom: "0",right: "20px",padding: "5px",borderRadius: "16px",backgroundColor: "#148A08",width:"100px",color:"white",border:"none"}}>Browse</button>
</div>


</div>

</>
    ) 
}