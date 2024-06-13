import Avatar from "../Avatar/Avatar";
import { convertTimestamp } from "../../utils/utils";
import "./Comment.scss";
import deleteIcon from "../../assets/icons/delete.svg";

const Comment = ({ commentData, handleDeleteComment }) => {
  const { name, timestamp, comment, id } = commentData;

  return (
    <article className="comment" id={id}>
      <div className="comment__avatar">
        <Avatar isDefault={true} />
      </div>
      <div className="comment__details">
        <div className="comment__info">
          <p className="comment__author">{name}</p>
          <div className="comment__metadata">
            <p className="comment__date">{convertTimestamp(timestamp)}</p>
            <img
              className="comment__delete"
              src={deleteIcon}
              alt="delete icon button"
              onClick={(event) =>
                handleDeleteComment(event.target.closest(".comment").id)
              }
            />
          </div>
        </div>
        <div className="comment__copy">{comment}</div>
      </div>
    </article>
  );
};

export default Comment;
