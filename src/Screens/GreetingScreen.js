import React from "react";
import {
  LinkedinOutlined,
  RedditOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./styles/GreetingScreen.css";
function GreetingScreen() {
  return (
    <div
      className="greetingContainer"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/mac2.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="name-section">
        <div className="title">
          {/* <div className="blur-one"> */}
          I'm Yusuf Berkay Girgin <br></br>
          <span style={{ fontSize: 26, color: "black" }}>
            {" "}
            I'm Freelance Software Developer & Former Electronics Designer and
            Embedded Developer <br></br> .. Welcome to My Personal Site
          </span>
          <div className="socials">
            <a
              rel="noreferrer"
              className="external-link"
              href="https://www.linkedin.com/in/yusufgirgin/"
              target="_blank">
              <LinkedinOutlined />
            </a>
            <a
              rel="noreferrer"
              className="external-link"
              href="https://www.reddit.com/user/SilentCryer"
              target="_blank">
              <RedditOutlined />
            </a>
            <a
              rel="noreferrer"
              className="external-link"
              href="https://github.com/ybgirgin3"
              target="_blank">
              <GithubOutlined />
            </a>
            <a
              rel="noreferrer"
              className="external-link"
              href="mailto:yusufbgirginis@gmail.com"
              target="_blank">
              <MailOutlined />
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default GreetingScreen;
