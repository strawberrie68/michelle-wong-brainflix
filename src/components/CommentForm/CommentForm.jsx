import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

const CommentForm = () => {
  return (
    <form className="comment-form">
      <div className="comment-form__avatar">
        <Avatar isDefault={false} />
      </div>
      <div className="comment-form__content">
        <div className="comment-form__field">
          <label htmlFor="comment" className="comment-form__label label-text">
            JOIN THE CONVERSATION
          </label>
          <input
            className="comment-form__input"
            placeholder="Add a new comment"
          ></input>
        </div>
        <div className="comment-form__button">
          <Button text="COMMENT" icon="comment" />
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
