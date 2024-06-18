import "./VideoPlayer.scss";
const API_URL = import.meta.env.VITE_API_URL;

const VideoPlayer = ({ image }) => {
  return (
    <div className="video-player__container">
      <video
        controls
        className="video-player__video"
        poster={API_URL + image}
      ></video>
    </div>
  );
};

export default VideoPlayer;
