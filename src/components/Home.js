import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import MovieCard from './MovieCard'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      movieList : []
    }
  }

  componentDidMount() {
    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.APP_KEY}`;
    axios.get(nowPlayingUrl)
    .then(result => {
      this.setState({
        movieList :  result.data.results
      })
    })

  }
  render() {
    const imagePath="https://image.tmdb.org/t/p/w500/"
    const movies = this.state.movieList.slice(0,4).map((movie, index) => {
      return   ( <MovieCard 
                 key={index}
                 image = {`${imagePath}\\${movie.poster_path}`}
                 title = {movie.title}
                 avg = {movie.vote_average} 
                 desc ={ movie.overview}
                 popularity ={ movie.popularity }
                 release_date ={ movie.release_date}
                 movieId = {movie.id}
                  /> )
      })
      return (
        <div className="container">
          {movies}
        </div>)
  }
}
