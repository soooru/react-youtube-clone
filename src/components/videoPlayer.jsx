import React from 'react';
import './videoPlayer.css';
function videoPlayer(props) {
  return (
    <div className="video-wrap">
      <iframe
        src={`https://www.youtube.com/embed/${props.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
export default videoPlayer;
