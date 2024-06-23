import "./VideoPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatLikes } from "../../utils/utils.js";
import { API_URL } from "../../utils/config.js";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../components/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../components/CommentSection/CommentSection.jsx";
import VideoList from "../../components/VideoList/VideoList.jsx";

const VideoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();

  const handleError = (error, message) => {
    setError(message);
    console.error({ error });
  };
  const getVideoId = (videos) => {
    return videoId ? videoId : videos[0].id;
  };

  const getVideos = async () => {
    try {
      const response = await axios.get(`${API_URL}/videos`);
      setVideos(response.data);
      setIsLoading(false);
      setSelectedVideoId(getVideoId(response.data));
    } catch (error) {
      handleError(
        error,
        "An error occurred while fetching videos. Please try again."
      );
    }
  };

  const fetchVideoDetails = async () => {
    setSelectedVideoId(getVideoId(videos));
    try {
      const response = await axios.get(`${API_URL}/videos/${selectedVideoId}`);
      setSelectedVideo(response.data);
    } catch (error) {
      handleError(
        error,
        "An error occurred while fetching video details. Please try again."
      );
    }
  };

  const handleUpdateId = (id) => {
    setSelectedVideoId(id);
    fetchVideoDetails();
  };

  const handleCommentSubmit = async (comment) => {
    try {
      await axios.post(
        `${API_URL}/videos/${selectedVideoId}/comments`,
        comment
      );
      fetchVideoDetails();
    } catch (error) {
      handleError(
        error,
        "We could not post comment at this time. Please try again."
      );
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${API_URL}/videos/${selectedVideoId}/comments/${commentId}`
      );
      fetchVideoDetails();
    } catch (error) {
      handleError(
        error,
        "We could not delete comment at this time. Please try again."
      );
    }
  };

  const handleVideoLike = async (video) => {
    const updatedVideo = { ...video, likes: formatLikes(video.likes) };

    try {
      await axios.put(
        `${API_URL}/videos/${selectedVideoId}/likes`,
        updatedVideo
      );
      fetchVideoDetails();
    } catch (error) {
      handleError(
        error,
        "We could not process your request at this time. Please try again."
      );
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId, selectedVideoId]);

  if (error) {
    return <p className="section-wrapper">{error}</p>;
  }

  const filteredVideos = videos.filter((video) => video.id !== selectedVideoId);

  return (
    <main className="main-content">
      <VideoPlayer image={selectedVideo.image} />
      <section className="video-content">
        <div className="video-content__body">
          <VideoDetails
            video={selectedVideo}
            isLoading={isLoading}
            handleVideoLike={handleVideoLike}
          />
          <CommentSection
            comments={selectedVideo.comments}
            isLoading={isLoading}
            handleCommentSubmit={handleCommentSubmit}
            handleDeleteComment={handleDeleteComment}
          />
        </div>
        <aside className="recommend section-wrapper">
          <p className="recommend__title label-text">NEXT VIDEOS</p>
          <VideoList
            filteredVideos={filteredVideos}
            isLoading={isLoading}
            handleClick={handleUpdateId}
          />
        </aside>
      </section>
    </main>
  );
};

export default VideoPage;
