import { combineReducers } from "redux";
import searchStringReducer from "./searchStringReducer";
import nowPlaying from "./nowPlayingReducer";
import searchMovies from "./searchListReducer";
import popularMovies from "./popularMoviesReducer";

const mainReducer = combineReducers({
  searchString : searchStringReducer,
  seachMovies :  searchMovies,
  nowPlayingList : nowPlaying,
  popularMoviesList : popularMovies
 // searchedMovies : 

})

export default mainReducer