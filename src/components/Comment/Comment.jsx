import Avatar from "../Avatar/Avatar";
import "./Comment.scss";
const Comment = () => {
  return (
    <article className="comment">
      <div className="comment__avatar">
        <Avatar isDefault={true} />
      </div>
      <div className="comment__details">
        <div className="comment__info">
          <p className="comment__author">Victor Pinto</p>
          <p className="comment__date">12/18/2018</p>
        </div>
        <div className="comment__copy">
          This is art. This is inexplicable magic expressed in the purest way,
          everything that makes up this majestic work deserves reverence. Let us
          appreciate this for what it is and what it contains.
        </div>
      </div>
    </article>
  );
};

export default Comment;
