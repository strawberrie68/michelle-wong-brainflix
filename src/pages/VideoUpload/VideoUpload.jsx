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
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("success");
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
    setValues(initialValues);

    setTimeout(() => {
      setSubmitSuccessful(false);
      navigate("/");
    }, 4000);
  };

  const handleCancelForm = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
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
        <fieldset className="upload__body">
          <legend className="visually-hidden">Upload Video</legend>
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
        </fieldset>
        <div className="upload__footer">
          <Button
            type="submit"
            icon="publish"
            text="PUBLISH"
            isPrimary={true}
          />
          <Button
            type="button"
            icon="none"
            text="CANCEL"
            isPrimary={false}
            handleCancelForm={handleCancelForm}
          />
        </div>
      </form>
    </main>
  );
};

export default VideoUpload;
