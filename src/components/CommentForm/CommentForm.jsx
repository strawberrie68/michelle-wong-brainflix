import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { useState } from "react";

const initialValues = {
  comment: "",
  name: "Git Skywalker",
};

const CommentForm = ({ handleCommentSubmit }) => {
  const [values, setValues] = useState(initialValues);

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
    handleCommentSubmit(values);
    setValues(initialValues);
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form__avatar">
        <Avatar isDefault={false} />
      </div>
      <section className="comment-form__content">
        <div className="comment-form__field">
          <label htmlFor="comment" className="comment-form__label label-text">
            JOIN THE CONVERSATION
          </label>
          <input
            className="comment-form__input"
            placeholder="Add a new comment"
            name="comment"
            value={values.comment}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="comment-form__button">
          <Button
            type="submit"
            text="COMMENT"
            icon="comment"
            isPrimary={true}
          />
        </div>
      </section>
    </form>
  );
};

export default CommentForm;
