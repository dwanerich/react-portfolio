import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('dwane rich');
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault()
    let blog = { title, body, author }
    setIsPending(true);

    fetch('http://localhost:3500/blogs', {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new post successful')
      setIsPending(false);
      history('/');
    })

    }

  return (
    <div className="form">
      <h2>Leave a Comment</h2>

      <form onSubmit={handleSubmit}>
        <label> Name:</label>
        <input type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <label> Comment:</label>
        <textarea type="text"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}/>

        <label> Author:</label>
        <select
         value={author}
         onChange={(e) => setAuthor(e.target.value)}>
          <option value="sean carter">sean carter</option>
          <option value="steve stoute">steve stoute</option>
          <option value="dwane rich">dwane rich</option>
        </select>
        { !isPending && <button>Submit</button> }
        { isPending && <button disabled>Posting...</button> }

        {/* <h2> {title}</h2> */}
      </form>
    </div>
   );
}

export default Form;
