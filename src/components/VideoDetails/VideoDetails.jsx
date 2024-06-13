import "./VideoDetails.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import { convertTimestamp } from "../../utils/utils";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoDetails = ({ video, isLoading }) => {
  const { title, channel, timestamp, views, likes, description } = video;
  return (
    <SkeletonTheme color="#E1E1E1" highlightColor="#E1E1E1">
      <article className="video-details section-wrapper">
        <h1 className="video-details__title">{title || <Skeleton />}</h1>
        <section className="video-details__metadata">
          <div className="video-details__metadata--left">
            <div className="video-details__author">
              <p className="video-details__info">
                {channel ? `By ${channel}` : <Skeleton />}
              </p>
            </div>
            <div className="video-details__date">
              <p className="video-details__info">
                {timestamp ? convertTimestamp(timestamp) : <Skeleton />}
              </p>
            </div>
          </div>
          {!isLoading && (
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
          )}
        </section>
        <p className="video-details__copy">
          {description || <Skeleton count={5} />}
        </p>
      </article>
    </SkeletonTheme>
  );
};

export default VideoDetails;
