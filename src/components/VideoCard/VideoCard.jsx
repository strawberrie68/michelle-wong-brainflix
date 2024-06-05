import "./VideoCard.scss";
const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="video-card__image-container">
        <img className="video-card__image" src={video.image} />
      </div>
      <div className="video-card__body">
        <h2 className="video-card__title">{video.title}</h2>
        <p className="video-card__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
