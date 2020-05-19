import React, { Component } from 'react'
import config from '../config'
import axios from 'axios'
import MovieCard from './MovieCard'
import { connect } from 'react-redux'
import searchStringUpdate from '../actions/searchStringUpdate'
import { bindActionCreators } from 'redux'


class SearchPage extends Component {

  render() {
    console.log(this.props)
      return   ( 
        <div>
          <input type="text" onKeyPress= {this.updateSearchString} name="search_text" id="search_text" />
          
        </div>    
      )
  }

  
  updateSearchString = (e) => {
    if (e.key === 'Enter') {
     this.props.searchStringUpdate(e.target.value)
    }
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
