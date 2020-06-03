
export default (state = {} ,  action) => {
  if (action.type === 'UPDATE_SEARCH_LIST') {
    const retObj = {
      results : action.results,
      current_page : action.current_page,
    }
  return retObj
  }
   else {
     return state;
   }
  }