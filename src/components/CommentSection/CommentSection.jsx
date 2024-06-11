import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentSection.scss";

const CommentSection = ({ comments }) => {
  if (comments === undefined) {
    return <p>Loading comments...</p>;
  }
  return (
    <section className="comment-section section-wrapper">
      <p className="comment-section__title">{comments.length} Comments</p>
      <CommentForm />
      {comments.map((comment) => {
        return <Comment key={comment.id} commentData={comment} />;
      })}
    </section>
  );
};
export default CommentSection;
