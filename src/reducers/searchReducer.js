import config from '../config'
import axios from 'axios'

export default (state = {} ,  action) => {
  if (action.type === 'updateSearchString') {
    const movies = action.searchedMovies
    console.log("reducer" ,action.searchedMovies )
  return movies;
  }
   else {
     return state;
   }
  }