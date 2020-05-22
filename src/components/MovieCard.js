import React from 'react'
import {   Link } from "react-router-dom";
import { connect} from 'react-redux'


 function MovieCard(props) {

  function trimDescription(desc) {
    return desc.substr(0, 50) + '...'
  }

  const imagePath="https://image.tmdb.org/t/p/w500/"
  return (

      <div className="card">
        <div className="card-image">
          <a href={`movie/${props.movieId}`}>
            <img src={`${imagePath}${props.image}`} />
          </a>
         </div> 
          <div className="card-title">{props.title}</div>
        <div className="card-content">
          {props.release_date}
          {trimDescription(props.desc)}
        </div>
        </div>
  )
}

export default connect()(MovieCard)