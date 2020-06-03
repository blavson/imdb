import React from 'react'
import axios from 'axios'
import config from '../config'

export default async (page_num) => {
const req = `https://api.themoviedb.org/3/movie/popular?api_key=${config.APP_KEY}&language=en-US&page=1`
const resp = await axios.get(req)
console.log("popular movies ==== ", resp)
    return  {
      type : 'POPULAR_MOVIES',
      popularMoviesList: resp.data
      }
}

