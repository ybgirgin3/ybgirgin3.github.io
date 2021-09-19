import React from "react";
import { Container, Row, Card, CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ProjectScreen.css";
import { Badge } from "antd";

function ProjectsScreen() {
  return (
    <div className="containerClass">
      <div className="title-section">Project Made By Me !</div>
      <Container>
        <Row xs={4} md={3} className="g-4">
          <CardColumns>
            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software" color="red">
                <Card.Body>
                  <Card.Title>LINUX ENVIRONMENT EXTENSION - KDE</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner - Contributer | May 2019 - December 2019 |
                    Duzce, Turkey (remote)
                  </Card.Subtitle>
                  <Card.Text>
                    I developed a KDE Linux Desktop Extension to create a better
                    environment for users and software developers
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/KDynamic">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software" color="red">
                <Card.Body>
                  <Card.Title>Mask Detection System</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner | August 2020 - ... | Sakarya, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    I built a Mask Detection System for Indoor Places. Which can
                    be integrated general CCTV system that already set up to
                    place - continues..
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/mask_detection_gui">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software" color="red">
                <Card.Body>
                  <Card.Title>SCTC</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner - 09.09.2021 - 11.09.2021 | Sakarya, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    SCTC (Screenshot To Clipboard) an alternative to MacOS
                    Screenshot to Clipboard feature for Linux
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/SCTC">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
          </CardColumns>
          <CardColumns>
            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software + Electronic" color="red">
                <Card.Body>
                  <Card.Title>
                    FIRE <br></br>DETECTION SYSTEM
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner | August 2019 - January 2020 | Sakarya, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    I developed a Fire Detection Systems using basic Image
                    Processing Techniques and combining with basic electronics
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/SeniorYearFinalProject">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
            <Card className="projectCardContainer innerRow wider">
              <Badge.Ribbon text="Software + Electronic" color="red">
                <Card.Body>
                  <Card.Title>
                    HEATABLE <br></br>THERMAL CLOTHING
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner - Embedded Programmer - Website Designer |
                    September 2018 - January 2019 | Duzce, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    I led the development of the Heated Thermal Clothing
                    Project, which helps soldiers, security guards, and officers
                    in northern countries from cold weather.
                  </Card.Text>
                  <Card.Link
                    disabled
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/SeniorYearFinalProject">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>

            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software + Electronic" color="red">
                <Card.Body>
                  <Card.Title>Robotic-Arm</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner (for a client) | Sakarya, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    Endustrial Robotic Arm Programming with Image Processing,
                    Tensorflow, Raspberry PI (for prototype version) (Turkish)
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/Robotic-Arm">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
          </CardColumns>
          <CardColumns>
            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software + Electronic" color="red">
                <Card.Body>
                  <Card.Title>RaspML</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Owner (for a client) | Sakarya, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    GDAL programming and interpreting with OpenCV, Python
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/RaspML">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
            <Card className="projectCardContainer innerRow">
              <Badge.Ribbon text="Software" color="red">
                <Card.Body>
                  <Card.Title>Telegram Git Bot</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Project Co-Owner | Duzce, Turkey
                  </Card.Subtitle>
                  <Card.Text>
                    Basic telegram bot for getting any community informations
                    from telegram without opening heavy browsers and log in
                    github account
                  </Card.Text>
                  <Card.Link
                    variant="primary"
                    target="_blank"
                    href="https://github.com/ybgirgin3/telegram-git-bot">
                    See Project's Github Page
                  </Card.Link>
                </Card.Body>
              </Badge.Ribbon>
            </Card>
          </CardColumns>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsScreen;
