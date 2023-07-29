import React from 'react';
import YouTubeVideoPlayer from '../YouTubeVideoPlayer';

const App = () => {
  const youtubeVideoId = 'v=c-muF16kLSQ'; // Replace this with your actual YouTube video ID

  return (
    <div>
      <h1>Click on the image to open the YouTube video player</h1>
      <YouTubeVideoPlayer videoId={youtubeVideoId} />
    </div>
  );
};

export default App;
