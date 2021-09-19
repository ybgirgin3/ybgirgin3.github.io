import React from "react";
import SocialMediaButtons from "react-social-media-buttons";

function ContactScreen() {
  const links = [
    "https://www.linkedin.com/in/yusufgirgin/",
    "https://www.reddit.com/user/SilentCryer",
    "https://github.com/ybgirgin3",
    "mailto:yusufbgirginis@gmail.com",
  ];

  const buttonStyle = {
    backgroundColor: "#0D6EFD",
    borderRadius: "50%",
  };

  const iconStyle = { color: "#ffffff" };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10%",
      }}>
      <div style={{ fontWeight: "bold" }}>
        Feel Free To Contact Me Wherever You Want 😃
      </div>
      <SocialMediaButtons
        links={links}
        buttonStyle={buttonStyle}
        iconStyle={iconStyle}
      />
    </div>
  );
}

export default ContactScreen;
