import CommentBox from './CommentBox';

function CommentContainer({ commentList }) {
  return(
    <div>
      <h1>Comments</h1>

      {commentList.map((comment)=>{
        return <CommentBox 
          comment={comment}
        />
      })}
    </div>
  )
}

export default CommentContainer