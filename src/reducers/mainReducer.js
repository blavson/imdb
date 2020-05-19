import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import nowPlaying from "./nowPlayingReducer";

const mainReducer = combineReducers({
  searchString : searchReducer,
  nowPlayingList : nowPlaying

})

export default mainReducer