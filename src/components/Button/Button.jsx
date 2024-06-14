import upload from "../../assets/icons/upload.svg";
import comment from "../../assets/icons/add_comment.svg";
import publish from "../../assets/icons/publish.svg";
import "./Button.scss";

const Button = ({ type, icon, text, isPrimary, handleCancelForm }) => {
  const buttonIcon =
    icon == "upload" ? upload : icon === "comment" ? comment : publish;

  const buttonText = text.toUpperCase();
  const buttonType = isPrimary ? "button--primary" : "button--secondary";
  const textClass = isPrimary
    ? "button__body--primary"
    : "button__body--secondary";

  return (
    <button
      type={type}
      className={`button label-text ${buttonType}`}
      onClick={handleCancelForm}
    >
      {icon !== "none" && (
        <img
          className="button__icon"
          src={buttonIcon}
          alt={`${buttonText} icon for button`}
        />
      )}
      <p className={`button__body ${textClass}`}>{buttonText}</p>
    </button>
  );
};

export default Button;
