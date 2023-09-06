// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../BlogContest';

function BlogDetails() {
  const { state } = useBlogContext();
  const { id } = useParams();
  const blog = state.blogs.find((blog) => blog.id === id);
//   console.log(state.blogs);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetails;
