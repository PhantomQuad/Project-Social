import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import View from "./View";
import Post from "./Post";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  const [profile, changeProfile] = useState([]);

  const updateList = (username, age, location, hobby, photo) => {
    const listItem = { username, age, location, hobby, photo, likes: 0 };
    changeProfile(
      (state) => [...state, listItem],
      localStorage.setItem("list", JSON.stringify([...profile, listItem]))
    );
  };

  const incrementCount = (username) => {
    const newProfile = profile.map((post) =>
      post.username === username ? { ...post, likes: post.likes + 1 } : post
    );
    changeProfile(newProfile);
  };

  useEffect(() => {
    const listContents = localStorage.getItem("list");
    changeProfile(JSON.parse(listContents) || []);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Navbar bg="success" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://learning.thedeveloperacademy.com/pluginfile.php/1/theme_moove/logo/1624462331/TheDevAcademy%20Logo%20NB.png"
                width="50"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              The Dating Site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/post">
                  Post
                </Nav.Link>
                <Nav.Link as={Link} to="/view">
                  View
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

      <Container className="app">
        <Routes>
          <Route
            path="/post"
            element={
              <Post
                addProfile={(username, age, location, hobby, photo) =>
                  updateList(username, age, location, hobby, photo)
                }
              />
            }
          />
          <Route
            path="/view"
            element={
              <View profile={profile} incrementCount={(username) => incrementCount(username)} />
            }
          />
          <Route
            index
            element={
              <View profile={profile} incrementCount={(username) => incrementCount(username)} />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
