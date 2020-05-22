import React from 'react'
import axios from 'axios'
import config from '../config'

export default async (newSearchString) => {
  console.log("Search String Update :" , newSearchString);
  const request = `https://api.themoviedb.org/3/search/movie?api_key=${config.APP_KEY}&query=${newSearchString}&page=1`
  const response = await axios.get(request)
  console.log(response)
      return  {
        type : 'updateSearchString',
        searchedMovies : response.data
        }
}

