import React from 'react'
import {   Link } from "react-router-dom";


export default function MovieCard(props) {

  function trimDescription(desc) {
    return desc.substr(0, 50) + '...'
  }
  return (

      <div className="card">
        <div className="card-image">
          <Link to={`movie/${props.movieId}`}>
            <img src={props.image} />
          </Link>
         </div> 
          <div className="card-title">{props.title}</div>
        <div className="card-content">
          {props.release_date}
          {trimDescription(props.desc)}
        </div>
        </div>
            
            
  )
}
