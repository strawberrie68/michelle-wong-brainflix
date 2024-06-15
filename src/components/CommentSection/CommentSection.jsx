import Skeleton from "react-loading-skeleton";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentSection.scss";
import "react-loading-skeleton/dist/skeleton.css";

const CommentSection = ({
  comments,
  handleCommentSubmit,
  handleDeleteComment,
}) => {
  if (!comments) {
    return <p className="section-wrapper">Loading comments...</p>;
  }
  const sortedComments = comments.sort((a, b) => b.timestamp - a.timestamp);
  return (
    <section className="comment-section section-wrapper">
      <p className="comment-section__title">
        {comments ? `${comments.length} Comments` : <Skeleton />}
      </p>
      <CommentForm handleCommentSubmit={handleCommentSubmit} />
      {sortedComments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentData={comment}
            handleDeleteComment={handleDeleteComment}
          />
        );
      })}
    </section>
  );
};
export default CommentSection;
