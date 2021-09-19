import React, { useEffect, useState } from "react";

import "./styles/HomeScreen.css";

import {
  Container,
  Row,
  Card,
  CardColumns,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeScreen() {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    position: "relative",
    top: -10,
  };

  useEffect(() => {
    if (!isHovered) {
      return;
    }
  });

  const trigger = () => {
    setIsHovered(true);
  };

  return (
    <Container>
      <div className="container">
        <div className="content-section">
          <p> My name is Yusuf Berkay Girgin</p>
          <p>I'm from Sakarya based on Turkey. I was born in June 1998</p>
          <p>
            I graduated from Electrical and Electronics Engineering from Duzce
            University in Fall 2021. I have improving myself in software since
            second year of the university I started as a hobby and now it's a
            pleasure to create projects My favorite fields are Computer Vision
            and Self Driving Cars. I also built a project using OpenCV and
            Raspberry PI which detects Fire and focusing it with servos ...and
            I'm also freelancer developer in Turkey right now
          </p>
          I had experiences in ;
        </div>
        <div className="rowarea">
          <Row xs={4} md={3} className="g-4">
            <CardColumns>
              <Card
                className="cardContainer innerRow"
                onMouseEnter={trigger}
                style={style}>
                <Card.Body>
                  <Card.Title>Many Embedded System Projects with</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> Python</ListGroupItem>
                    <ListGroupItem> C</ListGroupItem>
                    <ListGroupItem> Beginner Level Assembly</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>E-commerce site with</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> Django</ListGroupItem>
                    <ListGroupItem> Django Restframework</ListGroupItem>
                    <ListGroupItem> Flask</ListGroupItem>
                    <ListGroupItem> React JS</ListGroupItem>
                    <ListGroupItem> Vue Js</ListGroupItem>
                    <ListGroupItem> React-Boostrap</ListGroupItem>
                    <ListGroupItem> AntDesign</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </CardColumns>
            <CardColumns>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>
                    Data Science and Data Visualization Projects with
                  </Card.Title>

                  <ListGroup className="list-group-flush">
                    <ListGroupItem> Scikit-learn</ListGroupItem>
                    <ListGroupItem> Pandas</ListGroupItem>
                    <ListGroupItem> Matplotlib</ListGroupItem>
                    <ListGroupItem> Seaborn</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>Mobile Applications</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> React Native</ListGroupItem>
                    <ListGroupItem> Vue Native (Prototype)</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>Hardwares</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> STM32</ListGroupItem>
                    <ListGroupItem> Raspberry PI 2/3/4/+</ListGroupItem>
                    <ListGroupItem> PIC18</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </CardColumns>
            <CardColumns>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>Machine Learning Projects with</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> PyTorch</ListGroupItem>
                    <ListGroupItem> Darknet</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>Image Processing Projects</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> OpenCV</ListGroupItem>
                    <ListGroupItem> Darknet</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="cardContainer innerRow">
                <Card.Body>
                  <Card.Title>Cross Platform GUI Applications</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> QT5</ListGroupItem>
                    <ListGroupItem> Tkinter</ListGroupItem>
                    <ListGroupItem> GTK</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </CardColumns>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default HomeScreen;
