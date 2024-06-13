import "./VideoCard.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoCard = ({ video = {}, handleClick, isLoading }) => {
  const { image, title, channel } = video;
  return (
    <SkeletonTheme color="#E1E1E1" highlightColor="#E1E1E1">
      <article className="video-card" onClick={handleClick}>
        <div
          className={
            isLoading ? "video-card--loading" : "video-card__image-container"
          }
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            <img
              className="video-card__image"
              src={image}
              alt={`${title} Video Thumbnail`}
            />
          )}
        </div>
        <div className="video-card__body">
          <h3 className="video-card__title">{title || <Skeleton />}</h3>
          <p className="video-card__channel">{channel || <Skeleton />}</p>
        </div>
      </article>
    </SkeletonTheme>
  );
};

export default VideoCard;
