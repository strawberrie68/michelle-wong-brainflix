import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import videoThumbnail from "../src/assets/images/Upload-video-preview.jpg";
import viewIcon from "./assets/icons/views.svg";
import likeIcon from "./assets/icons/likes.svg";

function App() {
  return (
    <>
      <header className="section-wrapper">
        <Navbar />
      </header>
      <article className="video">
        <video
          controls
          className="video__player"
          poster={videoThumbnail}
        ></video>
        <div className="video__body section-wrapper">
          <h1 className="video__title">
            The Future of Artificial Intelligence
          </h1>
          <div className="video__metadata">
            <div className="video__metadata--left">
              <div className="video__author">
                <p className="video__info">By Aiden Thompson</p>
              </div>
              <div className="video__date">
                <p className="video__info">12/18/2018</p>
              </div>
            </div>
            <div className="video__metadata--right">
              <div className="video__views">
                <img className="video__icon" src={viewIcon} alt="View icon" />
                <p className="video__info">980,544</p>
              </div>
              <div className="video__likes">
                <img className="video__icon" src={likeIcon} alt="like icon" />
                <p className="video__info">22,479</p>
              </div>
            </div>
          </div>
          <p className="video__description">
            Explore the cutting-edge developments and predictions for Artificial
            Intelligence in the coming years. From revolutionary breakthroughs
            in machine learning to the ethical considerations influencing AI
            advancements, this exploration transcends the boundaries of mere
            speculation. Join us on a journey that navigates the intricate
            interplay between innovation,ethics and the ever-evolving tech
            frontier
          </p>
        </div>
      </article>
    </>
  );
}

export default App;
