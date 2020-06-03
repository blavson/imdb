import config from '../config'
import axios from 'axios'

export default (state = {} ,  action) => {
  if (action.type === 'UPDATE_SEARCH_STRING') {
    console.log(action)
    const retObj = {
      type : 'UPDATE_SEARCH_STRING',
      search_string : action.search_string
    }
  return retObj
  }
   else {
     return state;
   }
  }