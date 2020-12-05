import React from 'react';
import Player from './Player';

function Position(props) {
  return (
    <div className="Position">
      <h3>{props.positionDisplay}</h3>
      <div className="card-container">
        <Player 
          img={props.img1} 
          name={props.name1} 
          average={props.average1} 
          homers={props.homers1}
          rbis={props.rbis1}
          link={props.link1}
          position={props.position}
          makeChoice={props.makeChoice}
        />
        <Player 
          img={props.img2} 
          name={props.name2} 
          average={props.average2} 
          homers={props.homers2}
          rbis={props.rbis2}
          link={props.link2}
          position={props.position}
          makeChoice={props.makeChoice}
        />
      </div>
    </div>
  );
}

export default Position;
