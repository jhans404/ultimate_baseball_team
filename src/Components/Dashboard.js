import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Your Current Team</h3>
      <div className="team">
        <p className="choice">First Base: {props.first}</p>
        <p className="choice">Second Base: {props.second}</p>
        <p className="choice">Third Base: {props.third}</p>
        <p className="choice">Shortstop: {props.short}</p>
        <p className="choice">Left Field: {props.left}</p>
        <p className="choice">Center Field: {props.center}</p>
        <p className="choice">Right Field: {props.right}</p>
        <p className="choice">Catcher: {props.catcher}</p>
        <p className="choice">Pitcher: {props.pitcher}</p>
      </div>
    </div>
  );
}

export default Dashboard;
