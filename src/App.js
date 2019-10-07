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
    .then(res => res.json())
    .then(data => this.setState({hikes: data}))
    .catch(err => this.setState({error: err}))
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
