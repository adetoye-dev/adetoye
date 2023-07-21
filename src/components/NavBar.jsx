import { useState } from "react";
import "../styles/NavBar.css";
import resume from "../assets/My Resume.pdf";

const NavLink = ({ text, link, toggleNav }) => {
  return (
    <li className="nav-link" onClick={toggleNav}>
      <a href={link}>{text}</a>
    </li>
  );
};

const NavBar = () => {
  const [dataAttributes, setDataAttributes] = useState(false);

  const toggleNav = () => {
    setDataAttributes((prevAttr) => !prevAttr);
  };

  return (
    <header className="header-element">
      <div className="header">
        <div className="container nav-container">
          <div className="logo">
            <h2 className="text-2xl font-bold">Adetoye</h2>
          </div>
          <nav className="nav">
            <ul
              className="primary-navigation"
              data-visible={dataAttributes}
              id="primary-navigation"
            >
              <div onClick={toggleNav} className="nav-icon cancel-btn">
                <i className="fas fa-times"></i>
              </div>
              <NavLink link="#about-me" text="About Me" toggleNav={toggleNav} />
              <NavLink
                link="#contact-me"
                text="Get In Touch"
                toggleNav={toggleNav}
              />
              <a href={resume} download={true} className="cta view-resume">
                View Resume
              </a>
            </ul>
            <div
              aria-controls="primary-navigation"
              onClick={toggleNav}
              className="nav-icon menu-btn"
            >
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
