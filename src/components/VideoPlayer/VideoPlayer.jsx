import "./VideoPlayer.scss";
import { API_URL } from "../../utils/config";

const VideoPlayer = ({ image }) => {
  return (
    <section className="video-player__container">
      <video
        controls
        className="video-player__video"
        poster={API_URL + image}
      ></video>
    </section>
  );
};

export default VideoPlayer;
