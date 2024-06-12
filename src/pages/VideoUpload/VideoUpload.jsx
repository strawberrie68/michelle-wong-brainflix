import "./VideoUpload.scss";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";

const initialValues = {
  title: "",
  description: "",
};

const VideoUpload = () => {
  const [values, setValues] = useState(initialValues);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues(values);

    setSubmitSuccessful(true);

    setTimeout(() => {
      setSubmitSuccessful(false);
      setValues(initialValues);
      navigate("/");
    }, 4000);
  };

  return (
    <main className="upload section-wrapper">
      <h1 className="upload__title">Upload Video</h1>
      {submitSuccessful && (
        <Alert
          type="success"
          message="Successfully Uploaded Video. You will be shortly redirected. "
        />
      )}
      <form className="upload__form" onSubmit={handleSubmit}>
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
              value={values.title}
              onChange={handleInputChange}
            />

            <label htmlFor="description" className="label-text upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Add a description of your video"
              className="upload__input--textarea"
              value={values.description}
              onChange={handleInputChange}
            />
          </section>
        </div>
        <div className="upload__footer">
          <Button
            type="submit"
            icon="publish"
            text="PUBLISH"
            isPrimary={true}
          />
          <Button icon="none" text="CANCEL" isPrimary={false} />
        </div>
      </form>
    </main>
  );
};

export default VideoUpload;
