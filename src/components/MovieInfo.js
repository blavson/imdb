import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'

export default class MovieInfo extends Component {
  constructor() {
    super()
    this.state = {
      movieInfo : {}
    }
  }

  componentDidMount() {
    const movie_id = this.props.match.params.movieId

    const movie = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${config.APP_KEY}`;
    axios.get(movie)
    .then(result => {
      this.setState({
        movieInfo : result.data
      })
    })    
  }

  render() {
  const {movieInfo} = this.state
  const imagePath="https://image.tmdb.org/t/p/w500/"
  let budget = movieInfo.budget / 1000000
  let runtime = { hours : parseInt(movieInfo.runtime /60), minutes : movieInfo.runtime %60} 
    return (
      <div>
        <h1>{movieInfo.original_title}</h1>
        <img src={`${imagePath}\\${movieInfo.poster_path}`} />
        <h3> Budget {budget} Mln</h3>
        <h3>Runtime - {`${runtime.hours} hour ${runtime.minutes} min`}</h3>
      </div>
    )
  }
}
