import React from 'react'
import searchStringUpdate from '../actions/searchStringUpdate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import nowPlayingUpdate from '../actions/nowPlayingUpdate';
import { Link, NavLink } from 'react-router-dom';

 class NavBar extends React.Component {

  updateLocalState = (e) =>  {
    if ((e.key === 'Enter') && (e.target.value)){
      this.props.searchStringUpdate(e.target.value)
      this.props.history.push(`/search`)
    }
  }

  updateNowPlayingList = () => {
      this.props.updateNowPlayingList()
  }

  render() {
  return (
<div className="navbar-fixed">
<nav className="blue">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo white-text" onClick={this.updateNowPlayingList}>Home</Link>   
            <ul className="hide-on-med-and-down right">               
                <li>    
                   <div className="center row">
                      <div className="col s12 " >
                        <div className="row" id="topbarsearch">
                          <div className="input-field col s6 s12 white-text">
                            <i className="white-text material-icons prefix">search</i>
                            <input type="search" onKeyPress= {this.updateLocalState} name="search_text" id="search" />
                            </div>
                          </div>
                        </div>
                      </div>          
                  </li>                     
                <li><a href="sass.html" className="white-text">About</a></li>
                <li><NavLink to="/signup" className="white-text">Sign up</NavLink></li>
                <li><NavLink to="/login" className="white-text">Log in</NavLink></li>
            </ul>
        </div>
      </nav> 

   </div>
  )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      searchStringUpdate :  searchStringUpdate,
      updateNowPlayingList : nowPlayingUpdate

    }, dispatch)
  
  }
  
export default connect(null, mapDispatchToProps)(NavBar)