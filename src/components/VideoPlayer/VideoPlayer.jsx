import "./VideoPlayer.scss";

const VideoPlayer = ({ image }) => {
  return (
    <div className="video-player__container">
      <video controls className="video-player__video" poster={image}></video>
    </div>
  );
};

export default VideoPlayer;
