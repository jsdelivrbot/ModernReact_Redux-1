//if a component doesn't require tracking a state, it should be functional as opposed to class based
//since video detail is passed all of its needed props from App it really has no reason to keep track of state 

import React from 'react';

const VideoDetail = ({video}) => {
  //React will try to render VideoDetail before the yt api call is finished, so
  //we check, if no video, render a <div>Loading..</div>. Once the yt api call is finished, the state on App changes.
  //when setState is called on App, App will rerender, {video} from props will be defined, and it will render successfully 
  //..don't over used the loading(spiiner or whatever).. users dont want to see like a dozen loading spinners when they first visit a page
  if(!video){
    return <div>Loading..</div>
  }

  //yt videos all have the same url, expect for the id of the video
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div> 
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div> 
    </div>
  )
}

export default VideoDetail;