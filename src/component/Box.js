import React from 'react';

const Box = (props) => {
  let result;
  if (props.title === "Computer" && props.result !== "tie" && props !== "") {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  const boxClass = `box ${result}`;

  return ( 
    <div className={boxClass}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} alt={props.item && props.item.name} />
      <h2>{result}</h2>
    </div>
  ); 
}

export default Box;
