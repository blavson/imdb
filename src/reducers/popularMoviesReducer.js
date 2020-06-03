
export default (state = [], action) => {
  if (action.type==='POPULAR_MOVIES') {
    console.log("POPULAR_MOVIES", action)
    return action.popularMoviesList
  }
  return state
}