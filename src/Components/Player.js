import React from 'react';

function Player(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Average: {props.average}</p>
          <p className="card-text">Homeruns: {props.homers}</p>
          <p className="card-text">RBIs: {props.rbis}</p>
          <a href={props.link} class="btn btn-primary">See More Stats</a>
          <button onClick={() => {props.makeChoice(props.position, props.name)}}>Choose Me!</button>
      </div>
    </div>
  );
}

export default Player;
