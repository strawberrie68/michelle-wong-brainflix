import { convertTimestamp } from "../../utils/utils";
import Avatar from "../Avatar/Avatar";
import deleteIcon from "../../assets/icons/delete.svg";
import "./Comment.scss";

const Comment = ({ commentData, handleDeleteComment }) => {
  const { name, timestamp, comment, id } = commentData;

  return (
    <article className="comment" id={id}>
      <section className="comment__avatar">
        <Avatar isDefault={true} />
      </section>
      <section className="comment__details">
        <div className="comment__info">
          <p className="comment__author">{name}</p>
          <div className="comment__metadata">
            <p className="comment__date">{convertTimestamp(timestamp)}</p>
            <button
              className="comment__delete"
              onClick={() => handleDeleteComment(id)}
            >
              <img
                className="comment__delete-image"
                src={deleteIcon}
                alt="delete icon button"
              />
            </button>
          </div>
        </div>
        <div className="comment__copy">{comment}</div>
      </section>
    </article>
  );
};

export default Comment;
