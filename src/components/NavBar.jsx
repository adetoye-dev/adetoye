import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [dataAttributes, setDataAttributes] = useState(false);

  const toggleNav = () => {
    setDataAttributes((prevAttr) => !prevAttr);
  };

  const NavLink = ({ text, link }) => {
    return (
      <li className="nav-link" onClick={toggleNav}>
        <a href={link}>{text}</a>
      </li>
    );
  };

  return (
    <header className="header-element">
      <div className="header">
        <div className="container nav-container">
          <div className="logo">
            <h2>Adetoye</h2>
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
              <NavLink link="#about-me" text="About Me" />
              <NavLink link="#contact-me" text="Get In Touch" />
              <a
                href="https://drive.google.com/file/d/17jfxvOmbIVkaiT1gqwe-qQk91aLL7rkw/view?usp=sharing"
                className="cta view-resume"
              >
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
