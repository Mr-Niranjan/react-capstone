import profile from "../assets/ProfilePic.png.png";
export default function UserInfo(){
const info = JSON.parse(localStorage.getItem("userInfo"));
const movies = JSON.parse(localStorage.getItem("movies"));

return (
<div style={{display:"flex"}}>
<img src={profile} alt="profile picture" style={{ margin:"6px", width: "79px",height: "170px",borderRadius: "2.42px",border: ".166px"}} />
<div className="UserPara" style={{display:"flex",flexDirection:"column",margin:"10px"}}>
<p style={{fontSize:"20px",fontFamily:"roboto",fontWeight:"400"}}>{info.name}</p>
<p style={{fontSize:"20px",fontFamily:"roboto",fontWeight:"400"}}>{info.email}</p>
<p style={{fontSize:"33px",fontFamily:"roboto",fontWeight:"500"}}>{info.username}</p>
<div className="UserMovies" style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
{movies.map((item)=>{
    return <div style={{backgroundColor:"#9F94FF",padding:"2px 25px 2px 10px",borderRadius:"10px",margin:"5px 25px 2px 3px",flexWrap:"wrap"}} key={item}>{item}</div>
})}
</div>
</div>
</div>
)
}