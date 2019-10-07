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
    return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/hikes')
    .then(res => res.json())
    .then(hikes => this.setState({hikes}))
    .catch(err => this.setState({error: err}))
  }

  displayHikes = () => {
    return this.state.hikes.map(hike => hike.name)
  }

  render() {
    return (
      <div className="App">
        {this.displayHikes()}
      </div>
    );
  }
}

export default App;
