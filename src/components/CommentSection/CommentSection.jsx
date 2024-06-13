import Skeleton from "react-loading-skeleton";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentSection.scss";
import "react-loading-skeleton/dist/skeleton.css";

const CommentSection = ({ comments }) => {
  if (comments === undefined) {
    return <p className="section-wrapper">Loading comments...</p>;
  }
  return (
    <section className="comment-section section-wrapper">
      <p className="comment-section__title">
        {comments ? `${comments.length} Comments` : <Skeleton />}{" "}
      </p>
      <CommentForm />
      {comments.map((comment) => {
        return <Comment key={comment.id} commentData={comment} />;
      })}
    </section>
  );
};
export default CommentSection;
