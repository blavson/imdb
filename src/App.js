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
import Login from './components/Login';


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
  }

  render() {
  return ( <div>
    <Router>
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={Home} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/movie/:movieId" component={MovieInfo} />
      <Route exact path="/login" component={Login} />
    
     </Router>  
  </div>
  )
}
}

export default App;
