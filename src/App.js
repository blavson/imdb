import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios'
import config from './config'
import Home from './components/Home';
import Footer from './components/Footer';
import MovieInfo from './components/MovieInfo'
import SearchPage from './components/SearchPage'
import NowPlaying from './components/NowPlaying';

class App extends Component {

  constructor () {
    super()
    this.state = {
      search_phrase : '',
      results : ''
    }
  }


  setMovieString = (s)=> {
    this.setState({
      search_phrase : s
    })
     this.props.history.push(`/search/${s}`)
  }

  render() {
  return ( <div>
    <NavBar />
    <SearchPage />
  </div>
  )
}
}

export default App;
