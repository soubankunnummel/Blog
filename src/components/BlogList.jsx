import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit'; 
import { useBlogContext } from '../BlogContest';

export default function BlogList() {
  const { state } = useBlogContext();
  const storedData = JSON.parse(localStorage.getItem("blogData"));

  return (
    <>
      <h1>Blog List</h1>
      <div className='container'> 
        <div className="card-list" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {state.blogs.map((blog, index) => (
            <MDBCard key={index}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: 'black', fontFamily: 'fantasy', textAlign: 'center' }}>{blog.title}</MDBCardTitle>
                <MDBCardText style={{ color: 'black' }}>{blog.body}</MDBCardText>
                <MDBBtn onClick={() => viewBlog(storedData)}>Read More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </div>
    </>
  );
}

// Define a function to view a blog post using the stored data
const viewBlog = (data) => {
  if (data) {
    console.log("Title:", data.title);
    console.log("Body:", data.body);
  } else {
    console.log("No stored data found.");
  }
};
