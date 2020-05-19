import React, { Component } from 'react'
import { connect } from 'react-redux'


 class NowPlaying extends Component {
  render() {
    console.log('NOW Playing', this.props.nowPlayingList)
    return (
      <div>
        
      </div>
    )
  }
}

function MapStateToProps(state) {
  return {
    nowPlayingList : state.nowPlayingList
  }

}
export default connect(MapStateToProps)(NowPlaying)