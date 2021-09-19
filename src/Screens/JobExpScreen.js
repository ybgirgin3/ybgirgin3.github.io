import React from "react";
import { Chrono } from "react-chrono";
import { ListGroupItem, ListGroup } from "react-bootstrap";
function JobExpScreen() {
  const items = [
    {
      title: "2018 - Present",
      cardTitle: "Freelance Software Developer",
      cardSubtitle:
        "I make agreements with individuals and institutions under the name of solution partnership. With;",
      // "I make agreements with individuals and institutions under the name of solution partnership.",
      // cardDetailedText:
      //   "Data analysis, Machine Learning, OpenCV, Pytorch, React.js, Vue.JS, Django ... 😃",
    },
    {
      title: "April 2019 - Present",
      cardTitle: "OVERSEA SOFTWARE COMMUNITY",
      cardSubtitle: `| Project Team Lead & Lead Software Developer at Oversea`,
    },
    {
      title: "July 2021 - Aug 2021",
      cardTitle: "AYHAN COMPUTER AND ELECTRONICS LIMITED COMPANY",
      cardSubtitle: "| SHORT TERM INTERN",
    },
    {
      title: "Mar 2019 - December 2019",
      cardTitle:
        "REALKOM TEXTILE PRODUCT INDUSTRY MARKETING AND FOREIGN TRADE INC .",
      cardSubtitle: `| RESEARCH AND DEVELOPMENT ENGINEER (INTERN + JOB)`,
    },
    {
      title: "Sep 2018 – Jan 2019",
      cardTitle: "DUZCE UNIVERSITY TECHNOLOGY TRANSFER OFFICE",
      cardSubtitle: `RANK NUMBER TWO DUZCE UNIVERSITY ENTREPRENEURSHIP`,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ width: "90%", height: "800px" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "black",
            secondary: "red",
            cardBgColor: "white",
            cardForeColor: "red",
            titleColor: "white",
          }}>
          <div>
            <ListGroup className="list-group-flush">
              <ListGroupItem> Machine Learning</ListGroupItem>
              <ListGroupItem> Data analysis</ListGroupItem>
              <ListGroupItem> Pytorch</ListGroupItem>
              <ListGroupItem> OpenCV</ListGroupItem>
              <ListGroupItem> React.js</ListGroupItem>
              <ListGroupItem> Django</ListGroupItem>
              <ListGroupItem> Raspberry PI</ListGroupItem>
              <ListGroupItem> PIC18</ListGroupItem>
            </ListGroup>
          </div>
          <div>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Stack Web Development and Mobile App Development
              </ListGroupItem>
              <ListGroupItem>
                Working with Python, Django Web Framework, Flask
              </ListGroupItem>
              <ListGroupItem>
                MongoDB, Bootstrap, Node JS and React Native
              </ListGroupItem>
            </ListGroup>
          </div>
          <div>Was a member of a team that responsible to built servers</div>
          <div>
            I was a member of the group that developed electronic systems to
            count products and store data on the server.
          </div>
          <div>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                2 out of 100 applicants chosen to be a member of
                Entrepreneurship .
              </ListGroupItem>
              <ListGroupItem>
                Programmable / (Hackable) Heatable Thermal Clothing Project.
              </ListGroupItem>
              <ListGroupItem>
                Full-Stack Engineer - Designed electrical circuit on eagle and
                used C-lang for embedded system
              </ListGroupItem>
              <ListGroupItem>
                Website Designer - Developed preview website for same project
                using HTML, CSS, JS and Flask (Python)
              </ListGroupItem>
            </ListGroup>
          </div>
        </Chrono>
      </div>
    </div>
  );
}

export default JobExpScreen;
