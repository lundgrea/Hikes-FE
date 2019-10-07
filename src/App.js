import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hikes: [],
      error: ''
    }
  }
  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/hikes')
    .then(res => console.log(res))
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
