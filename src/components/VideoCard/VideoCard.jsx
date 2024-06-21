import "./VideoCard.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { API_URL } from "../../utils/config";

const VideoCard = ({ video = {}, handleClick, isLoading }) => {
  const { image, title, channel, id } = video;
  return (
    // SkeletonTheme is used to style the loading skeleton

    <SkeletonTheme color="#E1E1E1" highlightColor="#E1E1E1">
      <article className="video-card" onClick={() => handleClick(id)}>
        <section
          className={
            isLoading ? "video-card--loading" : "video-card__image-container"
          }
        >
          {isLoading ? (
            <Skeleton />
          ) : (
            <img
              className="video-card__image"
              src={API_URL + image}
              alt={`${title} Video Thumbnail`}
            />
          )}
        </section>
        <section className="video-card__body">
          <h3 className="video-card__title">{title || <Skeleton />}</h3>
          <p className="video-card__channel">{channel || <Skeleton />}</p>
        </section>
      </article>
    </SkeletonTheme>
  );
};

export default VideoCard;
