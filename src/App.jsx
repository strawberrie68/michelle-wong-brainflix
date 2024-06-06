import { useState } from "react";
import videoData from "./data/video-details.json";
import "./App.css";
// import { convertTimestamp } from "../src/utils/utils.js";
import Navbar from "../src/components/Navbar/Navbar.jsx";

// import viewIcon from "./assets/icons/views.svg";
// import likeIcon from "./assets/icons/likes.svg";
import Comment from "./components/Comment/Comment";
import VideoCard from "./components/VideoCard/VideoCard.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import CommentForm from "./components/CommentForm/CommentForm.jsx";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [unselectedVideos, setUnselectedVideos] = useState(videoData.slice(1));

  function getSelectedVideo(id) {
    let selectedVideo = null;
    const otherVideos = [];

    for (const video of videoData) {
      if (video.id === id) {
        selectedVideo = video;
      } else {
        otherVideos.push(video);
      }
    }

    setSelectedVideo(selectedVideo);
    setUnselectedVideos(otherVideos);
  }

  return (
    <>
      <header className="section-wrapper">
        <Navbar />
      </header>
      <main className="main-content">
        <VideoPlayer image={selectedVideo.image} />
        <section className="video-content">
          <div className="video-content__body">
            <VideoDetails video={selectedVideo} />

            <section className="comment-section section-wrapper">
              <p className="comment__title">
                {selectedVideo.comments.length} Comments
              </p>
              <CommentForm />
              {selectedVideo.comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />;
              })}
            </section>
          </div>
          <aside className="recommend section-wrapper">
            <p className="recommend__title label-text">NEXT VIDEOS</p>
            <div className="recommend__list">
              {unselectedVideos.map((video) => {
                return (
                  <VideoCard
                    key={video.id}
                    video={video}
                    id={video.id}
                    handleClick={() => getSelectedVideo(video.id)}
                  />
                );
              })}
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}

export default App;
