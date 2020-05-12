import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {

  constructor () {
    super()
    this.state = {
      smovie : ''
    }
  }

  setMovieString(s) {
    this.setState({
      smovie : s
    })
  }

  render() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}
}

export default App;
