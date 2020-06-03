import React from 'react'
import axios from 'axios'
import config from '../config'

export default async (newSearchString, current_page) => {
  const request = `https://api.themoviedb.org/3/search/movie?api_key=${config.APP_KEY}&query=${newSearchString}&page=${current_page}`
  const response = await axios.get(request)
  console.log("Search action", response)
      return  {
        type : 'UPDATE_SEARCH_LIST',
        result : response.data,
        current_page : current_page,
        }
}

