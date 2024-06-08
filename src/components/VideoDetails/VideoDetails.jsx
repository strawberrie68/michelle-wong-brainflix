import "./VideoDetails.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import { convertTimestamp } from "../../utils/utils";

const VideoDetails = ({ video }) => {
  const { title, channel, timestamp, views, likes, description } = video;
  return (
    <article className="video-details section-wrapper">
      <h1 className="video-details__title">{title}</h1>
      <section className="video-details__metadata">
        <div className="video-details__metadata--left">
          <div className="video-details__author">
            <p className="video-details__info">By {channel}</p>
          </div>
          <div className="video-details__date">
            <p className="video-details__info">{convertTimestamp(timestamp)}</p>
          </div>
        </div>
        <div className="video-details__metadata--right">
          <div className="video-details__views">
            <img
              className="video-details__icon"
              src={viewIcon}
              alt="View icon"
            />
            <p className="video-details__info">{views}</p>
          </div>
          <div className="video-details__likes">
            <img
              className="video-details__icon"
              src={likeIcon}
              alt="like icon"
            />
            <p className="video-details__info">{likes}</p>
          </div>
        </div>
      </section>
      <p className="video-details__copy">{description}</p>
    </article>
  );
};

export default VideoDetails;
