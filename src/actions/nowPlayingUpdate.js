import React from 'react'
import axios from 'axios'
import config from '../config'

export default async (page_num) => {
  console.log("Now Playing");
  const request = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.APP_KEY}&page=${page_num}`;
  const response = await axios.get(request)
  console.log('Response = ', response)
      return  {
        type : 'NOW_PLAYING',
        nowPlayingList: response.data
        }
}

