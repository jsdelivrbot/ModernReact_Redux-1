import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //react expects list items to have unique keys, that way it can later update specific list items by key
    //here we are using the unique etag returned from the yt api call to act as the key
    return (
      <VideoListItem 
      onVideoSelect = {props.onVideoSelect}
      key={video.etag} 
      video={video} />
    )
  })
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList;