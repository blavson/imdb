import React, { Component } from 'react'

import MovieCard from './MovieCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class SearchPage extends Component {


  render() {
      console.log("props", this.props)
       const  {searchedMovies} = this.props
      if (!Array.isArray(searchedMovies.results)) {
        return (
        <div>
        </div>    )
       } else {

      const  page = searchedMovies.page
      console.log("searchedMovies = ", searchedMovies)
      const  theresults = searchedMovies.results
      const  totalPages = searchedMovies.total_pages
      const  totalResults = searchedMovies.total_results
      const  mp= theresults.map((item) => {
      return ( 
        <MovieCard  key={item.id}
          movieId={item.id} 
          image={item.poster_path} 
          title={item.original_title} 
          release_date ={item.release_date} 
          desc= {item.overview}
        /> 
          )
      })
      return (<div className="container">
        {mp}
      </div>)
     }
   }
  }
  
function mapStateToProps(state) {
  console.log("stsate = ", state)
  return {
    searchedMovies : state.searchedMovies
  }
}



export default connect(mapStateToProps)(SearchPage)
