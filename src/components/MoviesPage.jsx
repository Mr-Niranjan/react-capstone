import { useState } from 'react'; 
import "../styles/MoviesPage.css";
import Action from "../assets/Action.png.png";
import Drama from "../assets/Drama.png.png";
import Fantasy from "../assets/Fantasy.png.png";
import Fiction from "../assets/Fiction.png.png";
import Horror from "../assets/Horror.png.png";
import Music from "../assets/Music.png.png";
import Romance from "../assets/Romance.png.png";
import Thriller from "../assets/Thriller.png.png";
import Western from "../assets/Western.png.png";
import MovieBox from "../components/MovieBox";
import MovieChip from "./MovieChip";
import { useNavigate } from 'react-router-dom';


const genres = [
    {
      id: "Action",
      className:"Box B-1",
      color: "#FF5209",
      image: <img  src={Action} className="Poster ActionImage"/>,
    },
    {
      id: "Drama",
      className:"Box B-2",
      color: "#D7A4FF",
      image: <img  src={Drama} className="Poster DramaImage" />,
    },
    {
      id: "Fantasy",
      className:"Box B-3",
      color: " #FF4ADE",
      image: <img  src={Fantasy} className="Poster FantasyImage"/>,
    },
    {
      id: "Fiction",
      className:"Box B-4",
      color: "#6CD061",
      image: <img  src={Fiction} className="Poster FictionImage"/>,
    },
    {
      id: "Horror",
      className:"Box B-5",
      color: "#7358FF",
      image: <img  src={Horror} className="Poster HorrorImage"/>,
    },
    {
      id: "Music",
      className:"Box B-6",
      color: "#E61E32",
      image: <img  src={Music} className="Poster MusicImage"/>,
    },
    {
      id: "Romance",
      className:"Box B-7",
      color: "#11B800",
      image: <img  src={Romance} className="Poster RomanceImage"/>,
    },
    {
      id: "Thriller",
      className:"Box B-8",
      color: "#84C2FF",
      image: <img  src={Thriller} className="Poster ThrillerImage"/>,
    },
    {
      id: "Western",
      className:"Box B-9",
      color: "#912500",
      image: <img  src={Western} className="Poster WesternImage"/>,
    },
  ];


export default function MoviesPage() {

  const [selected , setSelected]=useState([]);
  const navigate = useNavigate();
  const handleClick = ()=>{
    if(selected.length<3){
      return;
    }
    else{
      localStorage.setItem("movies",JSON.stringify(selected))
      navigate("/display")
    }
  }
    return (
    <div className="moviesPage">
       
       <div className="textPortion">

             <div className="headingPart">
                <h2 style={{  fontFamily: "Single Day",fontSize: "41px",  fontWeight: 400,  lineHeight: "69px",  letterSpacing: "0em",textAlign: "left",margin:"3rem 0 2rem 5rem",color:"#72DB73"}}>Super app</h2>
                <p style={{  fontFamily: "Roboto",fontSize: "38px", fontWeight: 700,  lineHeight: "55px",  letterSpacing: "2px",textAlign: "left",margin:"0 0 2rem 5rem",color:"white"}}> Choose your entertainment  category</p>
             </div>
             <div className="resultPart">
                
                <div>
                    {selected.map((item)=>{
                      return (
                        <MovieChip
                        key={item}
                        data={item}
                        selected={selected}
                        setSelected = {setSelected}
                        />
                      )
                    })}
                </div>
                {selected.length < 3 ? <p style={{color:"red",margin:"1rem"}}>Minimum 3 categories required</p> : <></>}
             </div>
       </div>

       <div className="collectionPart">

              <div className="movies">

             {genres.map((genres)=>{
              return (
                <MovieBox 
                key={genres}
                data={genres}
                selected={selected}
                setSelected = {setSelected}
                />
              )
             })}

             
             </div> 

             <div className = "nextLink">
             {selected.length < 3 ? <p>Minimum 3 categories required</p> : <></>}
                <button onClick={handleClick} style={{ width: "118px",height: "25px",marginLeft: "27rem",borderRadius: "20px",backgroundColor: "#72DB73",fontSize: "0.8rem",color: "#FFFFFF",fontFamily: "Roboto",fontWeight: 600,lineHeight: "12px",letterSpacing: "0.02em",border: "none" }}>Next Page</button>
             </div>

       </div>
    
    </div>
    )
}
