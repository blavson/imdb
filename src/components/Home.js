import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import nowPlayingUpdate from '../actions/nowPlayingUpdate'
import Pagination from './Pagination'

class Home extends Component {
  state = {
    current_page : 1,
    posts_per_page : 20,
  }

  componentDidMount() {
    this.props.updateNowPlayingList(this.state.current_page)
  }


  render() {
    console.log(this.props)
    const imagePath="https://image.tmdb.org/t/p/w500/"
    if (this.props.nowPlayingList.results) {
    const movies = this.props.nowPlayingList.results.map((movie, index) => {
      return   ( <MovieCard 
                 key={index}
                 image = {`${movie.poster_path}`}
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
          <h2>Now in cinemas </h2>
          {movies}
          <Pagination current_page = {this.state.current_page} total_pages= { this.props.nowPlayingList.total_pages}/>
        </div>)
  } else {
    return (<h1>No Movies Found</h1>)
  }
  }
 }

function MapStateToProps(state) {
  return {
    nowPlayingList : state.nowPlayingList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateNowPlayingList : nowPlayingUpdate

  }, dispatch)

}


export default  connect(MapStateToProps,mapDispatchToProps)(Home)
