import "./VideoUpload.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";

const VideoUpload = () => {
  return (
    <main className="upload section-wrapper">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form">
        <div className="upload__body">
          <section className="upload__thumbnail-section">
            <p className="upload__label label-text">VIDEO THUMBNAIL</p>
            <figure className="upload__preview">
              <img
                className="upload__image"
                src={VideoThumbnail}
                alt="video image preview"
              />
            </figure>
          </section>

          <section className="upload__form-section">
            <label htmlFor="title" className="upload__label label-text">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Add a title to your video"
              className="upload__input"
            />

            <label htmlFor="description" className="label-text upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Add a description of your video"
              className="upload__input--textarea"
            />
          </section>
        </div>
        <div className="upload__footer">
          <Button icon="publish" text="PUBLISH" isPrimary={true} />
          <Button icon="none" text="CANCEL" isPrimary={false} />
        </div>
      </form>
    </main>
  );
};

export default VideoUpload;
