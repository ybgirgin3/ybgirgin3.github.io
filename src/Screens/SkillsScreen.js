import React from "react";
import {
  Card,
  Container,
  ListGroup,
  ProgressBar,
  ListGroupItem,
} from "react-bootstrap";
import "./styles/SkillsScreen.css";

import { Tabs } from "antd";
import "antd/dist/antd.css";
const { TabPane } = Tabs;

function SkillsScreen() {
  return (
    <div className="containerClass">
      <Tabs tabPosition="top" animated centered>
        <TabPane tab="Software" key="1">
          <Container>
            <Card className="subCardContainer innerRow boss">
              <Card.Header>Programming</Card.Header>
              <Card.Body>
                <Card.Title>Over 1000 Lines</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Percentiles indicate self-confidence level in the specified
                  list element
                </Card.Subtitle>

                <ListGroup className="list-group-flush ">
                  <ListGroupItem>
                    {" "}
                    Python{" "}
                    <ProgressBar
                      animated
                      now={80}
                      label={"80%"}
                      variant="success"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=python&sort=stargazers">
                      See Python Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    CSS{" "}
                    <ProgressBar
                      animated
                      now={65}
                      label={"65%"}
                      variant="info"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=css&sort=stargazers">
                      See CSS Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Jupyter Notebook{" "}
                    <ProgressBar
                      animated
                      now={60}
                      label={"60%"}
                      variant="primary"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=jupyter+notebook&sort=stargazers">
                      See Jupyter Notebook Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    Linux
                    <ProgressBar
                      animated
                      now={50}
                      label={"50%"}
                      variant="secondary"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=jupyter+notebook&sort=stargazers">
                      See Jupyter Notebook Projects
                    </Card.Link>
                  </ListGroupItem>

                  <ListGroupItem>
                    {" "}
                    Shell{" "}
                    <ProgressBar
                      animated
                      now={40}
                      label={"40%"}
                      variant="warning"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=jupyter+notebook&sort=stargazers">
                      See Jupyter Notebook Projects
                    </Card.Link>
                  </ListGroupItem>

                  <ListGroupItem>
                    {" "}
                    JavaScript (React JS)
                    <ProgressBar
                      animated
                      now={30}
                      label={"30%"}
                      variant="danger"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=javascript&sort=stargazers">
                      See JavaScript Projects
                    </Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
              <Card.Body>
                <Card.Title>Over 200 Lines</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Percentiles indicate self-confidence level in the specified
                  list element
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    C{" "}
                    <ProgressBar
                      animated
                      now={20}
                      label={"20%"}
                      variant="warning"
                    />
                    <Card.Link variant="primary" href="" disabled>
                      See C Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    C++
                    <ProgressBar
                      animated
                      now={12}
                      label={"12%"}
                      variant="danger"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=c%2B%2B&sort=stargazers">
                      See C++ Projects
                    </Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>

              <Card.Body>
                <Card.Title>Familiar</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Percentiles indicate self-confidence level in the specified
                  list element
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    React Native
                    <ProgressBar
                      animated
                      now={40}
                      label={"40%"}
                      variant="success"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=javascript&sort=stargazers">
                      See React Native Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    SQLite3
                    <ProgressBar
                      animated
                      now={25}
                      label={"25%"}
                      variant="info"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=jupyter+notebook&sort=stargazers">
                      See SQLite3 Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    Flutter
                    <ProgressBar
                      animated
                      now={12}
                      label={"12%"}
                      variant="warning"
                    />
                    <Card.Link
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See Flutter Projects
                    </Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Container>
        </TabPane>
        <TabPane tab="Electronics" key="2">
          <Container>
            <Card className="subCardContainer innerRow boss">
              <Card.Header>ELECTRICAL DESIGN and PROGRAMMING</Card.Header>
              <Card.Body>
                <Card.Title>Programming</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Percentiles indicate self-confidence level in the specified
                  list element
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    Raspberry PI
                    <ProgressBar
                      animated
                      now={90}
                      label={"90%"}
                      variant="success"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See Raspberry PI Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    Arduino{" "}
                    <ProgressBar
                      animated
                      now={70}
                      label={"70%"}
                      variant="info"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See Arduino Projects
                    </Card.Link>
                  </ListGroupItem>

                  <ListGroupItem>
                    {" "}
                    PIC18
                    <ProgressBar
                      animated
                      now={10}
                      label={"10%"}
                      variant="warning"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See PIC18 Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    STM32
                    <ProgressBar
                      animated
                      now={5}
                      label={"5%"}
                      variant="danger"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See STM32 Projects
                    </Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Percentiles indicate self-confidence level in the specified
                  list element
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    Eagle
                    <ProgressBar
                      animated
                      now={90}
                      label={"90%"}
                      variant="success"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See Eagle Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    Proteus{" "}
                    <ProgressBar
                      animated
                      now={70}
                      label={"70%"}
                      variant="info"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See Proteus Projects
                    </Card.Link>
                  </ListGroupItem>

                  <ListGroupItem>
                    {" "}
                    AutoCAD
                    <ProgressBar
                      animated
                      now={10}
                      label={"10%"}
                      variant="warning"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See AutoCAD Projects
                    </Card.Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    KiCAD
                    <ProgressBar
                      animated
                      now={5}
                      label={"5%"}
                      variant="danger"
                    />
                    <Card.Link
                      disabled
                      variant="primary"
                      target="_blank"
                      href="https://github.com/ybgirgin3?tab=repositories&q=&type=&language=makefile&sort=stargazers">
                      See KiCAD Projects
                    </Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Container>
        </TabPane>
        <TabPane tab="CourseWorks" key="3">
          <Container>
            <Card className="subCardContainer innerRow boss">
              <Card.Header>CourseWorks</Card.Header>
              <Card.Body>
                <Card.Title>Programming</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Percentiles indicate the level of progress on the platform
                  from which the course was taken
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    React Native Basics
                    <ProgressBar
                      animated
                      now={60}
                      label={"60%"}
                      variant="active"
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    AI Programming with Python
                    <ProgressBar
                      animated
                      now={32}
                      label={"32%"}
                      variant="active"
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Data Science with Python
                    <ProgressBar
                      animated
                      now={12}
                      label={"12%"}
                      variant="active"
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Rank Number Two Duzce University of Entrepreneurship
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>
                  <ListGroupItem>
                    Cyber Bullying and Protection Ways Course
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>

                  <ListGroupItem>
                    {" "}
                    Data Visualization Course
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Data Science with Python Course
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Machine Learning with Python Course
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Python Course
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    Python Programming Basics
                    <ProgressBar now={100} label={"100%"} variant="success" />
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Container>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default SkillsScreen;
