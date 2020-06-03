import React from 'react'


 function MovieCard(props) {

  function trimDescription(desc) {
    return desc.substr(0, 50) + '...'
  }

  const imagePath="https://image.tmdb.org/t/p/w500/"
  return (

      <div className="card">
        <div className="card-image">
          <a href={`movie/${props.movie.id}`}>
            <img src={`${imagePath}${props.movie.poster_path}`} alt="text"/>
          </a>
         </div> 
          <div className="card-title">{props.movie.title}</div>
        <div className="card-content">
          {props.movie.release_date}
          {trimDescription(props.movie.overview)}
        </div>
      </div>
  )
}

export default MovieCard