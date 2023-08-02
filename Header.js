import React from "react";



export default function Header() {
  return (
    <>
      <header>
        <img src="./images/me.jpg" className="me" />
        <h2 className="chioma">Chioma Veronica</h2>
        <p className="frontend">Frontend Developer</p>
        <a target="_blank" className="website" href="https://www.sisiverodata.com">
          www.sisiverodata.com
        </a>
      </header>
      <div className="btn-cont">
        <a className="email" href="mailto:veronicaezezim@gmail.com">
        <img src="./images/Mail.svg" className="mail-icon" />
          Email
        </a>
        <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/chioma-veronica-ezezim/">
        <img src="./images/linkedin.svg" className="linkedin-icon" />LinkedIn</a>
      </div>
    </>
  );
}
