import React from 'react'
import searchStringUpdate from '../actions/searchStringUpdate'
import SearchPage from './SearchPage';

export default function NavBar(props) {
  function handleFormSubmit(e) {
      e.preventDefault()
  }

  return (
<div className="navbar-fixed">
<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
   </div>
  )
}
