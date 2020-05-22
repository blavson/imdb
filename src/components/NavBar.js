import React from 'react'
import searchStringUpdate from '../actions/searchStringUpdate'
import SearchPage from './SearchPage';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import nowPlayingUpdate from '../actions/nowPlayingUpdate';
import { Link } from 'react-router-dom';

 class NavBar extends React.Component {

  updateLocalState = (e) =>  {
    if ((e.key === 'Enter') && (e.target.value)){
        console.log("this.updateLocalState")
      this.props.searchStringUpdate(e.target.value)
      this.props.history.push(`/search`)
    }
  }

  updateNowPlayingList = () => {
      console.log("Updating now playing list")
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
                <li><a href="badges.html" className="white-text">Sign up</a></li>
                <li><a href="collapsible.html" className="white-text">Log in</a></li>
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