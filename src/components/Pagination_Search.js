import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import nowPlayingUpdate from '../actions/nowPlayingUpdate'
import searchStringUpdate from '../actions/searchStringUpdate'
import searchListUpdate from '../actions/searchListUpdate'

 class Pagination extends Component {
   constructor() {
     super()
     this.state = {
       pages : [],
       search_string : '',
       current_page : 1
     }
   }


   componentDidMount = () => {
    this.setState({
      current_page : this.props.current_page
    })
    console.log('componentDidmount-PAgination Search', this.state)
     this.updatePaging(this.props.current_page)
   //this.updateWithPageNum(1)
  }

  updateWithPageNum = ( page_num) => {
    const ss = this.props.search_string_object.search_string
    this.props.updateSearchedMovies(ss, page_num)
    this.setState({
      ...this.state,
      current_page : page_num
    })
    this.updatePaging(page_num)
  }

  updatePaging = (current_page) => {
    console.log("updatePaging", current_page)
    const newState = []
    const total_pages = this.props.total_pages
    const pages_to_display = 6
    let starting_page 
    let  ending_page 
    if (total_pages < pages_to_display ) {
      ending_page = total_pages
    }else
     if ( (current_page - pages_to_display) < 0) {
        starting_page = 1
        ending_page = 2 * pages_to_display
    } else  {
      starting_page = current_page - pages_to_display +1
      ending_page = current_page + pages_to_display
    }

    if ((total_pages - current_page) < pages_to_display) {
      ending_page = total_pages;
      starting_page = total_pages - 2 * pages_to_display
    } 
   

    for (let i = starting_page ; i < ending_page; i++)  {
      newState.push(i);
     }
     this.setState( {
      pages: newState,
      current_page
     })
     console.log(this.state)
  }



  IncreaseCurrentPage = (inc) => {
    /*
    if (inc > 0 && this.state.current_page < this.props.total_pages)
    this.setState({
      ...this.state,
      current_page : this.state.current_page + 1
    })
  else if (inc < 0 && this.state.current_page > 1  )    
  this.setState({
    ...this.state,
    current_page : this.state.current_page - 1
  })
 // this.updatePaging(this.state.current_page)
 // this.props.updateNowPlayingList(this.state.current_page)
 */
  }

  render() {
    const pagingButtons = this.state.pages.map(page => (
      (page !== this.state.current_page) ? 
     <li key={page} className="waves-effect"><a href="#!" onClick={()=> this.updateWithPageNum(page)}>{page}</a></li> 
     :
     <li key={page} className="active"><a href="#!" onClick={()=> this.updateWithPageNum(page)}>{page}</a></li> 
    ))
    return (
      <div>
        <ul className="pagination">
          <li className="disabled"><a href="#!" onClick = {() => this.IncreaseCurrentPage(-1)}><i className="material-icons">chevron_left</i></a></li>
          
        {pagingButtons}

          <li className="waves-effect"><a href="#!" onClick = {() => this.IncreaseCurrentPage(1)}><i className="material-icons">chevron_right</i></a></li>
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateSearchedMovies : searchListUpdate
  }, dispatch)
}

  function mapStateToProps(state) {
    return {
      search_string_object : state.searchString
    }
  }



export default  connect(mapStateToProps,mapDispatchToProps)(Pagination)