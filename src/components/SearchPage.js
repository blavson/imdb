import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import searchListUpdate from '../actions/searchListUpdate'
import Pagination_Search from './Pagination_Search'


class SearchPage extends Component {

  componentDidMount() {
    console.log("ComponentDidmount :" , this.props.search_string_object)
    this.props.updateSearchedMovies(this.props.search_string_object.search_string, 1)
  }

  render() {
      console.log("movies = ", this.props)
      let movies = this.props.searchedMovies.result
      if (!movies) {
        return (<h1>Loading...</h1>)
      }
      const  page = movies.page
      console.log("movies = ", movies)
      const  results = movies.results
      const  total_pages = movies.total_pages
      const  total_results = movies.total_results
      const  mp= results.map((item) => {
      return ( 
        <MovieCard  key={item.id}
          movieId={item.id} 
          image={item.poster_path === null ? '' : item.poster_path} 
          title={item.original_title} 
          release_date ={item.release_date} 
          desc= {item.overview}
        /> 
          )
      })
      return (<div className="container">
        {mp}
        <Pagination_Search current_page = {page} total_pages= { total_pages}/>
      </div>)
     }
  }
  
function mapStateToProps(state) {
  return {
    searchedMovies : state.seachMovies,
    search_string_object : state.searchString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateSearchedMovies : searchListUpdate
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)
