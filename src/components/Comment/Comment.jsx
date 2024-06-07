import Avatar from "../Avatar/Avatar";
import { convertTimestamp } from "../../utils/utils";
import "./Comment.scss";

const Comment = ({ commentData }) => {
  const { name, timestamp, comment } = commentData;
  return (
    <article className="comment">
      <div className="comment__avatar">
        <Avatar isDefault={true} />
      </div>
      <div className="comment__details">
        <div className="comment__info">
          <p className="comment__author">{name}</p>
          <p className="comment__date">{convertTimestamp(timestamp)}</p>
        </div>
        <div className="comment__copy">{comment}</div>
      </div>
    </article>
  );
};

export default Comment;
