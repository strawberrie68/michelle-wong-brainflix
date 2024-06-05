import "./VideoCard.scss";
const VideoCard = ({ video, handleClick }) => {
  const { image, title, channel } = video;
  return (
    <article className="video-card" onClick={handleClick}>
      <div className="video-card__image-container">
        <img className="video-card__image" src={image} />
      </div>
      <div className="video-card__body">
        <h2 className="video-card__title">{title}</h2>
        <p className="video-card__channel">{channel}</p>
      </div>
    </article>
  );
};

export default VideoCard;
