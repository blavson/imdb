
export default (state = [], action) => {
  console.log("nowPlaying", action)
  if (action.type==='NOW_PLAYING') {
    return action.nowPlayingList
  }
  return state
}