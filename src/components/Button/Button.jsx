import upload from "../../assets/icons/upload.svg";
import comment from "../../assets/icons/add_comment.svg";
import publish from "../../assets/icons/publish.svg";
import "./Button.scss";

const Button = ({ icon, text, isPrimary }) => {
  const buttonIcon =
    icon == "upload" ? upload : icon === "comment" ? comment : publish;

  const buttonText = text.toUpperCase();
  const buttonType = isPrimary ? "button--primary" : "button--secondary";
  return (
    <button className={`button label-text ${buttonType}`}>
      {icon !== "none" && (
        <img
          className="button__icon"
          src={buttonIcon}
          alt={`${buttonText} icon for button`}
        />
      )}
      <p className={`button__body ${buttonType}`}>{buttonText}</p>
    </button>
  );
};

export default Button;
