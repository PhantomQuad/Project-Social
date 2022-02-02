import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Post(props) {
  const [state, changeState] = useState({
    id: 1,
    age: 16,
    location: "",
    hobby: "",
    aboutme: "",
    photo: "",
  });

  return (
    <div>
      <p>
        ID
        <input type="number" />
      </p>
      <p>
        Location
        <input type="text" />
      </p>
      <p>
        DOB <input type="date" />
      </p>
      <p>
        Hobby
        <textarea type="text" />
      </p>
      <p>
        Aboutme
        <textarea type="text" />
      </p>
      <p>
        Photo
        <input type="text" />
      </p>
    </div>
  );
}
export default Post;
