import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";
import { Link } from "react-router-dom";

const VideoList = ({ filteredVideos, isLoading, handleClick }) => {
  return (
    <div className="video-list">
      {isLoading
        ? Array(3)
            .fill()
            .map((_, i) => <VideoCard key={i} isLoading={isLoading} />)
        : filteredVideos.map((video) => (
            <div key={video.id}>
              <Link to={`/videos/${video.id}`} className="video-list__link">
                <VideoCard
                  video={video}
                  id={video.id}
                  isLoading={isLoading}
                  handleClick={handleClick}
                />
              </Link>
            </div>
          ))}
    </div>
  );
};

export default VideoList;
