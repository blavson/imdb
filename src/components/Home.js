import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import nowPlayingUpdate from '../actions/nowPlayingUpdate'
import Movies from './Movies'
import popularMoviesUpdate from '../actions/popularMoviesUpdate'


class Home extends Component {
  state = {
    current_page : 1,
    posts_per_page : 20,
  }

  componentDidMount() {
    this.props.updateNowPlayingList(this.state.current_page)
    this.props.updatePopularMovies(1);

  }


  render() {

    console.log("Render", this.props.nowPlayingList.results)
     let movies;
     let populars;

     if (this.props.nowPlayingList.results === undefined  ) 
        movies = (<h1>Can't find any movies</h1>)
      else 
      movies =  <Movies movies={this.props.nowPlayingList.results.slice(0,10)}  title='Now in Movie-theaters'/>

      if (this.props.popularMoviesList.results === undefined) 
       populars = (<h1>Can't find any popular movies</h1>)
       else
        populars = <Movies movies={this.props.popularMoviesList.results.slice(0,10)} title='Popular Movies' />
  // }
    return(
            <div className="container">
              <div className="row">
                {movies}
                {populars}
                </div>
            </div> 
    )
 }
}

function MapStateToProps(state) {
  return {
    nowPlayingList : state.nowPlayingList,
    popularMoviesList : state.popularMoviesList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateNowPlayingList : nowPlayingUpdate,
    updatePopularMovies : popularMoviesUpdate
  }, dispatch)

}


export default  connect(MapStateToProps,mapDispatchToProps)(Home)
