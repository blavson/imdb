import React from 'react'
import MovieCard from './MovieCard'
import Slider  from './Slider'

export default function Movies(props) {
  const  movies = props.movies.map( (movie, i) => {
  return (
    <div className="col s3">
      <MovieCard movie={movie} key={i} />
    </div>
  )
  })

  return(
    <div className="slider-wrapper">
      <h2 className="big-title">{props.title}</h2>
      <Slider elements={movies}/>
    </div>
  )
}

