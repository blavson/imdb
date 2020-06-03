import React from 'react'
import axios from 'axios'
import config from '../config'

export default async (page_num) => {
  const request = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.APP_KEY}&page=${page_num}`;
  //const req = `https://api.themoviedb.org/3/movie/popular?api_key=${config.APP_KEY}&language=en-US&page=${page_num}`

   const response = await axios.get(request)
   console.log("Now playing", response.data)
    return  {
      type : 'NOW_PLAYING',
      nowPlayingList: response.data,
      }
}

