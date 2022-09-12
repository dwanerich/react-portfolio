import { Link } from "react-router-dom"

const AllBlogs = ({blogs}) => {
  // PROPS BELOW DESTRUCTURED BELOW
  // let blogs = props.blogs;
  // let title = props.title;

  //  const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setData(newBlogs)
  // }

  return (
    <div className="blogs">
      <h2>All</h2>
       {blogs.map(blog => (
        <div className="preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBlogs;
