import React from 'react';

function Card(props) {
  return (
    <div className="Card">
        <h3>{props.display}</h3>
        <h1>{props.name}</h1>
        <button onClick={() => {props.makeChoice(props.position, props.name1)}}>{props.name1}</button>
        <button onClick={() => {props.makeChoice(props.position, props.name2)}}>{props.name2}</button>
    </div>
  );
}

export default Card;
