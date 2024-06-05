import "./VideoCard.scss";
import dummyImage from "../../assets/images/Upload-video-preview.jpg";
const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-card__image-container">
        <img className="video-card__image" src={dummyImage} />
      </div>
      <div className="video-card__body">
        <h2 className="video-card__title">
          The Future of Artificial Intelligence
        </h2>
        <p className="video-card__channel">Aiden Thompson</p>
      </div>
    </div>
  );
};

export default VideoCard;
