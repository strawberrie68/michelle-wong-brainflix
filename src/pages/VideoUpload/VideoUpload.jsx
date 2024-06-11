import "./VideoUpload.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";

const VideoUpload = () => {
  return (
    <div className="section-wrapper">
      <h1>Upload Video</h1>
      <div>
        <p>Video Thumbnail</p>
        <img src={VideoThumbnail} alt="video image preview" />
      </div>
      <div>
        <form>
          <label htmlFor="title">TITLE YOUR VIDEO</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Add a title to your video"
          />

          <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
          <textarea
            id="description"
            name="description"
            placeholder="Add a description of your video"
          />

          <Button icon="publish" text="PUBLISH" />
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
