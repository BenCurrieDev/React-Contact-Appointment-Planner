import React from "react";

export const Tile = (props) => {
  console.log(props.propObject);
  return (
    <div className="tile-container">
      {Object.values(props.propObject).map((value, i) => {
        if (i === 0) {
          return <p className='tile-title' key={i} >{value}</p>
        } else {
          return <p className='tile' key={i} >{value}</p>
        }
      })}
    </div>
  );
};
