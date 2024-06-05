import Avatar from "../Avatar/Avatar";
import "./Comment.scss";
const Comment = ({ comment }) => {
  function convertTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  return (
    <article className="comment">
      <div className="comment__avatar">
        <Avatar isDefault={true} />
      </div>
      <div className="comment__details">
        <div className="comment__info">
          <p className="comment__author">{comment.name}</p>
          <p className="comment__date">{convertTimestamp(comment.timestamp)}</p>
        </div>
        <div className="comment__copy">{comment.comment}</div>
      </div>
    </article>
  );
};

export default Comment;
