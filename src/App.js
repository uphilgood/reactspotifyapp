import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#808080',
   
}


class Aggregate extends Component {
  render()  {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>Number Text</h2>
        </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
        </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: '25%'}}>
        <img />
        <h3> Playlist Names</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
          </ul>
        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="App-header" style={defaultStyle}>Title</h1>
     
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}

export default App;
