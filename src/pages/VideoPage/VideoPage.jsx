import "./VideoPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { API_URL, API_KEY } from "../../utils/api.js";

import VideoCard from "../../components/VideoCard/VideoCard.jsx";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../components/CommentSection/CommentSection.jsx";

const VideoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();

  const getVideos = async () => {
    try {
      const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
      setVideos(response.data);
      setSelectedVideoId(videoId || response.data[0].id);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/videos/${selectedVideoId}?api_key=${API_KEY}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, [videoId]);

  useEffect(() => {
    if (selectedVideoId) {
      fetchVideoDetails();
    }
  }, [selectedVideoId]);

  if (error) {
    return (
      <p>
        Sorry, we encountered an error with the server. Please try again or
        refresh the page.
      </p>
    );
  }

  const filteredVideos = videos.filter((video) => video.id !== selectedVideoId);

  return (
    <>
      <main className="main-content">
        <VideoPlayer image={selectedVideo.image} />
        <section className="video-content">
          <div className="video-content__body">
            <VideoDetails video={selectedVideo} isLoading={isLoading} />
            <CommentSection
              comments={selectedVideo.comments}
              isLoading={isLoading}
            />
          </div>
          <aside className="recommend section-wrapper">
            <p className="recommend__title label-text">NEXT VIDEOS</p>
            <div className="recommend__list">
              {isLoading && (
                <div className="recommend__loading">
                  <VideoCard isLoading={isLoading} />
                  <VideoCard isLoading={isLoading} />
                  <VideoCard isLoading={isLoading} />
                </div>
              )}

              {!isLoading &&
                filteredVideos.map((video) => {
                  return (
                    <div key={video.id}>
                      <Link
                        to={`/video/${video.id}`}
                        className="recommend__link"
                      >
                        <VideoCard
                          key={video.id}
                          video={video}
                          id={video.id}
                          isLoading={isLoading}
                        />
                      </Link>
                    </div>
                  );
                })}
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default VideoPage;
