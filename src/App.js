import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

import { Nav, Navbar, Container } from "react-bootstrap";

import SkillsScreen from "./Screens/SkillsScreen";
import JobExpScreen from "./Screens/JobExpScreen";
import ProjectsScreen from "./Screens/ProjectsScreen";
import HomeScreen from "./Screens/HomeScreen";
import GreetingScreen from "./Screens/GreetingScreen";
import ContactScreen from "./Screens/ContactScreen";

function App() {
  return (
    <Router>
      <Navbar sticky="top" bg="light" variant="light">
        <Container className="containerClass">
          <Nav className="me-5">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img
                  src={process.env.PUBLIC_URL + "/Berkay-m.png"}
                  alt="logo"
                  className="logo_"
                />
              </Navbar.Brand>
            </LinkContainer>
            <LinkContainer to="/home" className="url">
              <Nav.Link eventKey="link-2">More About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills" className="url">
              <Nav.Link eventKey="link-4">What is My Skills ?</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects" className="url">
              <Nav.Link eventKey="link-3">What Did I Do So Far ?</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/job-exp" className="url">
              <Nav.Link eventKey="link-5">What is My Job Experience ?</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className="url">
              <Nav.Link eventKey="link-6">How Can You Contact Me ?</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={GreetingScreen} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/projects" component={ProjectsScreen} />
        <Route exact path="/skills" component={SkillsScreen} />
        <Route exact path="/job-exp" component={JobExpScreen} />
        <Route exact path="/contact" component={ContactScreen} />
      </Switch>
    </Router>
  );
}

export default App;
