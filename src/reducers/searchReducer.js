import config from '../config'
import axios from 'axios'

export default (state = 'hello' ,  action) => {
  if (action.type === 'updateSearchString') {
    const sstring = action.payload.searchString
    const request = `https://api.themoviedb.org/3/search/movie?api_key=${config.APP_KEY}&query=${sstring}&page=1`
    axios.get(request)
    .then( data => {
      console.log( data.data.results)
  })
  return state;
  }
   else {
     return state;
   }
  }