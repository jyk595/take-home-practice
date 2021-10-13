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
        console.log(comment)

        // setCommentList((commentList)=>([
        //   comment,
        //   ...commentList
        // ]))
        setFormData({
          name: "",
          message: ""
        })
      })
    } else {
      response.json()
      .then(message=>alert(message.errors))
    }
  }

  return(
    <form
      onSubmit={submitCommentForm}
    >
      <div
        className="form-container"
      >
        <label
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          required
          onChange={changeCommentForm}
        />
      </div>
      
      <div
        className="form-container"
      >
        <label
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          type="text"
          name="message"
          placeholder="Your message here"
          value={formData.message}
          required
          onChange={changeCommentForm}
        />
      </div>

      <input 
        type="submit"
        value="Submit Comment"
      />
    </form>
  )
}

export default CommentForm;