import { useState } from "react";
import videoData from "./data/video-details.json";
import "./App.css";

import Navbar from "../src/components/Navbar/Navbar.jsx";
import VideoCard from "./components/VideoCard/VideoCard.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import CommentSection from "./components/CommentSection/CommentSection.jsx";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [unselectedVideos, setUnselectedVideos] = useState(videoData.slice(1));

  function handleSelectedVideo(id) {
    const selectedVideo = videoData.find((video) => video.id === id);
    const otherVideos = videoData.filter((video) => video.id !== id);

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
            <CommentSection comments={selectedVideo.comments} />
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
                    handleClick={() => handleSelectedVideo(video.id)}
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
