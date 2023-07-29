// YouTubeVideoPlayer.js
import React, { useState } from 'react';
import YouTube from 'react-youtube';
// import '../YouTubeVideoPlayer.css'; // We'll create this CSS file in the next step

const YouTubeVideoPlayer = ({ videoId }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="container">
      {showVideo ? (
        <div className="youtube-player">
          <YouTube videoId={videoId} onEnd={handleClose} />
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      ) : (
        <div className="thumbnail" onClick={handleClick}>
          <img
            src="images/prof.png" // Replace this with the path to your image
            alt="Thumbnail"
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;
