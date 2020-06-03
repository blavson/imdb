
export default (state = [], action) => {
  console.log("nowPlaying", action)
  if (action.type==='NOW_PLAYING') {
    console.log("nowPlaying", action)
    return action.nowPlayingList
  }
  return state
}