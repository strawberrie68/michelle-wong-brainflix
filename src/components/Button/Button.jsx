import upload from "../../assets/icons/upload.svg";
import "./Button.scss";

const Button = () => {
  return (
    <button className="button label-text">
      <img className="button__icon" src={upload} />
      <p className="button__body">UPLOAD</p>
    </button>
  );
};

export default Button;
