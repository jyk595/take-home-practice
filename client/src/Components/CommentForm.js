import { useState } from 'react';

function CommentForm({ setCommentList }) {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  })

  function changeCommentForm(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function submitCommentForm(e) {
    e.preventDefault();

    const response = await fetch(`http://localhost:3001/createComment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      response.json()
      .then(comment=>{
        fetch(`http://localhost:3001/getComment?id=${comment.id}`)
        .then(res=>res.json())
        .then(data=>{
          setCommentList((commentList)=>([
            data,
            ...commentList
          ]))
        });

        setFormData({
          name: "",
          message: ""
        });
      })
    } else {
      response.json()
      .then(message=>alert(message.errors))
    }
  }

  return(
    <form
      className="form-container"
      onSubmit={submitCommentForm}
    >
      <h2>Add a comment</h2>
      <div
        className="form-section-container"
      >
        <label
          htmlFor="name"
          className="form-label"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          className="form-input"
          required
          onChange={changeCommentForm}
        />
      </div>
      
      <div
        className="form-section-container"
      >
        <label
          htmlFor="message"
          className="form-label"
        >
          Message
        </label>
        <textarea
          type="text"
          name="message"
          placeholder="Your message here"
          value={formData.message}
          className="form-input-text"
          required
          onChange={changeCommentForm}
        />
      </div>

      <input 
        type="submit"
        value="Comment"
        className="submit-button"
      />
    </form>
  )
}

export default CommentForm;