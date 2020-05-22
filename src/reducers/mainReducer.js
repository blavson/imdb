import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import nowPlaying from "./nowPlayingReducer";

const mainReducer = combineReducers({
  searchedMovies : searchReducer,
  nowPlayingList : nowPlaying
 // searchedMovies : 

})

export default mainReducer