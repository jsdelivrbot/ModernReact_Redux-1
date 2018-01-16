import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
  //instead of declaring a new variable in the function, passing {video} uses es6 object destructing to pull the video property on props 
  //and will declare it as a new variable, video, for us.
  // const video = props.video
  //const onVideoSelect = props.onVideoSelect 
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <div>
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </div>
    </li>

  )
};

export default VideoListItem;