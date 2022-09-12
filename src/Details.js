import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch('http://localhost:3500/blogs/' + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:3500/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="details">
      { isPending && <div>Loading... </div> }
      { error && <div> { error }</div> }
      { blog && (
        <article>
          <h2> { blog.title } </h2>
          <p> Written by { blog.author } </p>
          <div> { blog.body } </div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
   );
}

export default Details;
