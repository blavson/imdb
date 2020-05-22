import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import nowPlayingUpdate from '../actions/nowPlayingUpdate'

 class Pagination extends Component {
   constructor() {
     super()
     this.state = {
       pages : []
     }
   }

  updateWithPageNum = ( page_num) => {
    this.props.updateNowPlayingList(page_num)
    this.setState({
      ...this.state,
      current_page : page_num
    })
  }

  componentDidMount = () => {
    const newState = [...this.state.pages]
    const current_page = this.props.current_page
    const total_pages = this.props.total_pages
    const pages_to_display = 6

    for (let i = 1 ; i < total_pages; i++)  {
      newState.push(i);
     }
     this.setState( {
      pages: newState,
      current_page
     })
     console.log(this.state)
  }

  IncreaseCurrentPage = (inc) => {
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
  this.props.updateNowPlayingList(this.state.current_page)
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
    updateNowPlayingList : nowPlayingUpdate

  }, dispatch)

}


export default  connect(null,mapDispatchToProps)(Pagination)