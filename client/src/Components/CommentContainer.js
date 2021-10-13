import CommentBox from './CommentBox';

function CommentContainer({ commentList }) {
  return(
    <div>
      <h2>Comments</h2>
      
      {commentList ?
      <div>
        {commentList.map((comment)=>{
          return <CommentBox
            key={comment.id}
            comment={comment}
          />
        })}
      </div>
      :
      <div
        className="no-comments-list"
      >
        <p>There are currently no comments. Add one above.</p>
      </div>
      }
    </div>
  )
}

export default CommentContainer