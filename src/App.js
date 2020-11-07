import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Player from './Components/Player';
import Card from './Components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "first": "Please select a player",
      "second": "Please select a player",
      "third": "Please select an player",
      "short": "Please select a player",
      "left": "Please select a player",
      "center": "Please select a player",
      "right": "Please select a player",
      "catcher": "Please select a player",
      "pitcher": "Please select a player"
    };
  }

  makeChoice = (position, name) => {
    this.setState(state => {
      state[position] = name
      return state
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard  
          first={this.state.first} 
          second={this.state.second} 
          third={this.state.third}
          short={this.state.short}
          left={this.state.left}
          center={this.state.center}
          right={this.state.right}
          catcher={this.state.catcher}
          pitcher={this.state.pitcher}
        />
        <div className="card-container">
          <Card display="First Base" position="first" name1="Pete Alonso" name2="Luke Voit" makeChoice={this.makeChoice} />
          <Card display="Second Base" position="second" name1="Robinson Cano" name2="DJ LeMahieu" makeChoice={this.makeChoice} />
          <Card display="Third Base" position="third" name1="Jeff McNeil" name2="Gleyber Torres" makeChoice={this.makeChoice} />
          <Card display="Shortstop" position="short" name1="Ahmed Rosario" name2="Gio Urshela" makeChoice={this.makeChoice} />
          <Card display="Left Field" position="left" name1="J.D. Davis" name2="Brett Gardner" makeChoice={this.makeChoice} />
          <Card display="Center Field" position="center" name1="Brandon Nimmo" name2="Aaron Hicks" makeChoice={this.makeChoice} />
          <Card display="Right Field" position="right" name1="Michael Conforto" name2="Aaron Judge" makeChoice={this.makeChoice} />
          <Card display="Catcher" position="catcher" name1="Wilson Ramos" name2="Gary Sanchez" makeChoice={this.makeChoice} />
          <Card display="Pitcher" position="pitcher" name1="Jacob deGrom" name2="Gerrit Cole" makeChoice={this.makeChoice} />
        </div>
      </div>
    );
  }
}

export default App;
