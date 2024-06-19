import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/config";
import VideoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import axios from "axios";
import "./VideoUpload.scss";

const initialValues = {
  title: "",
  description: "",
  image: "/images/Upload-video-preview.jpg",
};

const VideoUpload = () => {
  const [values, setValues] = useState(initialValues);
  const [alertStatus, setAlertStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const postVideo = async (videoData) => {
    const formData = new FormData();
    for (const key in videoData) {
      formData.append(key, videoData[key]);
    }
    try {
      const response = await axios.post(`${API_URL}/videos`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      setAlertStatus("error");
      setMessage(error + "Failed to upload video, please try again.  ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.title || !values.description) {
      setAlertStatus("error");
      setMessage("Error: Please fill out all the fields");
      return;
    }
    const videoData = { ...values, image: file };
    postVideo(videoData);
    setValues(initialValues);
    setFile(null);

    setAlertStatus("success");
    setMessage(
      "Successfully Uploaded Video. You will be shortly redirected :)  "
    );

    setTimeout(() => {
      navigate("/");
      setAlertStatus(null);
    }, 4000);
  };

  const handleCancelForm = () => {
    navigate("/");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  };

  return (
    <main className="upload section-wrapper">
      <h1 className="upload__title">Upload Video</h1>
      {alertStatus && <Alert type={alertStatus} message={message} />}
      <form className="upload__form" onSubmit={handleSubmit}>
        <fieldset className="upload__body">
          <legend className="visually-hidden">Upload Video</legend>
          <section className="upload__thumbnail-section">
            <p className="upload__label label-text">VIDEO THUMBNAIL</p>
            <figure className="upload__preview">
              <img
                className="upload__image"
                src={preview || VideoThumbnail}
                alt="video image preview"
              />
              <input
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                className="upload__image-input"
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
