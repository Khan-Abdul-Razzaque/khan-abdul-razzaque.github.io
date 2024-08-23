import React from 'react'
import Recommended from '../../Components/Recommended/Recommended'
import PlayVideo from '../../Components/playVideo/PlayVideo'
import './Video.css'

const Video = ({category, videoList}) => {
  return (
    <div className='videoPlayPage'>
      <PlayVideo videoList={videoList} />
      <Recommended category={category} videoList={videoList} />
    </div>
  )
}

export default Video
