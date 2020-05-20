import config from '../config'
import axios from 'axios'

export default (state = 'hello' ,  action) => {
  if (action.type === 'updateSearchString') {
    const sstring = action.payload.searchString

  return sstring;
  }
   else {
     return state;
   }
  }