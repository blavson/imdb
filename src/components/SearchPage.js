import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import MovieCard from './MovieCard'
import { connect } from 'react-redux'
import searchStringUpdate from '../actions/searchStringUpdate'
import { bindActionCreators } from 'redux'


class SearchPage extends Component {
state = { data : {}}

  updateLocalState = (e) =>  {
    if (e.key === 'Enter') {
      this.props.searchStringUpdate(e.target.value)

      const request = `https://api.themoviedb.org/3/search/movie?api_key=${config.APP_KEY}&query=${e.target.value}&page=1`
      axios.get(request)
      .then( data => {
        this.setState({
          data : data.data.results
        })
        //console.log( "State = ", this.state.data)
    })
    }
  }

  render() {
    const imagePath="https://image.tmdb.org/t/p/w500/"
   const data = this.state.data
   console.log(data)
   let dt =[]
   if (Array.isArray(data)) {
     dt = data.map( (item) => {
     return ( 
       <ul key={item.id} >
          <li>{item.id}</li>
          <li>{item.original_title}</li>
          <li>{item.overview}</li>
          <li><img src={`${imagePath}${item.poster_path}`} /></li>
          <li>{item.release_date}</li>
      </ul>
     )
    })
    console.log(dt)
   }
      return   (
        <div>
          <input type="text" onKeyPress= {this.updateLocalState} name="search_text" id="search_text" />
          <hr />
          {dt}
          </div> 
      )
  }
}
  
function mapStateToProps(state) {
  return {
    searchString : state.searchString
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchStringUpdate :  searchStringUpdate
  }, dispatch)

}

console.log(connect)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
