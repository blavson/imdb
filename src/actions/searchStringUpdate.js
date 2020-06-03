import React from 'react'
import axios from 'axios'
import config from '../config'

export default async (newSearchString) => {
  console.log("UPDATE_SEARCH_STRING : " , newSearchString)
  console.log("STEP 2")
      return  {
        type : 'UPDATE_SEARCH_STRING',
        search_string : newSearchString
        }
}

