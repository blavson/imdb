import React from 'react'

export default (newSearchString) => {
  console.log("Search String Update :" , newSearchString);
  return  {
    type : 'updateSearchString',
    payload : {
               searchString : newSearchString,
               info   : []
    }
  }

}