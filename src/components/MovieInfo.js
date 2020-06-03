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
  console.log(this.state)
  const imagePath="https://image.tmdb.org/t/p/w500/"
  let budget = movieInfo.budget / 1000000
  let runtime = { hours : parseInt(movieInfo.runtime /60), minutes : movieInfo.runtime %60}
  let genres = []
  if( movieInfo.genres) {
     genres = movieInfo.genres.map(item => item.name)
    console.log(genres)
  }
  let companies ;
  if (movieInfo.production_companies) {
    companies = movieInfo.production_companies.map(item => {
          return (<li className="production-company"><span className="production-company-name">{item.name}</span>
                    <div className="production-company-logo">
                      <img src={`${imagePath}${item.logo_path}`} /> 
                    </div>
                   </li> )
    })
    console.log(companies)
  }
  return (
      <div className="container">
        <div className="row">
          <div className="col s5">
           
            <img className="poster" src={`${imagePath}\\${movieInfo.poster_path}`} />
        </div>
        <div className="col s7">
        <span className="movie-title">{movieInfo.title} </span>
        <span className="original-movie-title">{movieInfo.original_title} </span>
          <ul className="movie-description">
          <li className="movie-list"> Budget :  {budget ===0 ? 'Unknown' : budget + 'm' } </li>
          <li className="movie-list">Runtime : {`${runtime.hours} hour ${runtime.minutes} min`} </li>
          <li className="movie-list">Release date : {movieInfo.release_date}</li>
          <li className="movie-list"><p>{movieInfo.overview}</p></li>
          <li className="movie-list">Genres : {genres.join(',')}</li>
          <ul>
            {companies}
          </ul>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}
