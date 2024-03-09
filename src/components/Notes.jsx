import { useState } from "react";
export default function Notes(){

    const [notes , setNotes] = useState(localStorage.getItem("notes") ?? "" );
    
        const handleChange = (e) =>{
            setNotes(e.target.value);
            localStorage.setItem("notes",e.target.value);
        };

        return (
    <div >
    <h2 style={{color:"black",display:"flex",padding:"10px"}}>All notes</h2>
    <textarea onChange={handleChange} value={notes} style={{width:"94.5%",height:"47vh",padding:"10px", borderRadius: "13px",backgroundColor:"#F1C75B",border:"none",fontFamily:"Roboto",fontWeight:"400",fontSize:"1rem"}}> </textarea>
    </div>
    )
}