/* eslint-disable react/prop-types */
export default function MovieChip({data,setSelected}) {
    const handleClick = () =>{
        setSelected((prev)=>prev.filter((item)=>item !== data));
    };
    return (
        <div className="movieChip">
            {data}&nbsp;&nbsp;<span onClick={handleClick} style={{cursor:"pointer"}}>x</span>
        </div>
    )
}