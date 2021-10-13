function CommentBox({ comment }) {
  const { name, message, created } = comment;
  
  return(
    <div
      className="comment-box-container"
    >
      <p>{message}</p>
      <p>{name} on {created}</p>
    </div>
  )
}

export default CommentBox