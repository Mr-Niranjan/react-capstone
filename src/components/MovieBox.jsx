/* eslint-disable react/prop-types */
export default function MovieBox({ data, selected, setSelected }) {
    const isSelected = selected.includes(data.id);
    const handleClick = () => {
      if (selected.includes(data.id)) {
        setSelected((prev) => prev.filter((item) => item !== data.id));
      } else {
        setSelected((prev) => {
          return [...prev, data.id];
        });
      }
    };
    return (
      <div
        onClick={handleClick}
        style={{borderRadius:"10px",
          background: data.color,
          padding:"5px",
        //   textAlign: "center",
        //   width: "20vw",
          border: isSelected ? "4px solid green" : "",
        }}
      >
        <h3>{data.id}</h3>
        {data.image}
      </div>
    );
  }