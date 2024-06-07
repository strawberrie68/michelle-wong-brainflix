import upload from "../../assets/icons/upload.svg";
import comment from "../../assets/icons/add_comment.svg";
import "./Button.scss";

const Button = ({ icon, buttonText }) => {
  const buttonIcon = icon == "upload" ? upload : comment;
  return (
    <button className="button label-text">
      <img
        className="button__icon"
        src={buttonIcon}
        alt={`${buttonText} icon for button`}
      />
      <p className="button__body">{buttonText}</p>
    </button>
  );
};

export default Button;
