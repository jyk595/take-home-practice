import { useState, useEffect } from 'react';

import './App.css';
import CommentForm from './Components/CommentForm';
import CommentContainer from './Components/CommentContainer';

function App() {
  const [commentList, setCommentList] = useState(false);

  useEffect(()=>{
    fetch(`http://localhost:3001/getComments`)
    .then(res=>res.json())
    .then(data=>{
      setCommentList(data)
    })
  },[])

  return (
    <>
      <CommentForm 
        setCommentList={setCommentList}
      />
      <CommentContainer 
        commentList={commentList}
      />
    </>
  );
}

export default App;
