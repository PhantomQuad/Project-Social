import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

toastr.options = {
  closeButton: true,
  debug: false,
  extendedTimeOut: "3000",
  hideDuration: "1000",
  hideEasing: "linear",
  hideMethod: "fadeOut",
  newestOnTop: false,
  onclick: null,
  positionClass: "toast-top-full-width",
  preventDuplicates: true,
  progressBar: true,
  showDuration: "3000",
  showEasing: "swing",
  showMethod: "fadeIn",
  timeOut: "5000",
};

function Post(props) {
  const [state, changeState] = useState({
    username: "",
    age: "",
    location: "",
    hobby: "",
    aboutme: "",
    photo: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.addProfile(
      state.username,
      state.age,
      state.location,
      state.hobby,
      state.aboutme,
      state.photo
    );
    toastr.success("Your profile added successfully");
    changeState({
      username: "",
      age: "",
      location: "",
      hobby: "",
      aboutme: "",
      photo: "",
    });
  };

  const handleChange = (event) => {
    const newState = { ...state };
    if (event.target.name === "completed") {
      newState[event.target.name] = !state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeState(newState);
  };

  return (
    <div>
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Group controlId="userName">
          <Form.Label> Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={state.username}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="userAge">
          <Form.Label> Age</Form.Label>
          <Form.Control
            name="age"
            type="number"
            value={state.age}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="userLocation">
          <Form.Label> Location</Form.Label>
          <Form.Control
            name="location"
            type="text"
            value={state.location}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="userLocation">
          <Form.Label> Date of Birth</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            value={state.dob}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="userHobby">
          <Form.Label> Hobbys</Form.Label>
          <Form.Control
            name="hobby"
            type="text"
            value={state.hobby}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="userAbout">
          <Form.Label> About You</Form.Label>
          <Form.Control
            name="aboutme"
            type="text"
            value={state.aboutme}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="userPhoto">
          <Form.Label> Photo</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            value={state.photo}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Post;
