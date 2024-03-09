import {useState , useEffect } from 'react'; //useEffect is used for side effects

export default function News(){
    const [news, setNews] = useState(null);

    useEffect(() => {
        fetch("https://api.worldnewsapi.com/search-news?text=tesla&language=en&api-key=dda8ff5fa0d349a2a1b75ce7e6611ffe")
        .then((data)=>data.json())
        .then((data) => setNews(data))
        .catch((error) => console.log(error))
    } , [])
    console.log(news);
    return(
        <div style={{color:"black"}}>

        {news ? <img width={"100%"} height={300} style={{borderRadius:"19px 19px 0px 0px"}} src={news.news[0].image}/> : <></>} 

        {news ? <p style={{bottom:"281px",padding:"20px",color:"white",position:"absolute",fontSize:"25px",backgroundColor:"rgba(0, 0, 0, 0.74)"}}>{news.news[0].title}</p> : <></>} 

        {news ? <p style={{height:"200px",borderRadius:"0 0 10px 10px",marginTop:"-4px",color:"black" ,backgroundColor:"white",padding:"30px",fontFamily: 'Roboto',fontWeight: 400,fontSize: '15.25px',lineHeight: '20.51px',textAlign: 'justify'}}>{news.news[0].text.slice(0,500)}...</p> : <></>}
        </div>
    )
}