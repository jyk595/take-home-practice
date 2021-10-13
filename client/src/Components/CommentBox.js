import dateFormat from 'dateformat';

function CommentBox({ comment }) {
  const { name, message, created } = comment;

  var today = new Date();
  const compareFormatToday = dateFormat(today, "mmmm dd, yyyy");
  const compareFormatDate = dateFormat(created, "mmmm dd, yyyy");
  const formatDate = dateFormat(created, "mmmm dS");
  const formateTime = dateFormat(created, "h:MM TT")
  
  return(
    <div
      className="comment-box-container"
    >
      <p
        className="comment-box-message"
      >
        "{message}"
      </p>
      <p
        className="comment-box-details"
      >
        {name} on {formatDate} at {formateTime}
      </p>
    </div>
  )
}

export default CommentBox