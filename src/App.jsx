import { useState } from "react";
import videoData from "./data/video-details.json";

import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import videoThumbnail from "../src/assets/images/Upload-video-preview.jpg";
import viewIcon from "./assets/icons/views.svg";
import likeIcon from "./assets/icons/likes.svg";
import Comment from "./components/Comment/Comment";
import Avatar from "./components/Avatar/Avatar.jsx";
import Button from "./components/Button/Button.jsx";
import VideoCard from "./components/VideoCard/VideoCard.jsx";

function App() {
  const [firstVideo, ...restVideos] = videoData;
  const [video, setVideo] = useState(firstVideo);
  // console.log(video);

  function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
  return (
    <>
      <header className="section-wrapper">
        <Navbar />
      </header>
      <main className="main-content">
        <div className="video__player-container">
          <video
            controls
            className="video__player"
            poster={videoThumbnail}
          ></video>
        </div>
        <section className="video-content">
          <div className="video__body">
            <div className="video__details section-wrapper">
              <h1 className="video__title">{video.title}</h1>
              <div className="video__metadata">
                <div className="video__metadata--left">
                  <div className="video__author">
                    <p className="video__info">By {video.channel}</p>
                  </div>
                  <div className="video__date">
                    <p className="video__info">
                      {convertTimestamp(video.timestamp)}
                    </p>
                  </div>
                </div>
                <div className="video__metadata--right">
                  <div className="video__views">
                    <img
                      className="video__icon"
                      src={viewIcon}
                      alt="View icon"
                    />
                    <p className="video__info">{video.views}</p>
                  </div>
                  <div className="video__likes">
                    <img
                      className="video__icon"
                      src={likeIcon}
                      alt="like icon"
                    />
                    <p className="video__info">{video.likes}</p>
                  </div>
                </div>
              </div>
              <p className="video__copy">{video.description}</p>
            </div>
            <section className="comment-section section-wrapper">
              <p className="comment__title">3 Comments</p>
              <form className="comment__form">
                <div className="comment__avatar">
                  <Avatar isDefault={false} />
                </div>
                <div className="comment__input-container">
                  <div className="comment__input-body">
                    <label
                      htmlFor="comment"
                      className="comment__label label-text"
                    >
                      JOIN THE CONVERSATION
                    </label>
                    <input
                      className="comment__input"
                      placeholder="Add a new comment"
                    ></input>
                  </div>
                  <div className="comment__button">
                    <Button buttonText="COMMENT" icon="comment" />
                  </div>
                </div>
              </form>
              {video.comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />;
              })}
            </section>
          </div>
          <aside className="recommend section-wrapper">
            <p className="recommend__title label-text">NEXT VIDEOS</p>
            {restVideos.map((video) => {
              return <VideoCard key={video.id} video={video} />;
            })}
          </aside>
        </section>
      </main>
    </>
  );
}

export default App;
