import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";
import { useBlogContext } from "../BlogContest";
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
  const { addBlog } = useBlogContext();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();


  const handleSubmit = () => {

    const newBlog = {
      title,
      body,
    };
    
    addBlog(newBlog);
    navigate("/blogs");
    localStorage.setItem("blogData", JSON.stringify(newBlog));
  };

//   const storedData = localStorage.getItem("token")

//   localStorage.setItem("toke",JSON.stringify(setTitle,setBody) )

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>WRITE A BLOG</h1>
      <textarea
        id="w3review"
        name="w3review"
        placeholder="Heading"
        rows="1"
        cols="50"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <br />
      <textarea
        id="w3review"
        name="w3review"
        rows="4"
        placeholder="What is in you mind..."
        cols="50"
        onChange={(e) => setBody(e.target.value)}
      />
      <br></br>
      <div style={{ textAlign: "center" }}>
        {/* <Link to={"/Bloglist"}> */}
          <MDBBtn className="me-1" color="secondary" onClick={handleSubmit}>
            Submit
          </MDBBtn>
        {/* </Link> */}
      </div>
    </div>
  );
}
